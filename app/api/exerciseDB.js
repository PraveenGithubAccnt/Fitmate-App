import axios from 'axios';
import { rapidApiKey } from "../../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com/exercises/bodyPart";

const apiCall = async (url, params) => {
    try {
      const options = {
        method: 'GET',
        url,
        params,
        headers: {
          'x-rapidapi-key': rapidApiKey,  
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com', 
        },
      };
      const response = await axios.request(options);
        return response.data;
    }

    catch(err)
    {
        console.log('error', err.message);
        return null;
    }   
}
export const fetchExercisesByBodyPart = async (bodyPart) => {
    const url = `${baseUrl}/${bodyPart}`;
    // console.log('Making request to: ', url);  
    
    let data = await apiCall(url); 
    return data; 
  };