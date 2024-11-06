function Button({ firstIcon, type = "button", title, className, ...props }) {
    return (
        <button type={type} className={`text-center py-2 w-full rounded-lg border border-[var(--border-purple)] ${className}`} {...props}>
            {firstIcon}
            {title}
        </button>
    );
}

export default Button;
