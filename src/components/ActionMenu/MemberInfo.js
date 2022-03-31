import react  from "react"

export default function MemberInfo({headshot,introduction,name}){
    return(
        <div className="row ">
            <div className="col-lg-6 d-flex justify-content-center p-3">
                <img className="rounded-circle img-thumbnail border-0" src={headshot} alt="headshot"></img>
            </div>
            <div className="col-lg-6">
                <div className="py-4 d-none d-lg-block"></div>
                <h4>{name}</h4>
                <span>{introduction}</span>
            </div>
        </div>
    )
}