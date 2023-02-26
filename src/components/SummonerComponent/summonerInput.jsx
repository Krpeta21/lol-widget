import SelectFormInput from './selectFormInput';
import { useState } from 'react';
import './summonerInput.css'
import { GetSummonerData } from '../../services/getSummonerData';
import SummonerMatches from './SummonerMatches';

export default function SummonerInput() {
    const [summonerName,setSummonerName] = useState('')
    const [region,setRegion] = useState('na1')
    const [data, setData]=useState([])
    const handleRegionData = (newRegion) =>{
      setRegion(newRegion)
    }
    
    const handleInputChange =(event)=>{
      const summoner = event.target.value      
      setSummonerName(summoner)      
    }    
   
    const handleSubmit = async (event) =>{
      event.preventDefault()
      const matches = await GetSummonerData(summonerName,region)
      setData(matches)
  }

    return (
    <>
    <div className='SummonerInput'>
      <img src="/logoLOL.svg" alt="League of Legends LOGO" className='LogoLOL'/>
      <form onSubmit={handleSubmit}>
        <SelectFormInput changeRegion={handleRegionData}/>
        <input type="text" onChange={handleInputChange} value={summonerName}/>
        {/* <button><span className="button_top">Search</span>!</button> */}
      </form>
    </div>
    {
        data ? <SummonerMatches matches={data} /> : <p style={{color: 'white'}}>No se encontro información de este usuario.</p>
    }
    </>
  );
}
