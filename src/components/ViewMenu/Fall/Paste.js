import react  from "react"

let style = {
    backgroundColor:"#fbfbfb"
}
export default function Paste({name,time,content}){
    return(
        <div className="d-flex flex-row mx-4 py-4 border-bottom">
            <div className="border-end border-1 p-2">
                <img className="rounded-circle" src="https://fakeimg.pl/40x40/"></img>
            </div>
            <div className="flex-grow-1">
                <div className="p-2">
                    <label className="me-2"><b>{name}</b></label>
                    <label className="fw-light">{time}</label>
                </div>
                <div className="px-2 pb-2">{content}</div>
            </div>
        </div>
    )
}
