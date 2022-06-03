const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// importing files
const {calculate, preComputeData} = require('./dataset');

app.use(cors());
// parsing the request into the body
app.use(express.urlencoded({extended : true }));
app.use(express.json());



app.post('/upload', function (req, res) {

    const toPreCompute = req.body.preCompute
    if(toPreCompute==='true'){
        const Result = preComputeData()
        console.log(Result)
        return res.json({"result" : Result})
    }else{
        const number = req.body.number 
        console.log(number)
        

        const Result = calculate(number)
        console.log(Result)


        return res.json({"result" :  Result})
    }
    
});

app.post('/reload' , (req , res) => {
    console.log('inside reload endpoint')
    const dataset = req.body.dataset;
    console.log(dataset)
    if(dataset==='Dataset-1'){
        
    }

    return res.json({"message" : "success"})
})



app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
