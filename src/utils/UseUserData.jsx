import { useState } from 'react';
function UseUserData() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [imageURL, setImageURL] = useState('');

    const updateEmail = (email) => {
        setEmail(email);
        localStorage.setItem('email', email);
    }

    const updatePassword = (password) => {
        setPassword(password);
        localStorage.setItem('password', password);
    }

    const updateName = (name) => {
        setName(name);
        localStorage.setItem('name', name);
    }

    const updateImageURL = (imageURL) => {
        setImageURL(imageURL);
        localStorage.setItem('imageURL', imageURL);
    }

    const clearUserData = () => {
        setEmail('');
        setPassword('');
        setName('');
        setImageURL('');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('name');
        localStorage.removeItem('imageURL');
    }

    return {
        email,
        password,
        name,
        imageURL,
        updateEmail,
        updatePassword,
        updateName,
        updateImageURL,
        clearUserData
    };
}

export default UseUserData