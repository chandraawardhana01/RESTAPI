import express from 'express';
import morgan from  'morgan';
import mongoose from 'mongoose';

const app = express();

//connect to mongoDB
mongoose.connect('mongodb+srv://admin:<kodeamanterbaik>@homework.hin5z.mongodb.net/<jadwalin>?retryWrites=true&w=majority',
{
    userNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connect to database success');
});


//Middlewares
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        message:'success',
    });
})

//port akses
app.listen('3000', () => {
    console.log('App listen to port 3000');
});
