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

function man(com,addLog){
    if(com.length>1){
        addLog(`有關 '${com[1]}' 指令的說明...`)
    }
}

function changeViewMode(mode,setViewMode,addLog){
    //這些模式之後要做成json放在data資料夾，才能一致
    switch(mode){
        case 0:
            addLog(`切換至 貼文模式`)
            setViewMode(0)
            break
        case 1:
            addLog(`切換至 看板列表`)
            setViewMode(1)
            break
    }
}


function commend(e,{viewMode,workMode,setWorkMode,setValue,addLog,setViewMode}){
    const decoding = str => str.split(/\s+/).filter(e => e)
    const com = decoding(e.target.value)
    e.preventDefault()
    if(com.length===0) return
    switch(com[0]){
        case "b": changeViewMode(1,setViewMode,addLog) ;break
        case "p": changeViewMode(0,setViewMode,addLog) ;break
        case "man": man(com,addLog) ;break
        default: addLog(`'${e.target.value}' 無效指令，使用help查詢合法指令`)
    }
    setValue("")
}
//--- 狀態

function onCommend(e,option){
    if (e.ctrlKey){
        if(e.key==='`') option.setWorkMode(0);
    }
    switch(e.key){
        case 'Enter':
            commend(e,option);break
        case 'Escape':
            option.setWorkMode(0);break
        case 'Backspace':
            if(e.target.value.length==0)option.setWorkMode(0);break
        default: break
    }
}
//---事件

function onKeyDown(e,option){
    if(option.workMode===1)onCommend(e,option);
}

export default function MemberInfo({hint,addLog}){
    const {workMode,viewMode,setWorkMode,setViewMode} = useMode()
    const [value, setValue] = useState("")
    const self = useRef()

    const values=[hint,value,"請按下任意鍵送出資料，或按下'Esc'回到編輯模式。"]
    const onChange = e => setValue(e.target.value)

    useEffect(()=>{
        if(workMode===1) self.current.focus()
    })

    const option={
        viewMode,
        workMode,
        setWorkMode,
        setValue,
        addLog,
        setViewMode
    }
    return(
        <textarea ref={self} className="col rounded-bottom py-0 pe-3"  rows="1" 
            style={style} 
            dir={workMode===0?"rtl":"ltr"} 
            placeholder={workMode===1?"在此輸入指令...":""} 
            disabled={!(workMode===1)} 
            onKeyDown={ e=> onKeyDown(e,option) } 
            onChange={ e=> onChange(e) } 
            value={values[workMode]}
        ></textarea> 

    )
}