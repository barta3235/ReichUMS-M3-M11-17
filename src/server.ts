import app from './app'
import mongoose from 'mongoose'

import config from './app/config/index'

async function bootstrap(){
    try{
        await mongoose.connect(config.database_url as string)
        app.listen(config.port, () => {
            console.log(`Reich UMS listening on port -- ${config.port}`)
        })
    }catch(error){
        console.log('Error in server.ts file:: ',error)
    }
}


bootstrap()