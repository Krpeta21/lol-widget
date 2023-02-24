export default function SelectFormInput({changeRegion}){
    

    const handleSelectRegionChange = (event) =>{
        const newRegion = event.target.value
        changeRegion(newRegion)
    }
    return(
        <select name="summoner" id="summoner" onChange={handleSelectRegionChange}>            
            <option value="NA">NA</option>
            <option value="LAN">LAN</option>
            <option value="EUW">EUW</option>
        </select>
    )
}
