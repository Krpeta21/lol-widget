import SelectFormInput from './selectFormInput';
import { useState } from 'react';
import './summonerInput.css'
export default function SummonerInput() {
    const handleSubmit = (event) =>{
        event.preventDefault()
        if(!summonerName) return
    }
    const handleChange =(event)=>{
      const summoner = event.target.value
      setSummonerName(summoner)
    }
    const [summonerName,setSummonerName] = useState('')
    return (
    <div className='SummonerInput'>
      <img src="/logoLOL.svg" alt="League of Legends LOGO" className='LogoLOL'/>
      <form onSubmit={handleSubmit}>
        <SelectFormInput/>
        <input type="text" onChange={handleChange} />
        {/* <button><span className="button_top">Search</span>!</button> */}
      </form>
    </div>
  );
}
