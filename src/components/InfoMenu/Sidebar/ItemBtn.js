import react  from "react"

let style = {marginRight:"10px"}

export default function Siderbar({name,icon}){
    return(
        <li className="list-group-item list-group-item-action"><i className={icon} style={style}></i>{name}</li>
    )
}