import react  from "react"

export default function MemberInfo({headshot,introduction,name}){
    return(
        <div className="border row">
            <div className="border col-lg-6 d-flex justify-content-center">
                <img className="border rounded-circle img-thumbnail" src={headshot} alt="headshot"></img>
            </div>
            <div className="border col-lg-6">
                <h4>{name}</h4>
                <span>{introduction}</span>
            </div>
        </div>
    )
}