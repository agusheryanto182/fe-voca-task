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
import { FaBars, FaXmark } from "react-icons/fa6";
import { TbSwitchHorizontal } from "react-icons/tb";


const Task = () => {
  const { todoData, addTodo, removeTodo, addDone } = UseTodoData();
  const [email, setEmail] = useState('');
  const { language } = useLanguage();
  const [switched, setSwitched] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [bar, setBar] = useState(false);
  const navigate = useNavigate();

  const languageData = ListOfLanguage(language);

  const name = email.split('@')[0];

  const handleClickBar = () => {
    setBar((prevBar) => !prevBar);
  }

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
    <div className="max-w-full md:max-w-[1200px] mx-auto flex items-center justify-center h-screen gap-4">
      <div className='w-[30vw] h-[85vh] hidden md:block'>
        <Aside
          handleUpdateProfile={handleUpdateProfile}
          handleLogout={handleLogout}
          title={languageData.welcomeBack}
          titleEdit={languageData.editProfile}
          titleSignOut={languageData.signOut}
          name={name}
          className="flex flex-col items-center justify-center w-full h-full"
        />
      </div>

      <div className="w-[100vw] h-[80vh] md:h-[85vh] rounded-2xl bg-[var(--bg-dark-secondary)] md:px-12 p-6 flex flex-col items-center justify-center relative">
        <div onClick={handleSwitch}
          className={`${switched ? 'text-[var(--text-light-green)] hover:bg-[rgb(240,72,184)] hover:text-white' : 'text-[rgb(240,72,184)] hover:text-white hover:bg-[var(--text-light-green)]'} absolute text-lg top-0 right-0  cursor-pointer bg-white  rounded-tr-2xl rounded-bl-2xl flex items-center justify-center gap-2 px-6 py-2`
          }>
          <TbSwitchHorizontal className={`animate-spin `} />
          <p className="text-sm font-semibold uppercase">{switched ? languageData.done : languageData.todo}</p>
        </div>
        <div className='md:hidden block absolute top-6 left-6 z-10'>
          {bar ? (
            <FaXmark
              className="text-white text-2xl cursor-pointer"
              onClick={handleClickBar}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={handleClickBar}
            />
          )}
        </div>
        {bar && (
          <div className="md:hidden block w-[70vw] h-[80vh] absolute top-0 left-0 ">
            <Aside
              handleUpdateProfile={handleUpdateProfile}
              handleLogout={handleLogout}
              title={languageData.welcomeBack}
              titleEdit={languageData.editProfile}
              titleSignOut={languageData.signOut}
              name={name}
              className="flex flex-col items-center justify-center w-full h-full"
            />
          </div>
        )}
        <div className='w-full'>
          {switched ? (
            <div className="mb-4">
              <h1 className="text-center md:text-start break-words text-white mb-4">
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
            <div className="mb-4">
              <h1 className="text-center md:text-start text-white mb-4">
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
          <AddTask
            currTitle={todoTitle}
            handleTodoTitle={handleTodoTitle}
            onSubmit={handleAddTodo}
            placeholder={languageData.addANewTask}
            className="mt-4"
          />
        </div>
        {/* <div className='w-full '>
          <AddTask
            handleTodoTitle={handleTodoTitle}
            onSubmit={handleAddTodo}
            placeholder={languageData.addANewTask}
          />
        </div> */}
      </div>
    </div>
  )

}

export default Task