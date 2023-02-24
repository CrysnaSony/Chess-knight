import React, { useState }  from "react";
import Tile from  "../Tile/Tile"
import './ChessBoard.css'

const Xaxis= ["A","B","C","D","E","F","G","H"]
const Yaxis= [1,2,3,4,5,6,7,8]

export default function ChessBoard(){

  function fetchPossibleMoves(knight:string){
    fetch("/api/"+knight)
    .then((res)=>res.json())
    .then((data)=>{
        data.map((pos:string)=>{
          let possibleMove= document.getElementById(pos)
          if(possibleMove) possibleMove.innerHTML=`<img src="assets/green-circle.png" />`
        })
      })
  }

  function placeKnight(e:React.MouseEvent){
    const element=e.target as HTMLElement;
    let allTile= document.getElementsByClassName("tile")
    for (let i = 0; i < allTile.length; i++) {
      allTile[i].innerHTML = "";
    }
    element.innerHTML=`<img src="assets/Knight.png" />`;
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