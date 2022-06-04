import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Input from './components/Input';
import {motion} from 'framer-motion';
import {useState} from 'react';

// importing custom hook
import { useValues } from './hooks/useValues';
import { useEffect } from 'react';


function App() {

  const [mean , setMean] = useState('')
  const [median , setMedian] = useState('')
  const [stdDeviation , setStdDeviation] = useState('')
  const [mode , setMode] = useState('')

  const hookCustom = useValues()

    // useEffect hook here
    useEffect(() => {
      console.log('change detected')
      setMean(hookCustom.values[0])
      setMedian(hookCustom.values[1])
      setStdDeviation(hookCustom.values[2])
      setMode(hookCustom.values[3])
    }, [hookCustom.update])

  return (
    <div className="App flex flex-col justify-center" data-testid = "loadDocument">
      <Header />
      <Dashboard mean = {mean} median = {median} stdDeviation = {stdDeviation} mode = {mode} />
      <Input onSubmit = {hookCustom.onSubmitClick} onReload = {hookCustom.onReloadDataset} />
    </div>
  );
}

export default App;
