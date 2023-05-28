import React, {useEffect} from 'react';
import {Button} from "@/components/button/Button";
import {useTelegram} from "@/hooks/useTelegram";
import {Form} from "@/components/form/Form";


const App: React.FC = () => {

    const {tg} = useTelegram()
    useEffect(()=>{
        tg.ready()
    },[])
    return (
        <>
            <div>
                <Button onClick={()=>tg.close()}>Close</Button>
            </div>
            <Form/>


        </>
    )
}
export default App