import { api } from "../api/api";

class ChatService {
    async sendMessage(message: string) {
        const response = await api.post('api/prompt', {
            prompt: message
        });

        return response.data.data;
    }
}

export const chatService = new ChatService();