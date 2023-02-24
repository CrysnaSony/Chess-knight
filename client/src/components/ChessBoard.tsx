import React  from "react";
import './ChessBoard.css'

const Xaxis= ["A","B","C","D","E","F","G","H"]
const Yaxis= [1,2,3,4,5,6,7,8]
export default function ChessBoard(){
    let board=[]
    for(let i=Yaxis.length-1;i>=0;i--){
        for(let j=0;j<Xaxis.length;j++){
            if((i+j)%2==0){
              board.push( <span className="black-tile"></span>)
            }
            else{
              board.push( <span className="white-tile"></span>)

            }
        }

    }

return <div id="chessboard">{board}</div>
}