import react,{useEffect,useState} from "react"

const style = {
    resize: "none",
    backgroundColor:"#333",
    color:"white"
}

const style2 = {
    backgroundColor:"#111",
    color:"white",
    height:"24px",
    textAlign:"right"
}

function OperationPanelOnChange(){
    const OperationPanel = document.getElementById('OperationPanel')
    document.getElementById('OperationPanelInfo').innerHTML = `${OperationPanel.value.length}/140`
}

function ChangeMode(e,f){
    switch(e.keyCode){
        case 27:
            f()
        break;
      }
}

export default function Siderbar(){
    const [mode, setMode] = useState(true)

    useEffect(() => {
        const f = () => setMode(mode => mode?false:true)
        const OperationPanel = document.getElementById('OperationPanel')
        OperationPanel.focus()
        OperationPanel.addEventListener('keydown', e => ChangeMode(e,f))
        
    },[])

    return(
        <>
        <div className="row row-cols-1 p-3">
            <div className="col border">{mode?"命令模式":"編輯模式"}</div>
            <textarea id="OperationPanel" className="col" style={style} rows="4" placeholder="在此輸入內容..." onChange={OperationPanelOnChange}></textarea>
            <div id="OperationPanelInfo" className="col" style={style2}></div>
        </div>
        </>
    )
}