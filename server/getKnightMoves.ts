function getKnightMoves(knightPosition: string) {
    if(!knightPosition) return []
    let knightX = knightPosition.charCodeAt(0)
    let knightY = parseInt(knightPosition[1])

    //All possible moves of Knight
    let X = [1, 1, -1, -1, 2, 2, -2, -2]
    let Y = [2, -2, 2, -2, 1, -1, 1, -1]

    let moves: string[] = []
    for (let i = 0; i < 8; i++) {

        let nextPosX = knightX + X[i]
        let nextPosY = knightY + Y[i]
        //if knight move is inside chess board
        if (nextPosX >= 65 && nextPosX <= 72 && nextPosY >= 0 && nextPosY <= 8)
            moves.push(String.fromCharCode(nextPosX) + nextPosY)

    }
    console.log(moves);
    return moves

}

// pass argument while running from CLI e.g. C4
let argument = process.argv[2]
getKnightMoves(argument)

export default getKnightMoves;


