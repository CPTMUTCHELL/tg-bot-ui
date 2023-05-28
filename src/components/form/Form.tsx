import React, {useState} from 'react';
import "./Form.scss"
import {useTelegram} from "@/hooks/useTelegram";
import {IOrder} from "@/Types";
import {Button} from "@/components/button/Button";
import {Box, TextField} from "@mui/material";

export const Form:React.FC = () => {
    const {tg,user} = useTelegram()
    const [order, setOrder] = useState<IOrder>(Object)
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setOrder({...order,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault()
        console.log(order)
        tg.sendData(JSON.stringify(order))
    }
    return (
        <>

            <Box component="form" className="tg-form" onSubmit={handleSubmit}>
                <h3>Введите данные</h3>
                <TextField onChange={onChange} name="address" required label="Адрес"></TextField>
                <TextField onChange={onChange} name="brand" required label="Бренд"></TextField>
                <TextField onChange={onChange} name="volume" required label="Обьем"></TextField>
                <TextField onChange={onChange} name="tel_num" required label="Телефон"></TextField>
                <TextField onChange={onChange} name="promo_code"  label="Промокод"></TextField>
                <Button type="submit" >Отправить заявку</Button>

            </Box>

                {/*<Box className="tg-form">*/}
                {/*    <FormControl variant="standard">*/}
                {/*        <InputLabel>адрес</InputLabel>*/}
                {/*        <Input name="address" onChange={onChange}/>*/}
                {/*    </FormControl>*/}
                {/*    <TextField variant="standard"></TextField>*/}
                {/*</Box>*/}
                {/*<input  name="aroma" placeholder="Аромат" value={order.aroma} onChange={onChange}/>*/}
                {/*<input  name="brand" placeholder="Бренд" value={order.brand} onChange={onChange}/>*/}
                {/*<input  name="volume" placeholder="Обьем" value={order.volume} onChange={onChange}/>*/}
                {/*<input  name="tel_num" placeholder="Телефон" value={order.tel_num} onChange={onChange}/>*/}
                {/*<input  name="promo_code" placeholder="Промокод" value={order.promo_code} onChange={onChange}/>*/}
                {/*<Button onClick={()=>tg.sendData(JSON.stringify(order))}>Отправить заявку</Button>*/}

        </>
    )
}




