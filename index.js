import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.json({
        message:'success',
    });
})

//port akses
app.listen('3000', () => {
    console.log('App listen to port 3000');
});
