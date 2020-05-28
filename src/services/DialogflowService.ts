import {Response} from 'express';
import axios, {AxiosRequestConfig} from 'axios';

class DialogflowService {
    public async SendIntent(message: string): Promise<string> {
        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer 1c2d1be4f0c44daf8fc3bf6cd10b2f70',
            },
        };

        const data: any = {
            contexts: ['simulacao'],
            lang: 'pt',
            query: message,
            sessionId: '12345',
            timezone: 'America/Buenos_Aires',
        };

        const response = await axios.post(
            'https://api.dialogflow.com/v1/query?v=20150910',
            data,
            config,
        );

        const msgResponse = response.data.result.fulfillment.speech;

        return msgResponse;
    }
}

export default new DialogflowService();
