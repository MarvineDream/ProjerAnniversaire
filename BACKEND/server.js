// server.js
import express from 'express';
import mongoose from 'mongoose';
import invitationRoutes from './Routes/invitationRoutes.js'; 
import { createInvitation, getInvitations } from './Controllers/invitationController.js'; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/ProjerAnniversaire', invitationRoutes)

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/AnniversaireDB', {
    
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Route pour créer une invitation
app.post('/invitations', createInvitation);

// Route pour récupérer toutes les invitations
app.get('/invitations', getInvitations);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});