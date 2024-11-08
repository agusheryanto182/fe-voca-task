import React from 'react'
import ArrowIcon from "/src/assets/arrow.svg"
import { Form, Button } from "../components/atoms"
import Avatar from "/src/assets/avatar.svg"
import { useLanguage } from '../contexts/LanguageContext';
import ListOfLanguage from '../utils/ListOfLanguage';
import { useNavigate } from 'react-router-dom';


const UpdateProfile = () => {
  const { language } = useLanguage();
  const languageData = ListOfLanguage(language);
  const navigate = useNavigate();

  const handlePrevURL = () => {
    navigate('/');
  }

  return (
    <div className="w-full md:max-w-[1200px] mx-auto flex items-center justify-center h-screen">
      <div className="w-full md:w-[50%] flex flex-col items-center justify-center rounded-2xl bg-[var(--bg-dark-secondary)] px-4 py-4 md:px-14 md:py-6">
        <div onClick={handlePrevURL} className="flex w-full items-center gap-4 cursor-pointer">
          <img src={ArrowIcon} alt="arrow" className="w-6 h-6 cursor-pointer" />
          <div className="text-xl font-semibold text-white">Edit Profile</div>
        </div>

        <div className='flex items-center justify-center mt-8 w-full'>
          <img src={Avatar} alt="arrow" className="w-50 h-59" />
        </div>

        <form className='w-full'>
          <div className='mt-4  mx-auto space-y-6 '>
            <Form
              title={languageData.profileURL}
            >
              <input
                type="text"
                className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                placeholder={languageData.imageURLPlaceholder}
              />
            </Form>
            <Form
              title={languageData.name}
            >
              <input
                type="text"
                className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                placeholder={languageData.namePlaceholder}
              />
            </Form>
            <Form
              title={languageData.email}
            >
              <input
                type="text"
                className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                placeholder={languageData.emailPlaceholder}
              />
            </Form>
            <Form
              title={languageData.password}
            >
              <input
                type="text"
                className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                placeholder={languageData.passwordPlaceholder}
              />
            </Form>

            <Button
              title={languageData.submit}
              type="submit"
              className={`text-white w-full border-[var(--text-purple-light)] bg-[var(--purple-dark)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-purple-dark)]' : ''} flex justify-center align-center items-center gap-2 p-2`}
            />
          </div>
        </form>
      </div >
    </div >
  )

}

export default UpdateProfile