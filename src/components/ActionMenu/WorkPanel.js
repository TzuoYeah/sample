import react,{useEffect,useState} from "react"
import { useMode } from '../../Hook/Mode-hooks'
import { useToggle } from '../../Hook/Toggle-hooks'
import EditArea from './WorkPanel/EditArea'
import CommendArea from './WorkPanel/CommendArea'

export default function WorkPanel(){
    const modeName = {
        edit:"編輯模式",
        commend:"命令模式",
        editSubmit:"編輯模式_確認",
        control:"操作模式"
    }
    const {toggle,setToggle} = useToggle()
    const {workMode} = useMode()
    const [hint, setHint] = useState("")
    const [cmdLog, setLog] = useState("")

    const onClick = e => setToggle(!toggle)
    const changeHint = wordCount => setHint(() =>`${wordCount}/140` )
 
    return(
        <div className="row row-cols-1 mt-1" onClick={ e=> onClick(e) }>
            <CommendArea {...{hint,setLog}}/>
            <div className="col py-1 border border-bottom-0 rounded-top shadow-sm" style={{backgroundColor:"#eee"}}>{modeName[workMode]}</div>
            <EditArea {...{changeHint,cmdLog}}/> 
        </div>
    )
}