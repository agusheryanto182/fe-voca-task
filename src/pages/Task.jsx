import React from 'react'
import { useEffect, useState } from 'react'

const Task = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-auto w-full max-w-[600px] md:w-[600px] rounded-2xl bg-[var(--bg-dark-secondary)] md:p-16 p-8">
        <h2 className="text-white">Welcome, {email}</h2>
      </div>
    </div>
  )
}

export default Task