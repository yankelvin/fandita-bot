import {Request, Response} from 'express';
import WebhookInterface from '../interfaces/WebhookInterface';

class KommunicateController {
    public async Get(req: Request, res: Response): Promise<Response> {
        return res.json({text: 'Funcionando'});
    }

    public async Post(req: Request, res: Response): Promise<Response> {
        const data: WebhookInterface = req.body;

        console.log(data);

        return res.status(200).json([{message: 'mensagem de teste'}]);
    }
}

export default new KommunicateController();
