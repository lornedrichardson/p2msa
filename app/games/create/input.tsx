'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const Input = (prop: any) => {
    const router = useRouter()
    const [dataInput, setDataInput] = useState({
        user_id: Number(prop.auth),
        casino: null,
        machine: null,
        session_start: null,
        session_stop: null,
        game_type: null,
        game: null,
        wageramt: null,
        wagernum: null,
        win: null,
        loss: null,
        notes: null
    })
    const [time, setTime] = useState({
        session_start_time: null,
        session_stop_time: null,
    })
    const datapass = async () => {
        const result = await fetch('../../api/games', {
            method: 'POST',
            body: JSON.stringify({ data: dataInput })
        })
        const data = await result.json()
        if (data.Create) {
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
                        }}
                    // required
                    />
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
                    // required
                    />
                </div>
                <div>
                    <label>Session date:</label>
                    <input type="datetime-local"
                        defaultValue={dataInput.session_start}
                        onChange={(e) => {
                            setDataInput(prevState => ({
                                ...prevState,
                                session_start: e.target.value,
                            }));
                        }}
                    // required
                    />
                </div>
                <div>
                    <label>Session End:</label>
                    <input type="datetime-local"
                        defaultValue={dataInput.session_stop}
                        onChange={(e) => {
                            setDataInput(prevState => ({
                                ...prevState,
                                session_stop: e.target.value
                            }));
                        }}
                    // required
                    />
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
                    // required
                    />
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
                    // required
                    />
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
                    // required
                    />
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
                        defaultValue={dataInput.notes}
                        onChange={(e) => {
                            setDataInput(prevState => ({
                                ...prevState,
                                notes: e.target.value
                            }));
                        }}
                    />
                </div>
                <button type="submit" onClick={() => {
                    setDataInput(prevState => ({
                        ...prevState,
                        session_start: `${String(dataInput.session_start)}:00.000Z`,
                        session_stop: `${String(dataInput.session_stop)}:00.000Z`,
                    }))
                }}>Submit</button>
                <button type="button" onClick={() => { router.push('/games') }}>Home page</button>
            </form>
        </div>
    )
}

export default Input