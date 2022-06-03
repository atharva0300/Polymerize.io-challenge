import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

let firstRender = true;



export function useValues() {
    console.log('inside custom hook')
    const [values , setValues] = useState([0,0,0,0])
    const [update ,setUpdate] = useState(false)
    const [dataset , setDataSet] = useState('Dataset-1')

    useEffect(() => {
        async function fetchData(){
            try{
                const payLoad = {
                    preCompute : 'true'
                }
    
                const {data} = await axios.post('http://localhost:5000/upload', payLoad)
                console.log(data.result)
                console.log(data)
                const resultArray = data.result;
                setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])
                firstRender = false
                setUpdate(!update)
            }catch(err){
                console.log('Axios error : ' , err)
            }
        }


        fetchData()
    }, [] )


    const onSubmitClick = async (number) => {

        const payLoad = {
            preCompute : 'false',
            number : number
        }

        // post request
        try{
            const {data} = await axios.post('http://localhost:5000/upload' , payLoad)

            // extracting the data from the output object  
            console.log(data.result)
            const resultArray= data.result;

            setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])
            

        }catch(err){
            console.log('Axios error : ' , err)
        }

        setUpdate(!update)
        
    }

    async function reloadingFunction(dataset){
        try{
            const payLoad = {
                dataset : `${dataset}`
            }
    
            const {data} = await axios.post('http://localhost:5000/reload' ,payLoad )
            
            console.log(data)
            // extracting the data from the output object  
            /*
            console.log(data.result)
            const resultArray= data.result;
    
            setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])
            */
        }catch(err){
            console.log('Axios error : ' , err)
        }

        setUpdate(!update)
    }

    const onReloadDataset = (dataSet) => {
        setDataSet(dataSet)
        reloadingFunction(dataset)
    }
    
    return {values , onSubmitClick, update , onReloadDataset}
  
}


