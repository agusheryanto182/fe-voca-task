import React, { useEffect, useState } from 'react';
import { Button, Logo, Form } from '../components/atoms';
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'react-toastify';

import en from '../locales/en.json';
import id from '../locales/id.json';

const Login = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const languageData = language === 'id' ? id : en;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value !== '' && !emailRegex.test(value)) {
      setEmailError(languageData.emailError);
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value !== '' && value.length < 8) {
      setPasswordError(languageData.passwordError);
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormFilled && emailError === '') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      navigate('/');
      toast.success(languageData.signedInSuccess);
    }
  };

  useEffect(() => {
    setIsFormFilled(email !== '' && password !== '');
  }, [email, password]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-auto w-full max-w-[600px] md:w-[600px] rounded-2xl bg-[var(--bg-dark-secondary)] md:p-16 p-8">
        <div>
          <Logo />
        </div>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className='mb-4'>
            <Form title="Email">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-transparent border border-[var(--text-purple-light)] p-2 rounded-lg text-[var(--text-grey-input)] w-full"
                  placeholder={languageData.emailPlaceholder}
                  required
                />
                {!emailError && email && (
                  <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </Form>
          </div>
          <div className='mb-8'>
            <Form title="Password">
              <div className='relative'>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-transparent border border-[var(--text-purple-light)] p-2 rounded-lg text-[var(--text-grey-input)] w-full"
                  placeholder={languageData.passwordPlaceholder}
                  required
                />
                {!passwordError && password && (
                  <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </Form>
          </div>
          <Button
            firstIcon={isFormFilled ? <FaCheck /> : <FaXmark />}
            disabled={!isFormFilled || emailError || passwordError}
            title={languageData.signIn}
            type="submit"
            className={`text-white w-full border-[var(--text-purple-light)] bg-[var(--purple-dark)] ${isFormFilled && !emailError && !passwordError ? 'hover:bg-[var(--purple-light)] hover:text-[var(--text-purple-dark)]' : ''} flex justify-center align-center items-center gap-2 p-2`}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
