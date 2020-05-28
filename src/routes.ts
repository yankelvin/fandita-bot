import {Router} from 'express';

import KommunicateController from './controllers/KommunicateController';

// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', KommunicateController.Get);
routes.post('/kommunicate', KommunicateController.Post);

export default routes;
