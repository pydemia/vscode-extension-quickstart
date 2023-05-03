
import * as restClient from 'typed-rest-client/RestClient';

export interface ResponseBody {
    timestamp: number;
    code: number;
    message: string;
    traceId?: number;
    data?: any[];
}

// export class Client {
//     public client: restClient.RestClient = new restClient.RestClient('rest-sample', 'https://aiip-dev.skcc.com')

//     // get(): restClient.IRestResponse<ResponseBody> {
//         async get(): Promise<ResponseBody> {
//         // let res: restClient.IRestResponse<ResponseBody> = await this.client.get<ResponseBody>('/api/workflow/backend/debug/nodes');
//         const res: restClient.IRestResponse<ResponseBody> = await this.client.get<ResponseBody>('/api/workflow/backend/debug/nodes');
//         return res.result;
//         // return Promise.resolve(this.client.get<ResponseBody>('/api/workflow/backend/debug/nodes'));

//     }
// }

export async function get() {
    let client: restClient.RestClient = new restClient.RestClient('rest-sample', 'https://aiip-dev.skcc.com')

    let res: restClient.IRestResponse<ResponseBody> = await client.get<ResponseBody>('/api/workflow/backend/debug/nodes');
    console.log(res.statusCode);
    console.log(res.result);
}