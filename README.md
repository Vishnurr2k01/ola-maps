# OLA Maps 
The OLA Maps SDK which uses clientId and clientSecret to generate Bearer token, provides a simple and intuitive interface for interacting with Ola Maps APIs, including Places and Routing functionalities. This SDK allows developers to easily integrate geocoding, reverse geocoding, autocomplete, and directions services into their applications.


This SDK supports auth with clientId and clientSecret. Get these from your ola-maps dashboard

### Installation
Install the SDK using npm:
```bash
npm i --save ola-maps-sdk
```
Or using yarn:
```bash 
yarn add ola-maps-sdk
```

### Basic Example Usage

## Create SDK
```javascript
import {OlaMapsSDK} from 'ola-maps-sdk'

const options = {
    clientId:"YOUR_CLIENTID",
    clientSecret:"YOUR_CLIENT_SECRET"
}

const ola_map = new OlaMapsSDK(options);

```

## Routing API's

```javascript

ola_map.Routing.directions({
        lat: "18.76029027465273",
        long: "73.3814242364375"
    }, {
        lat: "18.73354223011708",
        long: "73.44587966939002"
    }).then(res=>console.log(res)).catch(err=>console.log(err))
// add optional params as per requirements
```

## Places API's

```javascript

ola_map.Places.geoCode("YOUR ADDRESS").then(res=>console.log(res)).catch(error=>console.log(error))

ola_map.Places.reverseGeocode("18.73354223011708","73.44587966939002").then(res=>console.log(res)).catch(error=>console.log(error))

ola_map.Places.autocomplete("kempegowda").then(res=>console.log(res)).catch(error=>console.log(error))

// add optional params as per requirements
```
