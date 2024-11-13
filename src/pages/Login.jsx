import React, { useEffect, useState } from 'react';
import { Button, Logo, Form } from '../components/atoms';
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'react-toastify';
import ListOfLanguage from '../utils/ListOfLanguage';
import { loginUser } from "../api/api";

const Login = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const languageData = ListOfLanguage(language);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormFilled && emailError === '' && passwordError === '') {
      try {
        const response = await loginUser({ email, password });
        const token = response.data.data.token;
        localStorage.setItem('token', token)
        navigate('/');
        toast.success(languageData.signedInSuccess);
      } catch (error) {
        if (error.response && error.response.status === 404 || error.response.status === 401) {
          toast.error(languageData.notFoundAccountError);
        } else if (error.response && error.response.status === 400) {
          toast.error(languageData.badRequestError);
        } else {
          toast.error(languageData.signedInError);
        }
      }
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
            <Form title={languageData.email}>
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className=" bg-[var(--bg-primary)] border border-[var(--text-purple-light)] py-2 px-3 rounded-lg text-[var(--text-grey-input)] w-full"
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
            <Form title={languageData.password}>
              <div className='relative'>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="bg-[var(--bg-primary)] border border-[var(--text-purple-light)] py-2 px-3 rounded-lg text-[var(--text-grey-input)] w-full"
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
            className={`text-white w-full border-[var(--text-purple-light)] bg-[var(--purple-dark)] ${isFormFilled && !emailError && !passwordError ? 'hover:bg-[var(--bg-primary)] hover:text-[var(--text-purple-dark)]' : ''} flex justify-center align-center items-center gap-2 p-2`}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
