import SelectFormInput from './selectFormInput';
import { useState } from 'react';
import './summonerInput.css'

export default function SummonerInput() {
    const [summonerName,setSummonerName] = useState('')
    const [region,setRegion] = useState('NA')

    const handleRegionData = (newRegion) =>{
      setRegion(newRegion)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!summonerName) return
    }
    const handleInputChange =(event)=>{
      const summoner = event.target.value
      setSummonerName(summoner)
    }
    
    const handleClearInput= () =>{
      setSummonerName('')
    }


    return (
    <div className='SummonerInput'>
      <img src="/logoLOL.svg" alt="League of Legends LOGO" className='LogoLOL'/>
      <form onSubmit={handleSubmit}>
        <SelectFormInput changeRegion={handleRegionData}/>
        <input type="text" onChange={handleInputChange} value={summonerName}/>
        {/* <button><span className="button_top">Search</span>!</button> */}
        <button onClick={handleClearInput}>limpiar</button>
      </form>
    </div>
  );
}
