const express=required('express');
const app=express();
const post=3000;
app.get("/",(req,res)=>
{
    res.send("<h1>Hello world</h1>");
}
);
app.listen(port,()=>

{
    console.log('app listening to the port ${port}');
})
