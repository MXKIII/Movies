import express from 'express'
import movies from './movies.js'

const app = express()


app.get('/', (request,response)=>{
    return response.end('Hello world')
})

app.get('/movies', (request,response)=>{
    return response.json(movies)
})

app.get('/movies/:id', (request,response)=>{
    const movieID = request.params.id
    const movieByID= movies.find(movie => movie.id == parseInt(movieID))
    if(!movieByID){
        return response.status(404).json ({message: 'Movie not found'})
    }
    return response.json(movieByID)
})


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})