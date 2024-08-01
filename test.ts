import { Auth } from './src/api/auth';
import {OlaMapsSDK} from './src/index'
import dotenv from 'dotenv';
import { GetURL } from './src/utils/GetUrlPath';
import { API_VERSION } from './src/utils/Config';
import axios from 'axios';
dotenv.config();

const clientid = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

if (!clientid || !clientSecret) {
    throw new Error('CLIENT_ID and CLIENT_SECRET environment variables are required');
}


const options = {
    clientId:clientid,
    clientSecret:clientSecret


}
const ola_map = new OlaMapsSDK(options);

(async()=>{
try {
    console.log("first")
    const location = await ola_map.Routing.directions({
        lat: "18.76029027465273",
        long: "73.3814242364375"
    }, {
        lat: "18.73354223011708",
        long: "73.44587966939002"
    })
    console.log(location)
} catch (error) {
    
}
})



