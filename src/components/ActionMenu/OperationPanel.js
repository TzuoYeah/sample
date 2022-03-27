import react,{useEffect,useState,createContext} from "react"
import EditArea from './OperationPanel/EditArea'
import CommendArea from './OperationPanel/CommendArea'

export const modeContext = createContext()

export default function OperationPanel(){
    const modeName = ["編輯模式","命令模式","編輯模式_"]
    const [mode, setModeType] = useState(0)
    const [hint, setHint] = useState("")
    const [cli, setCli] = useState("")

    const changeModeType = mode => setModeType(mode)
    const changeHint = wordCount => setHint(() =>`${wordCount}/140` )

    return(
    <modeContext.Provider value={{mode}}>
        <div className="row row-cols-1 mt-3 border rounded">
            <div className="col py-2 border-bottom bg-light">{modeName[mode]}</div>
            <EditArea {...{changeModeType,changeHint}}/>
            <CommendArea {...{hint:hint,changeModeType}}/>
        </div>
    </modeContext.Provider>
    )
}