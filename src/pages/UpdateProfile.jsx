import React from 'react'
import ArrowIcon from "/src/assets/arrow.svg"
import { Form, Button } from "../components/atoms"
import Avatar from "/src/assets/avatar.svg"
import { useLanguage } from '../contexts/LanguageContext';
import ListOfLanguage from '../utils/ListOfLanguage';


const UpdateProfile = () => {
  const { language } = useLanguage();

  const languageData = ListOfLanguage(language);
  return (
    <div className="max-w-[1200px] mt-16 mb-16 mx-auto flex items-center justify-center h-screen gap-4">
      <div className="w-[50%] h-auto rounded-2xl bg-[var(--bg-dark-secondary)] px-10 py-8 pb-16">
        <div className="flex items-center gap-4">
          <img src={ArrowIcon} alt="arrow" className="w-6 h-6 cursor-pointer" />
          <div className="text-xl font-semibold text-white">Edit Profile</div>
        </div>

        <div className='flex items-center justify-center mt-8'>
          <img src={Avatar} alt="arrow" className="w-50 h-59" />
        </div>

        <form >
          <div className='mt-8 w-[85%] mx-auto space-y-8'>
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
              className={`text-white w-full border-[var(--text-purple-light)] bg-[var(--purple-dark)] hover:bg-[var(--purple-light)] hover:text-[var(--text-purple-dark)]' : ''} flex justify-center align-center items-center gap-2 p-2`}
            />
          </div>
        </form>
      </div >
    </div >
  )

}

export default UpdateProfile