import axios from "axios";
import { BASE_URL } from "./Commonapi";
export const Getexperiencedata = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/experience.json`);
      const jsonData = response.data;
      if (jsonData === null) { return []; } 
      else {  return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] })); }
    } catch (error) {
      console.log('error occured')
    }
  };