import React from 'react'
import { useEffect, useState } from 'react'
import { Aside } from '../components/organisms'
import { AddTask, DoneTask } from '../components/molecules'
import { useLanguage } from '../contexts/LanguageContext';
import { TodoList } from '../components/molecules'
import UseTodoData from '../utils/UseTodoData';
import generateUUID from '../utils/GenerateUUID';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ListOfLanguage from '../utils/ListOfLanguage';

const Task = () => {
  const { todoData, addTodo, removeTodo, addDone } = UseTodoData();
  const [email, setEmail] = useState('');
  const { language } = useLanguage();
  const [switched, setSwitched] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const navigate = useNavigate();

  const languageData = ListOfLanguage(language);

  const name = email.split('@')[0];

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('todoData');
    toast.success(languageData.loggedOut);
    navigate('/login');
  }

  const handleUpdateProfile = () => {
    navigate('/update-profile');
  }

  const handleDeleteTodo = (id) => {
    removeTodo(id, languageData.todoSuccessToDeleted);
  }

  const handleTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoTitle.trim()) {
      addTodo({ id: generateUUID(), title: todoTitle, isDone: false, createdAt: new Date() });
      setTodoTitle('');
      toast.success(languageData.todoSuccessAdded);
    } else {
      toast.error(languageData.todoTitleShouldBeFilled);
    }
  };

  const handleAddDone = (id) => {
    addDone(id, languageData.todoIsDone);
  };

  const handleSwitch = () => {
    setSwitched((prevSwitched) => !prevSwitched);
  }

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-center h-screen gap-4">
      <Aside
        handleUpdateProfile={handleUpdateProfile}
        handleLogout={handleLogout}
        titleSwitch={switched ? languageData.done : languageData.todo}
        colorSwitch={switched ? 'text-[var(--text-light-green)]' : 'text-[rgb(240,72,184)]'}
        switched={handleSwitch}
        title={languageData.welcomeBack}
        titleEdit={languageData.editProfile}
        titleSignOut={languageData.signOut}
        name={name}
        className="flex flex-col items-center justify-center"
      />
      <div className="w-[100%] h-[85%] rounded-2xl bg-[var(--bg-dark-secondary)] md:px-12 p-10">
        <AddTask
          handleTodoTitle={handleTodoTitle}
          onSubmit={handleAddTodo}
          placeholder={languageData.addANewTask}
          className="w-full"
        />
        {switched ? (
          <div className="mt-8">
            <h1 className="text-white mb-4">
              {languageData.done} - {todoData.filter((item) => item.isDone).length}
            </h1>
            <div className="h-[60vh] custom-scrollbar">
              <DoneTask
                data={todoData.filter((item) => item.isDone).sort((a, b) => b.createdAt - a.createdAt)}
              />
              {todoData.filter((item) => item.isDone).length === 0 && <p className="text-white font-bold text-center">{languageData.noTaskDone}</p>}
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <h1 className="text-white mb-4">
              {languageData.taskToDo} - {todoData.filter((item) => !item.isDone).length}
            </h1>
            <div className="h-[60vh] custom-scrollbar">
              <TodoList
                handleDeleteTodo={handleDeleteTodo}
                handleDone={handleAddDone}
                data={todoData
                  .filter((item) => !item.isDone)}
              />
              {todoData.filter((item) => !item.isDone).length === 0 && <p className="text-white font-bold text-center">{languageData.noTaskTodo}</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default Task