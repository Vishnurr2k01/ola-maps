import {OlaMapsSDK} from './src/index'
import dotenv from 'dotenv';
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
    const location = await ola_map.Places.reverseGeocode("18.76029027465273","73.3814242364375")
    
    // Routing.directions({
    //     lat: "18.76029027465273",
    //     long: "73.3814242364375"
    // }, {
    //     lat: "18.73354223011708",
    //     long: "73.44587966939002"
    // })
    console.log(location)
} catch (error) {
    
}
})



