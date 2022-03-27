import react,{useEffect,useState,createContext} from "react"
import ModeProvider from "./Hook/Mode-hooks"
import EditArea from './OperationPanel/EditArea'
import CommendArea from './OperationPanel/CommendArea'

export const modeContext = createContext()

export default function OperationPanel(){
    const modeName = ["編輯模式","命令模式","編輯模式_"]
    const [mode, setModeType] = useState(0)
    const changeModeType = mode => setModeType(mode)
    const [hint, setHint] = useState("")
    const [cmdLog, setLog] = useState("")

    const changeHint = wordCount => setHint(() =>`${wordCount}/140` )
    const addLog = newLog => setLog(oldLog=>oldLog===""?newLog:oldLog+"\n"+newLog)
 
    return(
    <ModeProvider>
        <div className="row row-cols-1 mt-3 border rounded">
            <div className="col py-2 border-bottom bg-light">{modeName[mode]}</div>
            <EditArea {...{changeHint,cmdLog}}/> 
            <CommendArea {...{hint,addLog}}/>
        </div>
    </ModeProvider>
    )
}