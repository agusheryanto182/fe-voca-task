

function Todo({ title, firstIcon, secondIcon, className, ...props }) {
    return (
        <div className={`flex justify-between items-center gap-4 ${className}`} {...props}>
            {title}
            <div className="flex items-center gap-5">
                {firstIcon && (typeof firstIcon === 'string' ? (
                    <img src={firstIcon} alt="icon" />
                ) : (
                    <span>{firstIcon}</span>
                ))}
                {secondIcon && (typeof secondIcon === 'string' ? (
                    <img src={secondIcon} alt="icon" />
                ) : (
                    <span>{secondIcon}</span>
                ))}
            </div>
        </div>
    )
}

export default Todo