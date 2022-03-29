import react  from "react"

export default function Paste({title}){
    return(
        <li className="list-group-item p-1 py-2">
            <div className="d-flex flex-row">
                <div className="p-1 ps-3 pe-3 border-end">
                    <img src="https://fakeimg.pl/40x40/"></img>
                </div>
                <div className="d-flex ps-2">
                    <div className="d-flex align-items-center p-1 ">
                        <label className="fs-6">{title}</label>
                    </div>
                </div>
            </div>
        </li>
    )
}
