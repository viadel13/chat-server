import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, default: false },
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            }
        ],

        lastestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        },

        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },

    {
        timestamps: true,
    })

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;