import express from 'express';
import { createInvitation, getInvitations } from '../Controllers/invitationController.js';

const router = express.Router();

// Route pour créer une invitation
router.post('/invitations', createInvitation);

// Route pour récupérer toutes les invitations
router.get('/invitations', getInvitations);

export default router;

