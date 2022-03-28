import react,{useRef,useState,useEffect,useContext}  from "react"
import { useMode } from '../../../Hook/Mode-hooks'

const style = {
    resize: "none",
    backgroundColor:"#fff",
    color:"#111",
    border:"none",
    outline:"none",
    minHeight:"100px"
}
const cmdStyle = {
    resize: "none",
    backgroundColor:"#444",
    color:"#eee",
    border:"none",
    outline:"none",
    fontSize:"14px",
    lineHeight:"24px",
    minHeight:"100px",
    fonts:"Monospace"
}


//--- 切換狀態
function changeToConfirm(e,{setWorkMode}){
    e.preventDefault()
    if(e.target.value.length===0) return
    setWorkMode(2)
}
function backToEdit(e,{setWorkMode}){
    e.preventDefault()
    setWorkMode(0)
}
//---

function submit(e,{setWorkMode,changeValue}){
    e.preventDefault()
    changeValue("")
    setWorkMode(0)
}

//--- 狀態

function onConfirm(e,{setWorkMode,changeValue}){
    switch(e.key){
        case 'Escape': backToEdit(e,{setWorkMode}); break
        case 'Backspace': backToEdit(e,{setWorkMode}); break
        default: submit(e,{setWorkMode,changeValue})
    }
}

function onEdit(e,{setWorkMode}){
    if (e.ctrlKey){
        if(e.key==='`') setWorkMode(1);
    }

    switch(e.key){
        case 'Enter':
            if(!e.shiftKey) changeToConfirm(e,{setWorkMode});break
        case 'Escape':
            setWorkMode(1);break
            
        default: break
    }
}

//--- 事件

function onChange(e,{changeHint,changeValue}){
    changeValue(e.target.value)
    changeHint(e.target.value.length)
}

function onKeydown(e,option){
    if(option.workMode===0) onEdit(e,{...option});
    if(option.workMode===2) onConfirm(e,{...option});
}

export default function MemberInfo({changeHint=f=>f,cmdLog}){
    const {workMode,setWorkMode} = useMode()
    const [value, setValue] = useState("")
    const area = useRef()

    const values=[value,cmdLog,value]
    const changeValue = value => setValue(value)
    
    const option = {
        workMode,
        setWorkMode,
        changeValue,
        changeHint
    }

    useEffect(()=>{
        if(workMode===0) area.current.focus()
        if(workMode===1) area.current.scrollTop = area.current.scrollHeight
    })

    return(
        <textarea ref={area} className="col"
            style={workMode===1?cmdStyle:style} 
            placeholder={workMode===0?"在此輸入內容...":""} 
            disabled={!(workMode===0||workMode===2)} 
            onKeyDown={ e=> onKeydown(e,option) } 
            onChange={ e=> onChange(e,{...option}) }
            value={values[workMode]}
        ></textarea>

    )
}