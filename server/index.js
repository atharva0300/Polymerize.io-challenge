const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// importing files
const {useDataSet, calculateUseDataSet} = require('./computation');
const dataset1 = require('./datasets/Dataset-1234.json')
const dataset2 = require('./datasets/Dataset-4321.json')


app.use(cors());
// parsing the request into the body
app.use(express.urlencoded({extended : true }));
app.use(express.json());


app.post('/upload', function (req, res) {
    console.log('inside upload endpoint')

    const toPreCompute = req.body.preCompute
    let Result = []
    let flag = false
    if(toPreCompute==='true'){
        console.log('inside true toPreCompute')
        if(req.body.dataset==='Dataset-1234.json'){
            console.log('Dataset-1234.json')

            Result = useDataSet(dataset1.dataset)

        }else if(req.body.dataset==='Dataset-4321.json'){
            console.log('Dataset-4321.json')

            Result = useDataSet(dataset2.dataset)

        }

        return res.json({"result" : Result})

    }else{
        const number = req.body.number 
        console.log(number)
        let Result = []
        console.log(req.body.dataset)
        if(req.body.dataset==='Dataset-1234.json'){
            Result = calculateUseDataSet(dataset1.dataset , number)
            flag = false
        }else if(req.body.dataset === 'Dataset-4321.json'){
            Result = calculateUseDataSet(dataset2.dataset , number)
            flag = true
        }   

    
        const updatedDataSet = Result[0];
        if(flag===false){
            dataset1.dataset = updatedDataSet
        }else{
            dataset2.dataset = updatedDataSet
        }


        const finalResult = [Result[1] , Result[2] , Result[3] , Result[4]]
        console.log('Result : ' , finalResult)
        return res.json({"result" : finalResult})

    }
    
});

app.post('/reload' , (req , res) => {
    console.log('inside reload endpoint')
    const dataset = req.body.dataset;
    let Result = []
    console.log(dataset)
    if(dataset==='Dataset-1234.json'){
        Result = useDataSet(dataset1.dataset)
    }else if(dataset==='Dataset-4321.json'){
        Result = useDataSet(dataset2.dataset)
    }

    return res.json({"result" :  Result})
})



app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
