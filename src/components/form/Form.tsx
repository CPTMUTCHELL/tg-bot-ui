import React, {useCallback, useEffect, useState} from 'react';
import "./Form.scss"
import {useTelegram} from "@/hooks/useTelegram";
import {IOrder} from "@/Types";

export const Form:React.FC = () => {
    const {tg} = useTelegram()
    const [order, setOrder] = useState<IOrder>({customer:tg.initDataUnsafe?.user?.first_name.toString(),address:""})

    const onSendData = useCallback(()=>{

        tg.sendData(JSON.stringify(order))
        console.log(order)
    },[order])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked',onSendData)
        return tg.offEvent('mainButtonClicked',onSendData)
    },[onSendData])

    useEffect(()=>{
        tg.MainButton.setParams({text:"Отправить"})
    },[])

    useEffect(()=>{
        if (order.address===""){
            tg.MainButton.hide()
        }
        else {
            tg.MainButton.show()
        }
    },[order])


    return (
        <>
            <div>
                <h3>Введите данные</h3>
                <input type="text"
                       placeholder="адрес"
                       value={order.address}
                       onChange={(e)=>setOrder({...order,["address"]: e.target.value})}></input>
                <button onClick={()=>        tg.sendData(JSON.stringify(order))}>НАЖАТЬ</button>
            </div>
        </>
    )
}




