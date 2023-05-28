import React, {useState} from 'react';
import "./Form.scss"
import {useTelegram} from "@/hooks/useTelegram";
import {IOrder} from "@/Types";
import {Button} from "@/components/button/Button";

export const Form:React.FC = () => {
    const {tg,user} = useTelegram()
    const [order, setOrder] = useState<IOrder>(Object)
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

        setOrder({...order,[e.target.name]:e.target.value})
        console.log(order)
    }
    return (
        <>
            <h3>Введите данные</h3>
            <div className="tg-form">


                <input type="text" name="address" placeholder="адрес" value={order.address} onChange={onChange}/>
                <input type="text" name="aroma" placeholder="Аромат" value={order.aroma} onChange={onChange}/>
                <input type="text" name="brand" placeholder="Бренд" value={order.brand} onChange={onChange}/>
                <input type="text" name="volume" placeholder="Обьем" value={order.volume} onChange={onChange}/>
                <input type="text" name="tel_num" placeholder="Телефон" value={order.tel_num} onChange={onChange}/>
                <input type="text" name="promo_code" placeholder="Промокод" value={order.promo_code} onChange={onChange}/>
                <Button onClick={()=>tg.sendData(JSON.stringify(order))}>Отправить заявку</Button>
            </div>
        </>
    )
}




