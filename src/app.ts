import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app:Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response) => {
  res.send('Reich University management server is live')
})

export default app
