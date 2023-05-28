import {TelegramWebApps} from "telegram-webapps-types";
import WebApp = TelegramWebApps.WebApp;

export interface IUseTelegram{
    onCloseButton:()=>void
    onToggleButton:()=>void
    tg: WebApp
    user: any
}
export interface IOrder{
    customer?:string
    address:string

}