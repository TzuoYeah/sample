import react,{useEffect,useRef,useState} from "react"

const actionMode = ["編輯模式","命令模式"]

const style = {
    resize: "none",
    backgroundColor:"#fff",
    color:"#111",
    border:"none",
    outline:"none"
}
const style2 = {
    resize: "none",
    backgroundColor:"#bbb",
    color:"gray",
    overflow:"hidden",
    borderTop:"solid 1 light",
    outline:"none"
}

//---

function commend(e,commendPanel){
    e.preventDefault()
    commendPanel.current.value = ""
}
function editSubmit(e,setState,commendPanel){
    e.preventDefault()
    commendPanel.current.value="請按任意鍵確認送出，或輸入'n'返回編輯。"
    setState()
    // 切換到命令模式後，要改成執行命令狀態(y/n)這樣。（不是輸入命令）
    //請按任意鍵確認送出，或輸入'n'返回編輯。
}

//---

function editModeOnChange(e,{mode,editPanel,commendPanel}){
    if (mode==0) commendPanel.current.value = `${editPanel.current.value.length}/140`
}

function editModeKeydown(e,{setState,editPanel,commendPanel}){
    switch(e.keyCode){
        case 192:
            commendPanel.current.value=""
            if (e.ctrlKey) setState()
            break;
        case 13:
            if(!e.shiftKey) editSubmit(e,setState,commendPanel)
            break;
      }
}
function commendModeKey(e,{setState,editPanel,commendPanel}){
    switch(e.keyCode){
        case 192:
            commendPanel.current.value=""
            if (e.ctrlKey) setState()
            break;
        case 13:
            commend(e,commendPanel)
            break;
      }
}

export default function OperationPanel(){
    const [mode, setModeState] = useState(0)
    const editPanel = useRef()
    const commendPanel = useRef()
    const f = () => setModeState(mode => mode+1 > 1?0 : mode+1)
    const option = { 
        mode:mode, 
        setState:f,
        editPanel:editPanel,
        commendPanel:commendPanel
    }

    useEffect(() => {
        if(mode==0)editPanel.current.focus()
        if(mode==1)commendPanel.current.focus()
    },[mode])

    return(
        <div className="row row-cols-1 mt-3 border rounded">
            <div className="col py-2 border-bottom bg-light">{actionMode[mode]}</div>

            <textarea ref={editPanel} className="col" style={style} rows="4" 
            placeholder={mode==0?"在此輸入內容...":""} 
            disabled={mode!=0} 
            onKeyDown={ e=> editModeKeydown(e,option)} 
            onChange={ e=> editModeOnChange(e,option)}></textarea>

            <textarea ref={commendPanel} className="col rounded-bottom" style={style2} rows="1"
             dir={mode==0?"rtl":"ltr"} 
             placeholder={mode==1?"在此輸入指令...":""} 
            disabled={mode!=1} onKeyDown={ e=> commendModeKey(e,option)}></textarea>
        </div>
    )
}