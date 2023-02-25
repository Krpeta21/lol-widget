export default function SelectFormInput({changeRegion}){
    

    const handleSelectRegionChange = (event) =>{
        const newRegion = event.target.value
        changeRegion(newRegion)
    }
    return(
        <select name="summoner" id="summoner" onChange={handleSelectRegionChange}>            
            <option value="na1">NA</option>
            <option value="la1">LAN</option>
            <option value="euw1">EUW</option>
        </select>
    )
}
