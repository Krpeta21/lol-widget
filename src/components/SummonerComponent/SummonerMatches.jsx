import './SummonerMatches.css'
export default function SummonerMatches ({matches}){
    return(
        <div className="SummonerMatches">  {
            matches.map((gamedata,index)=>(
              <div key={index}>
                <h2>Match {index+1}</h2>
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
    )
}