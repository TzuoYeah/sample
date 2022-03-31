import react,{useEffect,useState} from "react"
import { useMode } from '../../Hook/Mode-hooks'
import { useToggle } from '../../Hook/Toggle-hooks'
import EditArea from './WorkPanel/EditArea'
import CommendArea from './WorkPanel/CommendArea'

export default function WorkPanel(){
    const modeName = {
        edit:"編輯模式",
        commend:"命令模式",
        editSubmit:"編輯模式_確認"
    }
    const {toggle,setToggle} = useToggle()
    const {workMode} = useMode()
    const [hint, setHint] = useState("")
    const [cmdLog, setLog] = useState("")

    const onClick = e => setToggle(!toggle)
    const changeHint = wordCount => setHint(() =>`${wordCount}/140` )
    const addLog = newLog => setLog(oldLog=>oldLog===""?newLog:oldLog+"\n"+newLog)
 
    return(
        <div className="row row-cols-1 mt-3" onClick={ e=> onClick(e) }>
            <div className="col py-1 border rounded-top" style={{backgroundColor:"#eee"}}>{modeName[workMode]}</div>
            <EditArea {...{changeHint,cmdLog}}/> 
            <CommendArea {...{hint,addLog}}/>
        </div>
    )
}