import react,{useEffect,useState} from "react"

const actionMode = ["編輯模式","命令模式"]

const style = {
    resize: "none",
    backgroundColor:"#333",
    color:"white"
}
const style2 = {
    resize: "none",
    backgroundColor:"#000",
    color:"white"
}

export default function Siderbar(){
    let modeType = 0
    const [modeIndex, setMode] = useState(modeType)

    function Commend(e){
        e.preventDefault()
        const CommendPanel = document.getElementById('CommendPanel')
        CommendPanel.value = ""
    }

    function EditPanelOnChange(){
        const EditPanel = document.getElementById('EditPanel')
        if (modeType==0) document.getElementById('CommendPanel').value = `${EditPanel.value.length}/140`
    }

    function EditMode(e,f){
        const EditPanel = document.getElementById('EditPanel')
        const CommendPanel = document.getElementById('CommendPanel')
        switch(e.keyCode){
            case 192:
                if (e.ctrlKey){
                    CommendPanel.value=""
                    f()
                }
                break;
          }
    }
    function CommendMode(e,f){
        const EditPanel = document.getElementById('EditPanel')
        const CommendPanel = document.getElementById('CommendPanel')
        switch(e.keyCode){
            case 192:
                if (e.ctrlKey){
                    CommendPanel.value=""
                    f()
                }
                break;
            case 13:
                Commend(e)
                break;
          }
    }

    useEffect(() => {
        const EditPanel = document.getElementById('EditPanel')
        const CommendPanel = document.getElementById('CommendPanel')

        const f = () => setMode(modeIndex =>{
            modeType = modeIndex+1>1?0:modeIndex+1
            if(modeType==0){
                EditPanel.disabled = false
                CommendPanel.disabled = true
                EditPanel.focus()
            }
            if(modeType==1){
                EditPanel.disabled = true
                CommendPanel.disabled = false
                CommendPanel.focus()
            }
            
            return modeType
        })

        EditPanel.focus()
        EditPanel.addEventListener('keydown', e => EditMode(e,f))
        CommendPanel.addEventListener('keydown', e => CommendMode(e,f))
        EditPanel.addEventListener('input', () => EditPanelOnChange())
    },[])

    return(
        <div className="row row-cols-1 p-3">
            <div className="col border">{actionMode[modeIndex]}</div>
            <textarea id="EditPanel" className="col" style={style} rows="4" placeholder="在此輸入內容..."></textarea>
            <textarea id="CommendPanel" className="col" style={style2} rows="1" dir={modeIndex==0?"rtl":"ltr"} disabled></textarea>
        </div>
    )
}