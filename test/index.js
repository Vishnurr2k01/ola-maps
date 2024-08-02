// import {OlaMapsSDK} from '../dist/index.js'

const {OlaMapsSDK} = require('../dist/index.js')
const dotenv = require('dotenv');
dotenv.config();

const clientid = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

console.log(clientSecret)
const options = {
    clientId: clientid,
    clientSecret: clientSecret

}
const ola_map = new OlaMapsSDK(options);

(async()=>{
try {
    console.log("first")
    ola_map.Places.autocomplete("kempegowda").then(res=>console.log(res)).catch(error=>console.log(error))
} catch (error) {
    
}
})()    