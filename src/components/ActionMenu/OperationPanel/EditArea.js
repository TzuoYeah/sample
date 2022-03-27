import react,{useRef,useEffect,useContext}  from "react"
import { modeContext } from "../OperationPanel";

const style = {
    resize: "none",
    backgroundColor:"#fff",
    color:"#111",
    border:"none",
    outline:"none"
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

function submit(e,{changeModeType}){
    e.preventDefault()
    e.target.value=""
    changeModeType(0)
}

//--- 狀態

function onConfirm(e,{mode,changeModeType}){
    switch(e.key){
        case 'Escape': backToEdit(e,{changeModeType}); break
        case 'Backspace': backToEdit(e,{changeModeType}); break
        default: submit(e,{changeModeType})
    }
}

function onEdit(e,{mode,changeModeType}){
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

function onChange(e,{changeHint}){
    changeHint(e.target.value.length)
}

function onKeydown(e,{mode,changeModeType}){
    if(mode===0) onEdit(e,{mode,changeModeType});
    if(mode===2) onConfirm(e,{mode,changeModeType});

}

export default function MemberInfo({changeModeType= f=>f,changeHint=f=>f}){
    const {mode} = useContext(modeContext)
    const area = useRef()

    useEffect(()=>{
        if(mode===0) area.current.focus()
    })

    return(
        <textarea ref={area} className="col" rows="4"
            style={style} 
            placeholder={mode===0?"在此輸入內容...":""} 
            disabled={!(mode===0||mode===2)} 
            onKeyDown={ e=> onKeydown(e,{mode,changeModeType}) } 
            onChange={ e=> onChange(e,{changeHint}) }
        ></textarea>

    )
}