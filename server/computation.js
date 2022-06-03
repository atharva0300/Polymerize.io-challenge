// imports

let dataset = []

function sort() {
    // use custom compare function that sorts numbers ascending
    dataset.sort(function(a, b) {
        return a - b;
    })
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
    if(dataset.length%2==0){
        const first = dataset[dataset.length/2]
        const second = dataset[(dataset.length/2) + 1 ]
        median = (first + second)/2;
    }else{
        median = dataset[Math.ceil(dataset.length/2)]
    }
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
    return mode.toFixed(4)
}

const preComputeData = () => {
    console.log('inside preCOmputeData')
    sort();

    const mean = computeMean();
    const median = computeMedian();
    const stdDeviation = computeStdDeviation(mean);
    const mode = computeMode();

    return [mean , median , stdDeviation , mode];
}

const calculate =(number) => {

    // Appending the number in the dataset
    dataset.push(parseInt(number))
    sort();

    mean = computeMean();
    median = computeMedian();
    stdDeviation = computeStdDeviation(mean);
    mode = computeMode();

    console.log('displaying array : ')
    for(let i=0;i<dataset.length;i++){
        console.log(dataset[i])
    }

    return [mean , median , stdDeviation , mode];
    
}


function useDataSet(selectedDataSet){
    dataset = selectedDataSet
    return preComputeData()
}

module.exports = {
    preComputeData,
    calculate,
    useDataSet
}
