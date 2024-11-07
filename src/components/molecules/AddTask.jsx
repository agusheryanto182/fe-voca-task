import { Form, Button } from "../atoms";
import IconPlus from '/src/assets/plus.svg';

function AddTask({ handleTodoTitle, onSubmit, placeholder, className, ...props }) {
    return (
        <div className={`${className}`} {...props}>
            <Form
                onSubmit={onSubmit}
            >
                <div className="flex items-center justify-between w-full gap-4">
                    <input
                        type="text"
                        placeholder={placeholder}
                        onChange={handleTodoTitle}
                        className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                    />
                    <Button
                        firstIcon={IconPlus}
                        type="submit"
                        className="p-2 bg-[var(--purple-semi-light)] border-none"
                    />
                </div>
            </Form>
        </div>
    );
}

export default AddTask;
