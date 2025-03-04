import express from 'express'
import movies from './movies.js'

const app = express()


app.get('/', (request,response)=>{
    return response.end('Hello world')
})

app.get('/movies', (request,response)=>{
    return response.json(movies)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})