import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'success',
    })
})

app.listen(4000, () => {
    console.log('Serwer wysttartował na porcie 4000')
})
