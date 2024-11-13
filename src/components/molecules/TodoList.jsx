import { Todo } from '../atoms'
import CheckIcon from '/src/assets/check.svg'
import TrashIcon from '/src/assets/trash.svg'

function TodoList({ handleDeleteTodo, handleDone, className, data, ...props }) {
    return (
        <div className={`${className}`} {...props}>
            {data.map((item) => (
                <Todo
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    className="w-full bg-[var(--bg-dark-p1)] p-6 rounded-lg my-4"
                    firstIcon={CheckIcon}
                    secondIcon={TrashIcon}
                    handleDone={handleDone}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList