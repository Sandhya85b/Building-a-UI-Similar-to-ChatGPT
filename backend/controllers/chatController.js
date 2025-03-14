const Chat = require("../models/Chat");

exports.sendMessage = async (req, res) => {
    try {
        const { userId, message } = req.body;
        const chat = await Chat.create({ userId, message });

        // AI Response
        const aiResponse = await Chat.create({ userId, message: "Hello! How can I help you today?" });

        res.json({ userMessage: chat, aiMessage: aiResponse });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};
