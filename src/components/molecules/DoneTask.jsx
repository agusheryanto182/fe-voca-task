import { Todo } from "../atoms";

function DoneTask({ className, data, ...props }) {
    return (
        <div className={`custom-scrollbar ${className}`} {...props}>
            {data.map((item) => (
                <Todo
                    key={item._id}
                    title={item.title}
                    className="w-full bg-[var(--bg-dark-p1)] p-6 rounded-lg my-4 text-[var(--text-light-green)] line-through"
                />
            ))}
        </div>
    );
}

export default DoneTask;
