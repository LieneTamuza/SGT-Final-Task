import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = Message.find({});
        const messages = await query.exec();
        res.json(messages);
    } catch (error) {
        res.json({ error: true, message: error });
    }
});

router.post('/', async (req, res) => {
    const newMessageData = {
        username: req.body.username,
        message: req.body.message,
    };
    const message = new Message(newMessageData);
    try {
        const messageEntity = await message.save();
        res.json(messageEntity);
    } catch (error) {
        res.json({ error: true, message: error });
    }
});

export default router;