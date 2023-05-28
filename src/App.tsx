import React, {useEffect} from 'react';
import {Button} from "@/components/button/Button";
import {useTelegram} from "@/hooks/useTelegram";
import {Form} from "@/components/form/Form";


const App: React.FC = () => {

    const {tg, onToggleButton} = useTelegram()
    useEffect(()=>{
        tg.ready()
    },[])
    return (
        <>
            <div>
                <Button onClick={()=>tg.close()}>Close</Button>
            </div>
            <Form/>
            <button onClick={onToggleButton}>toggle</button>

        </>
    )
}
export default App