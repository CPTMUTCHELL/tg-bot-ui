import {IUseTelegram} from "@/Types";

// @ts-ignore
const tg = window.Telegram.WebApp

export const useTelegram = ():IUseTelegram => {
    const onCloseButton = () => tg.close()

    return{ tg, onCloseButton,user:tg.initDataUnsafe?.user.username }
}