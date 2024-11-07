import { Form, Button } from "../atoms";
import IconPlus from '/src/assets/plus.svg';

function AddTask({ placeholder, className, ...props }) {
    return (
        <div className={`${className}`} {...props}>
            <Form>
                <div className="flex items-center justify-between w-full gap-4">
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="text-[var(--text-grey-input)] bg-transparent border border-[var(--purple-semi-light)] py-3 px-4 rounded-lg w-full"
                    />
                    <Button
                        firstIcon={IconPlus}
                        className="p-2 bg-[var(--purple-semi-light)] border-none"
                    />
                </div>
            </Form>
        </div>
    );
}

export default AddTask;
