import { Todo } from '../atoms'
import CheckIcon from '/src/assets/check.svg'
import TrashIcon from '/src/assets/trash.svg'

function TodoList({ className, data, ...props }) {
    return (
        <div className={`${className}`} {...props}>
            {data.map((item) => (
                <Todo
                    key={item.id}
                    title={item.title}
                    className="w-full bg-[var(--bg-dark-p1)] p-6 rounded-lg my-4"
                    firstIcon={CheckIcon}
                    secondIcon={TrashIcon}
                />
            ))}
        </div>
    )
}

export default TodoList