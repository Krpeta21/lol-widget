import SelectFormInput from './selectFormInput';
import { useState } from 'react';
import './summonerInput.css'
import { GetSummonerData } from '../../services/getSummonerData';

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
    <div className='SummonerInput'>
      <img src="/logoLOL.svg" alt="League of Legends LOGO" className='LogoLOL'/>
      <form onSubmit={handleSubmit}>
        <SelectFormInput changeRegion={handleRegionData}/>
        <input type="text" onChange={handleInputChange} value={summonerName}/>
        {/* <button><span className="button_top">Search</span>!</button> */}
      </form>
      {
        data.map((gamedata,index)=>(
          <div key={index}>
            <h2>Game {index+1}</h2>
            <div>
              {
              gamedata.info.participants.map((data,participantIndex)=>{
               return (
                <div key={participantIndex+300}>
                  <p>Player {participantIndex + 1}: {data.summonerName},KDA: {data.kills} / {data.deaths} / {data.assists} </p>
                </div>
               )
              })
              }
            </div>
          </div>
        ))
      }       
    </div>
  );
}
