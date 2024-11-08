import { Button } from "../atoms"
import PenIcon from '/src/assets/pen.svg';
import OutIcon from '/src/assets/out.svg';
import Avatar from '/src/assets/avatar.svg';

function Aside({ handleUpdateProfile, handleLogout, title, titleEdit, titleSignOut, name, className, ...props }) {
    return (
        <aside className={`${className}  bg-[var(--bg-dark-secondary)] rounded-2xl relative`} {...props}>
            <div className="mt-8 mb-8 space-y-5 flex flex-col items-center justify-center w-full">
                <img src={Avatar} alt="avatar" className="w-[100px] h-[100px] rounded-full" />
                <div className="text-center max-w-[80%]">
                    <p className="text-white">{title}</p>
                    <p className="text-white font-bold break-words">
                        {name}!
                    </p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
                    <Button onClick={handleUpdateProfile} firstIcon={PenIcon} title={titleEdit} className="w-[60%] flex items-center justify-center gap-2 text-white p-2 border-none bg-[var(--bg-grey)]" />
                    <Button onClick={handleLogout} firstIcon={OutIcon} title={titleSignOut} className="w-[60%] flex items-center justify-center gap-2 text-white p-2 border-none bg-[var(--bg-red)]" />
                </div>
            </div>
        </aside >
    )
}

export default Aside