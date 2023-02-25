import axios from "axios"
export const  GetSummonerData = async (SummonerName,Region) =>{  
    try {
        const response = await axios.get('http://localhost:4000/past5games',{params: {username: SummonerName}})
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}