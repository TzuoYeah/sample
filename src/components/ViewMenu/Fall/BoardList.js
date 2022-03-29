import react  from "react"
import BoardItem from "./BoardList/BoardItem"

export default function Paste(){
    return(
        <ul className="list-group mt-3">
            <BoardItem {...{title:"雜談版"}}/>
            <BoardItem {...{title:"棒球版"}}/>
            <BoardItem {...{title:"電玩版"}}/>
            <BoardItem {...{title:"Vtuber版"}}/>
            <BoardItem {...{title:"工作版"}}/>
            <BoardItem {...{title:"SOHO版"}}/>
            <BoardItem {...{title:"站務版"}}/>
            <BoardItem {...{title:"交流版"}}/>
            <BoardItem {...{title:"雜談版"}}/>
            <BoardItem {...{title:"棒球版"}}/>
            <BoardItem {...{title:"電玩版"}}/>
            <BoardItem {...{title:"Vtuber版"}}/>
            <BoardItem {...{title:"工作版"}}/>
            <BoardItem {...{title:"SOHO版"}}/>
            <BoardItem {...{title:"站務版"}}/>
            <BoardItem {...{title:"交流版"}}/>
        </ul>
    )
}
