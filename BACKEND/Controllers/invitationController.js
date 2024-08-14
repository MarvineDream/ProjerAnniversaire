// controllers/invitationController.js
import Invitation from '../Models/Invitation.js';

export const createInvitation = async (req, res) => {
    const { age, date, startTime, endTime, address, sender, contact } = req.body;

    if (!age || !date || !startTime || !endTime || !address || !sender || !contact) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        const newInvitation = new Invitation({ age, date, startTime, endTime, address, sender, contact });
        await newInvitation.save();
        res.status(201).json({ message: 'Invitation créée avec succès', newInvitation });
    } catch (error) {
        console.error('Erreur lors de la création de l\'invitation:', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'invitation' });
    }
};


export const getInvitations = async (req, res) => {
    try {
        const invitations = await Invitation.find(); // Récupère toutes les invitations
        res.status(200).json(invitations);
    } catch (error) {
        console.error('Erreur lors de la récupération des invitations:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des invitations' });
    }
};

