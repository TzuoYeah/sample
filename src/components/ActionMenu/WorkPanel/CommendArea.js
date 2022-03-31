import react,{useRef,useEffect,useState}  from "react"
import { useMode } from '../../../Hook/Mode-hooks'

const style = {
    resize: "none",
    backgroundColor:"#eee",
    color:"gray",
    overflow:"hidden",
    outline:"none",
    fontSize:"16px"
}

//---方法

function man(com,addLog){
    if(com.length>1){
        addLog(`有關 '${com[1]}' 指令的說明...`)
    }
}

function changeViewMode(mode,{setViewMode,addLog}){
    //這些模式之後要做成json放在data資料夾，才能一致
    console.log(mode)
    switch(mode){
        case 'posts':
            addLog(`切換 貼文模式`)
            setViewMode('posts')
            break
        case 'board':
            addLog(`切換 看板列表`)
            setViewMode('board')
            break
    }
}

function toControll({setValue,setWorkMode}){
    setWorkMode('control')
}

function commend(e,option){
    e.preventDefault()
    const decoding = str => str.split(/\s+/).filter(e => e)
    const com = decoding(e.target.value)
    if(com.length===0) return

    switch(com[0]){
        case "c": toControll(option);break
        case "b": changeViewMode('board',{...option}) ;break
        case "p": changeViewMode('posts',{...option}) ;break
        case "cls": option.setLog("");break
        case "man": man(com,{...option}) ;break
        default: option.addLog(`'${e.target.value}' 為無效的命令，使用'help'查詢可用指令`)
    }
    option.setValue("")
}
//--- 狀態

function inCommend(e,option){
    if (e.ctrlKey){
        switch(e.key){
            case '`': option.setWorkMode('edit');break
            case '/': toControll(option);break
            default : break;
        }
    }
    switch(e.key){
        case 'Enter': commend(e,option);break
        case 'Escape': option.setWorkMode('edit');break
        default: break
    }
}

function inControl(e,option){
    e.preventDefault()
    if (e.ctrlKey){
        if(e.key==='`') option.setWorkMode('edit');
    }
    switch(e.key){
        case '/': 
            e.preventDefault()
            option.setWorkMode('commend')
            break
        default: break
    }
}
//---事件

function onKeyDown(e,option){
    if(option.workMode==='commend')inCommend(e,option);
    if(option.workMode==='control')inControl(e,option);
}

//---


export default function MemberInfo({hint,setLog}){
    const {workMode,setWorkMode,viewMode,setViewMode} = useMode()
    const [value, setValue] = useState("")
    const self = useRef()

    const values={
        edit:hint,
        commend:value,
        editSubmit:"請按下任意鍵送出資料，或按下'Esc'回到編輯模式。"
    }
    const onChange = e => setValue(e.target.value)
    const addLog = newLog => setLog(oldLog=>oldLog===""?newLog:oldLog+"\n"+newLog)

    const setDir =mode=>{
        switch(mode){
            case 'edit': return "rtl"
            case 'control': return "ltr"
            default: return "ltr"
        }
    }
    const setPlaceholder =(mode)=>{
        switch(mode){
            case 'commend': return "在此輸入命令..."
            case 'control': return "按下'/'回到命令模式"
            default: return ""
        }
    }
    const setDisabled =mode=>{
        switch(mode){
            case 'edit': return true
            case 'commend':
            case 'control': return false
            default: return ""
        }
    }
    useEffect(()=>{
        if(workMode==='commend') self.current.focus()
        if(workMode==='control'){
            self.current.value=""
            self.current.focus()
        }
    })

    const option={
        viewMode,
        workMode,
        setWorkMode,
        setValue,
        setLog,
        addLog,
        setViewMode
    }
    return(
        <textarea ref={self} className="col py-0 pe-3 mb-3 rounded-pill shadow-sm"  rows="1" 
            style={style} 
            dir={setDir(workMode)} 
            placeholder={setPlaceholder(workMode)} 
            disabled={setDisabled(workMode)} 
            onKeyDown={ e=> onKeyDown(e,option) } 
            onChange={ e=> workMode==='commend'?onChange(e):f=>f } 
            value={values[workMode]}
        ></textarea> 

    )
}