import react,{useRef,useState,useEffect,useContext}  from "react"
import { useMode } from '../../../Hook/Mode-hooks'

const style = {
    resize: "none",
    backgroundColor:"#fff",
    color:"#111",
    outline:"none",
    minHeight:"100px",
    borderColor:"#dee2e6"
}
const cmdStyle = {
    resize: "none",
    backgroundColor:"#444",
    color:"#eee",
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
    setWorkMode('editSubmit')
}
function backToEdit(e,{setWorkMode}){
    e.preventDefault()
    setWorkMode('edit')
}
//---

function submit(e,{setWorkMode,changeValue}){
    e.preventDefault()
    changeValue("")
    setWorkMode('edit')
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
        if(e.key==='`') setWorkMode('commend');
    }

    switch(e.key){
        case 'Enter':
            if(!e.shiftKey) changeToConfirm(e,{setWorkMode});break
        case 'Escape':
            setWorkMode('commend');break
            
        default: break
    }
}

//--- 事件

function onChange(e,{changeHint,changeValue}){
    changeValue(e.target.value)
    changeHint(e.target.value.length)
}

function onKeydown(e,option){
    if(option.workMode==='edit') onEdit(e,{...option});
    if(option.workMode==='editSubmit') onConfirm(e,{...option});
}

//---

export default function MemberInfo({changeHint=f=>f,cmdLog}){
    const {workMode,setWorkMode} = useMode()
    const [value, setValue] = useState("")
    const area = useRef()
    const values={
        edit:value,
        commend:cmdLog,
        editSubmit:value
    }
    const changeValue = value => setValue(value)
    
    const option = {
        workMode,
        setWorkMode,
        changeValue,
        changeHint
    }

    useEffect(()=>{
        if(workMode==='edit') area.current.focus()
        if(workMode==='commend') area.current.scrollTop = area.current.scrollHeight
    })

    return(
        <textarea ref={area} className="col border-top-0 rounded-bottom "
            style={workMode==='commend'?cmdStyle:style} 
            placeholder={workMode==='edit'?"在此輸入內容...":""} 
            disabled={!(workMode==='edit'||workMode==='editSubmit')} 
            onKeyDown={ e=> onKeydown(e,option) } 
            onChange={ e=> onChange(e,{...option}) }
            value={values[workMode]}
        ></textarea>

    )
}