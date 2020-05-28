interface WebhookInterface {
    botId: string;
    key: string;
    from: string;
    message: string;
    groupId: string;
    metadata: string;
    contentType: string;
    applicationKey: string;
    source: string;
    eventName: string;
    createdAt: string;
}

export default WebhookInterface;
