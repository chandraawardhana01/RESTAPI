import express from 'express';
import morgan from  'morgan';

const app = express();

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
