import axios from "axios";
import qs from 'qs';

// This class returns access_token from clientid and clientSecret

export class Auth{
    private clientId : string;
    private clientSecret : string;
    private accessToken?: string;

    constructor(clientId:string,clientSecret:string){
        this.clientId = clientId
        this.clientSecret = clientSecret
    }

    public async getAccessToken():Promise<string>{
      if(this.accessToken) return this.accessToken
          const tokenResponse = await axios.post(
            'https://account.olamaps.io/realms/olamaps/protocol/openid-connect/token',
            qs.stringify({
              grant_type: 'client_credentials',
              scope: 'openid',
              client_id: this.clientId,
              client_secret: this.clientSecret,
            }),
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            },
          );
          this.accessToken = tokenResponse.data.access_token;
          return tokenResponse.data.access_token
    }
}