import axios from 'axios'

const url="https://api.covid19india.org/data.json"

export const fetchData=async()=>{
try{
const {data}=await axios.get(url);
return data;
}
catch(error){

}

}