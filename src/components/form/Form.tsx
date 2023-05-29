import React, {useState} from 'react';
import "./Form.scss"
import {useTelegram} from "@/hooks/useTelegram";
import {IOrder} from "@/Types";
import {Button} from "@/components/button/Button";
import {Box, TextField, Typography} from "@mui/material";

export const Form:React.FC = () => {
    const {tg} = useTelegram()
    const [order, setOrder] = useState<IOrder>({
        address: "",
        aroma: "",
        brand: "",
        message: "",
        promo_code: "",
        tel_num: "",
        volume: "",
        city:"Ставрополь"})
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setOrder({...order,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        tg.sendData(JSON.stringify(order))
    }
    return (
        <>

            <Box component="form" className="tg-form" onSubmit={handleSubmit}>
                <Typography variant="h4" sx={{color:"black"}}>Введите данные</Typography>
                <TextField onChange={onChange} name="city" required label="Город" defaultValue="Ставрополь"></TextField>
                <TextField onChange={onChange} name="address" required label="Адрес" ></TextField>
                <TextField onChange={onChange} name="aroma" required label="Аромат"></TextField>
                <TextField onChange={onChange} name="brand" required label="Бренд"></TextField>
                <TextField onChange={onChange} name="volume" required label="Обьем"></TextField>
                <TextField onChange={onChange} name="tel_num" required label="Телефон"></TextField>
                <TextField onChange={onChange} name="promo_code" label="Промокод"></TextField>
                <TextField onChange={onChange} name="message" label="Сообщение продавцу" placeholder="Сообщение продавцу с пожеланиями, например-время доставки"></TextField>
                <Button type="submit" >Отправить заявку</Button>
                <button type="submit" >Отправить заявку</button>

            </Box>


        </>
    )
}




