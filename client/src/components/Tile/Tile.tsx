import "./Tile.css"

interface Props{
    coordinate:string,
    location:number
}
export default function Tile({location,coordinate}:Props){

    if(location%2===0)
     return <div id={coordinate} className="tile black-tile"></div>
    else return <div id={coordinate} className="tile white-tile"></div>
}
