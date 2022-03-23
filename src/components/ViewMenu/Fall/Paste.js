import react  from "react"

let style = {
    lineHeight:"48px"
}
export default function Tile(){
    return(
        <div id="backed-salmon" className="border row row-cols-1 bg-light rounded-1 shadow-sm mx-4 my-5">
            <div className="border col d-flex flex-row">
                <img src="https://fakeimg.pl/48x48/"></img>
                <span className="border flex-fill" style={style}>@使用者名稱</span>
            </div>
            <div className="border col px-3 py-1">
                【ProArt Station PD5 桌上型電腦｜前所未有創作體驗】<br/>
                    ✓最高Intel Core i9 處理器，強大應援創作靈感<br/>
                    ✓最高GeForce RTX 3070 顯示卡，細緻畫質重現所有想像<br/>
                    ✓最高128GB 記憶體，2TB SSD + 4TB HDD 大容量雙儲存設計<br/>
            </div>
            <div className="border col px-3 py-1">
                <label>留言等訊息</label>
            </div>
        </div>
    )
}
