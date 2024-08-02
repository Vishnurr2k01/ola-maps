import axios, {AxiosInstance} from 'axios'
import { BASE_URL } from './utils/Config'
import { Auth } from './api/auth'


export class OlaMapsAPI{
    private client:AxiosInstance;
    private auth:Auth;

    constructor(clientId:string,clientSecret:string){
        this.auth = new Auth(clientId,clientSecret)
        this.client = axios.create({
            baseURL:BASE_URL,
            headers : {
                'Content-Type': 'application/json'
            }
        })

        this.client.interceptors.request.use(async (config)=>{
            const token = await this.auth.getAccessToken()
            if(config.headers){
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config
        })
    }
    public getClient():AxiosInstance {
        console.log(this.client)
        return this.client
    }
}