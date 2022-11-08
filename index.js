const packageName = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;


// Middlewares----------------------------------!
app.use(cors());
app.use (express.json())

app.get('/',(req, res)=>{
    res.send('Genius Car Server is Running')
})
app.listen(port, ()=>{
    console.log(`server Running on ${port}`);
})