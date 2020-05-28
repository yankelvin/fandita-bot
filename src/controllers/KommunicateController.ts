import {Request, Response} from 'express';
import DialogflowService from '../services/DialogflowService';
import WebhookInterface from '../interfaces/WebhookInterface';

class KommunicateController {
    public async Get(req: Request, res: Response): Promise<Response> {
        return res.json({text: 'Funcionando'});
    }

    public async Post(req: Request, res: Response): Promise<Response> {
        const data: WebhookInterface = req.body;

        const response = await DialogflowService.SendIntent(data.message);

        return res.status(200).json([{message: response}]);
    }
}

export default new KommunicateController();
