export type ChatMessage = {
    id: string;
    created_at: string;
    updated_at: string;
    text: string;
    images: string | null;
    audios: string | null;
    sender_id: string;
    receiver_id: string;
    /**
     * if the message is a private 1-1 message or a group 1-n.
     */
    private: boolean;
}
