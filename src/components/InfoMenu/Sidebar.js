import react  from "react"
import ItemBtn from "./Sidebar/ItemBtn"

let style = {pading:0}

export default function Siderbar({itemList}){
    return(
        <div className="p-3">
            <ul className="col border list-group">
                { itemList.map( item =>( <ItemBtn {...item}/> )) }
            </ul>
        </div>
    )
}