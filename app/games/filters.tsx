"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDebounce } from 'use-debounce';
import '../../styles/globals.css'


const Filters = () => {
    const router = useRouter()
    const [casino, setCasino] = useState('')
    const [casinoDe] = useDebounce(casino, 500);
    const [gameType, setGameType] = useState('')
    const [gameTypeDe] = useDebounce(gameType, 500);
    const [gameName, setGameName] = useState('')
    const [gameNameDe] = useDebounce(gameName, 500);
    const [timeStart, setTimeStart] = useState('')
    const [timeStartDe] = useDebounce(timeStart, 500);

    useEffect(() => {
        router.push(`/games?casino=${casinoDe}&gameType=${gameTypeDe}&gameName=${gameNameDe}&timeStart=${timeStartDe}`)
    }, [casinoDe, router, gameTypeDe, gameNameDe, timeStartDe])
    return (
        <div>
            <form style={{display:'inline-flex'}}>
                <div>
                    <label>Loaction:</label>
                    <input type="text" onChange={(e) => { setCasino(e.target.value) }} />
                </div>
                <div>
                    <label>Game Type:</label>
                    <input type="text" onChange={(e) => { setGameType(e.target.value) }} />
                </div>
                <div>
                    <label>Game Name:</label>
                    <input type="text" onChange={(e) => { setGameName(e.target.value) }} />
                </div>
                <div>
                    <label>Game Date:</label>
                    <input type="date" onChange={(e) => { setTimeStart(e.target.value) }} />
                </div>
                <input type="reset" value="Reset" onClick={()=>{
                    setCasino('')
                    setGameType('')
                    setGameName('')
                    setTimeStart('')
                    }}/>
            </form>
        </div>
    )
}

export default Filters