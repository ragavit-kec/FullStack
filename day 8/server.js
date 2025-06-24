import express from 'express';

const app=express();

app.get('/get',(req,res) => {
    res.send('from get');
});

app.post('/post',(req,res) => {
    res.send('from post');
})

app.put('/put',(req,res)=> {
    res.send('from put');
})

app.patch('/patch',(req,res) => {
    res.send('from patch');
})

app.delete('/delete',(req,res) => {
    res.send('from delete');
})

app.listen(3000, ()=> {
    console.log('Server running on port http://localhost:3000');
});