let app = require('express')();

app.get('/',function (req,res) {

    res.json('Hi, Hope u r doing good')

});



app.listen(process.env.PORT || '3000',function(err){

   if(!err){
       console.log('app connected')
   }else{
       console.log(err)
   }
});