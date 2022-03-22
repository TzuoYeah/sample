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
                <label>天就包好痛苦摩
                    ，真的很來可，做得，家推特吃到真的還⋯注
                    意保想起來沒有易小學⋯像很這樣太在。是覺得享受的是要該頭髮，理解是因為，
                    好可惜也是級包想想。很好那麼多之，兩個年紀話說圖一有然是，麼問題是過這，謝謝⋯下一趕緊公告遊戲的人生計現超可，週年是不起這個有想難出現。</label>
            </div>
            <div className="border col px-3 py-1">
                <label>留言等訊息</label>
            </div>
        </div>
    )
}
