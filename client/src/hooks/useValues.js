import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const PORT = process.env.PORT || 5000
const baseURL = 'https://polymerize-io-challenge.herokuapp.com/' + PORT;

export function useValues() {
    console.log('inside custom hook')
    const [values , setValues] = useState([0,0,0,0])
    const [update ,setUpdate] = useState(false)


    useEffect(() => {
        async function fetchData(){
            try{
                const payLoad = {
                    preCompute : 'true',
                    dataset : 'Dataset-1234.json'                
                }

                const {data} = await axios.post(`${baseURL}/upload`, payLoad)
                console.log(data.result)
                const resultArray = data.result;
                setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])
                setUpdate(!update)
            }catch(err){
                console.log('Axios error : ' , err)
            }
        }


        fetchData()
    }, [] )


    const onSubmitClick = async (dataset , number) => {

        const payLoad = {
            preCompute : 'false',
            dataset : dataset,
            number : number
        }

        // post request
        try{

            console.log('current dataset : ' , dataset)
            console.log('number : ' , number)
            
            const {data} = await axios.post(`${baseURL}/upload` , payLoad)

            // extracting the data from the output object  
            console.log(data.result)
            const resultArray= data.result;

            setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])
            

        }catch(err){
            console.log('Axios error : ' , err)
        }

        setUpdate(!update)
        
    }

    async function reloadingFunction(dataSet){

        try{
            console.log('dataset to reload : ' , dataSet)
            const payLoad = {
                dataset : `${dataSet}`
            }
    
            const {data} = await axios.post(`${baseURL}/reload` ,payLoad )
            

            // extracting the data from the output object   
            console.log(data.result)
            const resultArray= data.result;
    
            setValues([resultArray[0] , resultArray[1] , resultArray[2] , resultArray[3]])

            
        }catch(err){
            console.log('Axios error : ' , err)
        }

        setUpdate(!update)
    }

    const onReloadDataset = async (dataSet) => {
        console.log('dataset to reload : ' , dataSet)

        reloadingFunction(dataSet)
    }
    
    return {values , onSubmitClick, update , onReloadDataset}
  
}


