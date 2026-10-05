const express=require('express'),cors=require('cors'),path=require('path');
const app=express(); const PORT=process.env.PORT||3000;
app.use(cors()); app.use(express.json()); app.use(express.static(path.join(__dirname,'public')));
app.get('/api/health',(req,res)=>res.json({ok:true,app:'My Fitness'}));
app.listen(PORT,()=>console.log('My Fitness running on '+PORT));
