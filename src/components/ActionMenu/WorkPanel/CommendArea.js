import react,{useRef,useEffect,useState,useContext}  from "react"
import { useMode } from '../../../Hook/Mode-hooks'

const style = {
    resize: "none",
    backgroundColor:"#ddd",
    color:"gray",
    overflow:"hidden",
    borderTop:"solid 1 light",
    outline:"none",
    fontSize:"16px"
}

//---方法

function commend(e,setValue,addLog){
    e.preventDefault()
    if(e.target.value.length===0) return
    addLog(`'${e.target.value}' 無效指令，使用help查詢合法指令`)
    // man 可以針對查詢指令的功能細節
    setValue("")
}
//--- 狀態

function onCommend(e,{setWorkMode,setValue,addLog}){
    if (e.ctrlKey){
        if(e.key==='`') setWorkMode(0);
    }
    switch(e.key){
        case 'Enter':
            commend(e,setValue,addLog);break
        case 'Escape':
            setWorkMode(0);break
        case 'Backspace':
            if(e.target.value.length==0)setWorkMode(0);break
        default: break
    }
}
//---事件

function onKeyDown(e,{workMode,setWorkMode,setValue,addLog}){
    if(workMode===1)onCommend(e,{setWorkMode,setValue,addLog});
}

export default function MemberInfo({hint,addLog}){
    const {workMode,setWorkMode} = useMode()
    const [value, setValue] = useState("")
    const self = useRef()

    const values=[hint,value,"請按下任意鍵送出資料，或按下'Esc'回到編輯模式。"]
    const onChange = e => setValue(e.target.value)

    useEffect(()=>{
        if(workMode===1) self.current.focus()
    })

    return(
        <textarea ref={self} className="col rounded-bottom py-0 pe-3"  rows="1" 
            style={style} 
            dir={workMode===0?"rtl":"ltr"} 
            placeholder={workMode===1?"在此輸入指令...":""} 
            disabled={!(workMode===1)} 
            onKeyDown={ e=> onKeyDown(e,{workMode,setWorkMode,setValue,addLog}) } 
            onChange={ e=> onChange(e) } 
            value={values[workMode]}
        ></textarea> 

    )
}