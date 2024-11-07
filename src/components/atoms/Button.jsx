function Button({ firstIcon, type = "button", title, className, ...props }) {
    return (
        <button type={type} className={`text-center rounded-lg border ${className}`} {...props}>
            {firstIcon && (typeof firstIcon === 'string' ? (
                <img src={firstIcon} alt="icon" />
            ) : (
                <span>{firstIcon}</span>
            ))}
            {title}
        </button>
    );
}

export default Button;
