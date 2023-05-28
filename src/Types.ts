import {TelegramWebApps} from "telegram-webapps-types";
import WebApp = TelegramWebApps.WebApp;
import WebAppUser = TelegramWebApps.WebAppUser;

export interface IUseTelegram{
    onCloseButton:()=>void
    tg: WebApp
    user: WebAppUser
}
export interface IOrder{
    customer?:string
    address:string

}