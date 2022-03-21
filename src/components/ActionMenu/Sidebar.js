import react from "react"

const style = {marginRight:"10px"}

export default function Siderbar({itemList}){
    return(
        <div className="p-3">
            <p className="border">自定義功能表</p>
            <ul className="col border list-group">
                { itemList.map( (item,i) =>(
                    <li className="list-group-item list-group-item-action" key={i}>
                        <i className={item.icon} style={style}></i>{item.name}
                    </li>
                )) }
            </ul>
        </div>
    )
}