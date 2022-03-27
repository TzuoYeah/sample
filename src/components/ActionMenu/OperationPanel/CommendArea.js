import react,{useRef,useEffect,useState,useContext}  from "react"
import { modeContext } from "../OperationPanel";

const style = {
    resize: "none",
    backgroundColor:"#bbb",
    color:"gray",
    overflow:"hidden",
    borderTop:"solid 1 light",
    outline:"none"
}

function commend(e,setValue){
    e.preventDefault()
    setValue("")
}
//--- 狀態

function onCommend(e,{changeModeType,setValue}){
    if (e.ctrlKey){
        if(e.key==='`') changeModeType(0);
    }
    switch(e.key){
        case 'Enter':
            if(!e.shiftKey) commend(e,setValue);break
        case 'Escape':
            changeModeType(0);break
        default: break
    }
}
//---事件

function onKeyDown(e,{mode,changeModeType,setValue}){
    if(mode===1)onCommend(e,{changeModeType,setValue});
}

export default function MemberInfo({hint,changeModeType}){    
    const {mode} = useContext(modeContext)
    const [value, setValue] = useState("")
    const self = useRef()

    const values=[hint,value,"請按下任意鍵送出資料，或按下'Esc'回到編輯模式。"]

    const onChange = e => setValue(e.target.value)
    useEffect(()=>{
        if(mode===1) self.current.focus()
    })
    return(
        <textarea ref={self} className="col rounded-bottom"  rows="1" 
            style={style} 
            dir={mode===0?"rtl":"ltr"} 
            placeholder={mode===1?"在此輸入指令...":""} 
            disabled={!(mode===1)} 
            onKeyDown={ e=> onKeyDown(e,{mode,changeModeType,setValue}) } 
            onChange={ e=> onChange(e) } 
            value={values[mode]}
        ></textarea> 

    )
}