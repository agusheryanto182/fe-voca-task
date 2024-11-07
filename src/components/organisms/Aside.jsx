import { Button } from "../atoms"
import PenIcon from '/src/assets/pen.svg';
import OutIcon from '/src/assets/out.svg';
import Avatar from '/src/assets/avatar.svg';
import { TbSwitchHorizontal } from "react-icons/tb";

function Aside({ colorSwitch, title, titleEdit, titleSignOut, switched, name, className, ...props }) {
    console.log(colorSwitch)
    return (
        <aside className={`${className} w-[30%] h-[85%] bg-[var(--bg-dark-secondary)] rounded-2xl relative`} {...props}>
            <div onClick={switched} className={`absolute text-2xl top-2 left-2 animate-spin ${colorSwitch} cursor-pointer`}>
                <TbSwitchHorizontal />
            </div>

            <div className="mt-8 mb-8 space-y-5 flex flex-col items-center justify-center w-full">
                <img src={Avatar} alt="avatar" className="w-[100px] h-[100px] rounded-full" />
                <div className="text-center">
                    <p className="text-white">{title}</p>
                    <p className="text-white font-bold">{name}!</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
                    <Button firstIcon={PenIcon} title={titleEdit} className="w-[60%] flex items-center justify-center gap-2 text-white p-2 border-none bg-[var(--bg-grey)]" />
                    <Button firstIcon={OutIcon} title={titleSignOut} className="w-[60%] flex items-center justify-center gap-2 text-white p-2 border-none bg-[var(--bg-red)]" />
                </div>
            </div>
        </aside >
    )
}

export default Aside