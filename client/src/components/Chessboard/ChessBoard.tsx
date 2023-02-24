import React, { useState }  from "react";
import { createCompilerHost } from "typescript";
import Tile from  "../Tile/Tile"
import './ChessBoard.css'

const Xaxis= ["A","B","C","D","E","F","G","H"]
const Yaxis= [1,2,3,4,5,6,7,8]

export default function ChessBoard(){
  const [knightPosition,setKnightPosition]=useState('');
  function fetchPossibleMoves(knight:string){
    let possibleMove= document.getElementById("A3")
    console.log(possibleMove)
    fetch("/api/A2")
      .then((res)=>res.text())
      .then((data)=>{
        console.log(data)
      })
    // if(possibleMove) possibleMove.innerHTML=`<img src="assets/green-circle.png" />`
  }
  function placeKnight(e:React.MouseEvent){
    const element=e.target as HTMLElement;
    console.log(element.id)
    let prevKnightPosition;
    if (knightPosition) prevKnightPosition= document.getElementById(knightPosition)
    if(prevKnightPosition) prevKnightPosition.innerHTML=""
    element.innerHTML=`<img src="assets/Knight.png" />`;
    setKnightPosition(element.id)
    fetchPossibleMoves(element.id)
  }

  let board=[]
    for(let i=Yaxis.length-1;i>=0;i--){
        for(let j=0;j<Xaxis.length;j++){
          let coordinate=`${Xaxis[j]}${Yaxis[i]}`
          board.push(<Tile key={coordinate} location={(i+j)} coordinate={coordinate} />)
        }

    }

return <div id="chessboard" onClick={(event)=>placeKnight(event)}>{board}</div>
}