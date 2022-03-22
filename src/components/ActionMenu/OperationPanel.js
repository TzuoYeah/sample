import react,{useEffect,useState} from "react"

const actionMode = ["操作模式","命令模式","編輯模式"]

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


export default function Siderbar(){
    let modeType = 2
    const [modeIndex, setMode] = useState(modeType)

    function comend(e){
        e.preventDefault()
        const OperationPanel = document.getElementById('OperationPanel')
        OperationPanel.value = ""
        console.log(OperationPanel.value)
    }

    function OperationPanelOnChange(){
        const OperationPanel = document.getElementById('OperationPanel')
        if (modeType==2) document.getElementById('OperationPanelInfo').innerHTML = `${OperationPanel.value.length}/140`
    }

    function ChangeMode(e,f){
        const OperationPanel = document.getElementById('OperationPanel')
        const OperationPanelInfo = document.getElementById('OperationPanelInfo')
        switch(e.keyCode){
            case 192:
                if (e.ctrlKey){
                    OperationPanel.value = ""
                    OperationPanelInfo.innerHTML=""
                    f()
                }
                break;
            case 13:
                if (modeType==1) comend(e)
                break;
          }
    }

    useEffect(() => {
        const f = () => setMode(modeIndex =>{
            modeType = modeIndex+1>2?0:modeIndex+1
            return modeType
        })
        const OperationPanel = document.getElementById('OperationPanel')
        OperationPanel.focus()
        OperationPanel.addEventListener('keydown', e => ChangeMode(e,f))
        OperationPanel.addEventListener('input', () => OperationPanelOnChange())
    },[])

    return(
        <div className="row row-cols-1 p-3">
            <div className="col border">{actionMode[modeIndex]}</div>
            <textarea id="OperationPanel" className="col" style={style} rows="4" placeholder="在此輸入內容..."></textarea>
            <div id="OperationPanelInfo" className="col" style={style2}></div>
        </div>
    )
}