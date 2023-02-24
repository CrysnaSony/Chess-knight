import express, { Request, Response } from "express";
import getKnightMoves from "./getKnightMoves";

const app = express()
const PORT = 3001
const router = express.Router()

router.get("/api/:knightPosition", async (req: Request, res: Response) => {
    let knightPosition = req.params.knightPosition;
    if (!knightPosition) return res.status(400).send("Parameter knightPosition required")

    let possibleMoves: string[] = getKnightMoves(knightPosition)
    return res.send(possibleMoves)

})
app.use(express.static('public'))
app.use(router)
app.listen(PORT, () => {
    console.log("listening on port " + PORT)
})