function Form({ title, children, className = '', ...props }) {
    return (
        <form className={`flex flex-col gap-3 ${className}`} {...props}>
            {title && <label className="text-white font-semibold text-md">{title}</label>}
            {children}
        </form>
    );
}

export default Form;
