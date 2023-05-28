import {IUseTelegram} from "@/Types";

// @ts-ignore
const tg = window.Telegram.WebApp

export const useTelegram = ():IUseTelegram => {
    const onCloseButton = () => tg.close()
    const onToggleButton = () =>{
        if (tg.MainButton.isVisible) tg.MainButton.hide()
        else tg.MainButton.show()
    }
    return{ tg, onCloseButton, onToggleButton,user:tg.initDataUnsafe?.user }
}