import {TelegramWebApps} from "telegram-webapps-types";
import WebApp = TelegramWebApps.WebApp;
import WebAppUser = TelegramWebApps.WebAppUser;

export interface IUseTelegram{
    onCloseButton:()=>void
    tg: WebApp
    user: WebAppUser
}
export interface IOrder{
    address:string
    tel_num:string
    aroma:string
    volume:string
    brand:string
    promo_code?:string

}