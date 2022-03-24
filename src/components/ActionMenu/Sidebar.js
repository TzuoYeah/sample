import react from "react"

const style = {marginRight:"10px"}

export default function Siderbar({itemList}){
    return(
        <div>
            <label className="">自定義功能表</label>
            <ul className="col list-group">
                { itemList.map( (item,i) =>(
                    <li className="list-group-item list-group-item-action" key={i}>
                        <i className={item.icon} style={style}></i>{item.name}
                    </li>
                )) }
            </ul>
        </div>
    )
}