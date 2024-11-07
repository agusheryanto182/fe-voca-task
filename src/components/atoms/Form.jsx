function Form({ title, children, className = '', ...props }) {
    return (
        <form className={`flex flex-col gap-4 ${className}`} {...props}>
            {title && <label className="text-white font-semibold text-sm">{title}</label>}
            {children}
        </form>
    );
}

export default Form;
