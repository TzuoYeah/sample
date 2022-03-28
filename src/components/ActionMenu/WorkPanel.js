import react,{useEffect,useState,createContext} from "react"
import { useMode } from '../../Hook/Mode-hooks'
import EditArea from './WorkPanel/EditArea'
import CommendArea from './WorkPanel/CommendArea'

export const modeContext = createContext()

export default function WorkPanel(){
    const modeName = ["編輯模式","命令模式","編輯模式_"]
    const {workMode} = useMode()
    const [hint, setHint] = useState("")
    const [cmdLog, setLog] = useState("")

    const changeHint = wordCount => setHint(() =>`${wordCount}/140` )
    const addLog = newLog => setLog(oldLog=>oldLog===""?newLog:oldLog+"\n"+newLog)
 
    return(
        <div className="row row-cols-1 mt-3 border rounded">
            <div className="col py-2 border-bottom bg-light">{modeName[workMode]}</div>
            <EditArea {...{changeHint,cmdLog}}/> 
            <CommendArea {...{hint,addLog}}/>
        </div>
    )
}