// imports

let dataset = new Array();

function sort() {
    // use custom compare function that sorts numbers ascending
    dataset.sort(function(a, b) {
        return a - b;
    })

}

function filtering(){
    console.log('inside filtering')
    dataset = dataset.filter(number => (!isNaN(number)))
    console.log(dataset);
}

function computeMean(){
    // Calculating mean
    let sum=0;
    for(let i=0;i<dataset.length;i++){
        sum = sum+ dataset[i];
    }
    console.log('sum : ' , sum)
    const mean = (sum/dataset.length)
    console.log('dataset.length : ' , dataset.length)
    console.log('mean : ' , mean)
    return mean.toFixed(4)
}


function computeMedian(){
    
    // Calculating Median
    let median=0;
    sort(dataset);
    if(dataset.length%2==0){
        const first = dataset[dataset.length/2]
        const second = dataset[(dataset.length/2) + 1 ]
        median = (first + second)/2;
    }else{
        median = dataset[Math.ceil(dataset.length/2)]
    }
    console.log('median : ' ,median)
    return median.toFixed(4)
}

function computeStdDeviation(mean){
    // Calculating standard Deviation
    let stdDeviation=0;
    let sum2=0;
    for(let i=0;i<dataset.length;i++){
        sum2 += ((dataset[i]-mean)*(dataset[i]-mean))
    }
    stdDeviation = Math.sqrt(sum2/dataset.length);
    console.log('stdDeviation : ' , stdDeviation)
    return stdDeviation.toFixed(4)
}

function computeMode(){
    // Calculating mode
    let temp = {}
    let mode= 0;
    let count=0;

    for(let i = 0; i < dataset.length; i++) {
        const item = dataset[i];
        
        if(temp[item]) {
          temp[item]++;
        } else {
          temp[item] = 1;
        }
        
        if(count < temp[item]) {
          mode = item;
          count = temp[item];
        }
    }

    console.log('mode : ' , mode)
    return mode.toFixed(4)
}

const preComputeData = (selectedDataSet) => {
    dataset = [...selectedDataSet]
    filtering();
    console.log('inside preCOmputeData')
    sort();

    const mean = computeMean();
    const median = computeMedian();
    const stdDeviation = computeStdDeviation(mean);
    const mode = computeMode();

    return [mean , median , stdDeviation , mode];
}

const calculate =() => {
    console.log('inside calculate')
 
    sort();

    mean = computeMean();
    median = computeMedian();
    stdDeviation = computeStdDeviation(mean);
    mode = computeMode();


    return [dataset, mean , median , stdDeviation , mode];
    
}


function useDataSet(selectedDataSet){
    const Result =  preComputeData(selectedDataSet)

    return Result
}

function calculateUseDataSet(selectedDataSet , number){
    console.log('inside calculateUseDataSet')
    dataset = [...selectedDataSet ]
    filtering();
    
    // Appending the number in the dataset
    number = parseInt(number)
    dataset.push(number)

    const Result =  calculate(dataset)

    return Result
}


module.exports = {
    useDataSet,
    calculateUseDataSet
}
