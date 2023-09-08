'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Input = (prop: any) => {
    const router = useRouter()
    const [dataInput, setDataInput] = useState({
        user_id: prop.aurh,
        casino: prop.data.casino,
        machine: prop.data.machine,
        session_start: prop.data.session_start,
        session_stop: prop.data.session_stop,
        game_type: prop.data.game_type,
        game: prop.data.game,
        wageramt: prop.data.wageramt,
        wagernum: prop.data.wagernum,
        win: prop.data.win,
        loss: prop.data.loss,
        note: prop.data.note
    })
    const datapass = async () => {
            const result = await fetch('../../api/games', {
                method: 'PUT',
                body: JSON.stringify({ session_id:prop.session, data:dataInput})
            })
            const data = await result.json()
            console.log(data)
            if(data.Edit){
                router.push('/games')
            }
        }
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                datapass()
            }}>
                <div>
                    <label>Casino:</label>
                    <input type="text"
                        defaultValue={dataInput.casino}
                        onChange={(e) => {
                            setDataInput(prevState => ({
                                ...prevState,
                                casino: e.target.value
                            }));
                        }} required />
                </div>
                <div>
                    <label>Machine</label>
                    <input type="text" 
                    defaultValue={dataInput.machine}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            machine: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Session Start</label>
                    <input type="text" 
                    defaultValue={dataInput.session_start} 
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            session_start: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Session End</label>
                    <input type="text" 
                    defaultValue={dataInput.session_stop}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            session_stop: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Game Type:</label>
                    <input type="text" 
                    defaultValue={dataInput.game_type}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            game_type: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Game Name:</label>
                    <input type="text" 
                    defaultValue={dataInput.game}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            game: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Wager Amount:</label>
                    <input type="text" 
                    defaultValue={dataInput.wageramt}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            wageramt: e.target.value
                        }));
                    }}
                    required />
                </div>
                <div>
                    <label>Wager Number:</label>
                    <input type="text" 
                    defaultValue={dataInput.wagernum}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            wagernum: e.target.value
                        }));
                    }}
                    />
                </div>
                <div>
                    <label>Amount Win:</label>
                    <input type="text" 
                    defaultValue={dataInput.win}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            win: e.target.value
                        }));
                    }}
                    />
                </div>
                <div>
                    <label>Amount Loss:</label>
                    <input type="text" 
                    defaultValue={dataInput.loss}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            loss: e.target.value
                        }));
                    }}
                    />
                </div>
                <div>
                    <label>Note:</label>
                    <input type="text" 
                    defaultValue={dataInput.note}
                    onChange={(e) => {
                        setDataInput(prevState => ({
                            ...prevState,
                            note: e.target.value
                        }));
                    }}
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={()=>{router.push('/games')}}>Home page</button>
            </form>
        </div>
    )
}

export default Input