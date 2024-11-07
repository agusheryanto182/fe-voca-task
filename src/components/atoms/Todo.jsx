

function Todo({ handleDeleteTodo, id, handleDone, title, firstIcon, secondIcon, className, ...props }) {
    return (
        <div className={`flex justify-between items-center gap-4 ${className}`} {...props}>
            {title}
            <div className="flex items-center gap-5">
                <div className="cursor-pointer" onClick={() => handleDone(id)}>
                    {firstIcon && (typeof firstIcon === 'string' ? (
                        <img src={firstIcon} alt="icon" />
                    ) : (
                        <span>{firstIcon}</span>
                    ))}
                </div>
                <div className="cursor-pointer" onClick={() => handleDeleteTodo(id)}>
                    {secondIcon && (typeof secondIcon === 'string' ? (
                        <img src={secondIcon} alt="icon" />
                    ) : (
                        <span>{secondIcon}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo