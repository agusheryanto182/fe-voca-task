import React from 'react'
import { useEffect, useState } from 'react'
import { Aside } from '../components/organisms'
import { AddTask, DoneTask } from '../components/molecules'
import { useLanguage } from '../contexts/LanguageContext';
import { TodoList } from '../components/molecules'

import data from '../dummy/todolist.json';

import en from '../locales/en.json';
import id from '../locales/id.json';

const Task = () => {
  const [email, setEmail] = useState('');
  const { language } = useLanguage();
  const [switched, setSwitched] = useState(false);

  const languageData = language === 'id' ? id : en;

  const name = email.split('@')[0];

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
        titleSwitch={languageData.switch}
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
          placeholder={languageData.addANewTask}
          className="w-full"
        />
        {switched ? (
          <div id='donelist' className="mt-8">
            <h1 className="text-white mb-4">
              {languageData.done} - {data.length}
            </h1>
            <div className="h-[60vh] custom-scrollbar">
              <DoneTask data={data} />
            </div>
          </div>
        ) : (
          <div id='todolist' className="mt-8">
            <h1 className="text-white mb-4">
              {languageData.taskToDo} - {data.length}
            </h1>
            <div className="h-[60vh] custom-scrollbar">
              <TodoList data={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  )

}

export default Task