import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import dummyData from "../dummy/todolist.json";


function UseTodoData() {
    const [todoData, setTodoData] = useState(dummyData);

    todoData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    useEffect(() => {
        const storedTodoData = localStorage.getItem('todoData');
        if (storedTodoData) {
            setTodoData(JSON.parse(storedTodoData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }, [todoData]);

    const addTodo = (todo) => {
        setTodoData((prevTodoData) => [...prevTodoData, todo]);
    };

    const removeTodo = (id, res) => {
        setTodoData((prevTodoData) => prevTodoData.filter((todo) => todo.id !== id));
        toast.success(res);
    };

    const addDone = (id, res) => {
        setTodoData((prevTodoData) =>
            prevTodoData.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
        );
        toast.success(res);
    };

    return {
        todoData,
        addTodo,
        removeTodo,
        addDone,
    };
}

export default UseTodoData;
