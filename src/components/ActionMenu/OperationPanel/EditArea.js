import react,{useRef,useState,useEffect,useContext}  from "react"
import { useMode } from "../Hook/Mode-hooks";
//import { modeContext } from "../OperationPanel";

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
function changeToConfirm(e,{changeModeType}){
    e.preventDefault()
    if(e.target.value.length===0) return
    changeModeType(2)
}
function backToEdit(e,{changeModeType}){
    e.preventDefault()
    changeModeType(0)
}
//---

function submit(e,{changeModeType,changeValue}){
    e.preventDefault()
    changeValue("")
    changeModeType(0)
}

//--- 狀態

function onConfirm(e,{changeModeType,changeValue}){
    switch(e.key){
        case 'Escape': backToEdit(e,{changeModeType}); break
        case 'Backspace': backToEdit(e,{changeModeType}); break
        default: submit(e,{changeModeType,changeValue})
    }
}

function onEdit(e,{changeModeType}){
    if (e.ctrlKey){
        if(e.key==='`') changeModeType(1);
    }

    switch(e.key){
        case 'Enter':
            if(!e.shiftKey) changeToConfirm(e,{changeModeType});break
        case 'Escape':
            changeModeType(1);break
            
        default: break
    }
}

//--- 事件

function onChange(e,{changeHint,changeValue}){
    changeValue(e.target.value)
    changeHint(e.target.value.length)
}

function onKeydown(e,option){
    if(option.mode===0) onEdit(e,{...option});
    if(option.mode===2) onConfirm(e,{...option});
}

export default function MemberInfo({changeHint=f=>f,cmdLog}){
    const {mode,changeModeType} = useMode()
    const [value, setValue] = useState("")
    const area = useRef()

    const values=[value,cmdLog,value]
    const changeValue = value => setValue(value)
    
    const option = {
        mode,
        changeModeType,
        changeValue,
        changeHint
    }

    useEffect(()=>{
        if(mode===0) area.current.focus()
        if(mode===1) area.current.scrollTop = area.current.scrollHeight
    })

    return(
        <textarea ref={area} className="col"
            style={mode===1?cmdStyle:style} 
            placeholder={mode===0?"在此輸入內容...":""} 
            disabled={!(mode===0||mode===2)} 
            onKeyDown={ e=> onKeydown(e,option) } 
            onChange={ e=> onChange(e,{...option}) }
            value={values[mode]}
        ></textarea>

    )
}