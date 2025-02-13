import { Router } from 'express';
import { ProjectController } from '../controllers/ProjectController.js';

const UserRoutes = Router();

UserRoutes.get('/user/:id/projects', ProjectController.read);

export { UserRoutes };
