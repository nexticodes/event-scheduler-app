import {sendRequest} from './users-api';

const BASE_URL = '/api/messages';

export function sendMessage(channelId, messageData){
    return sendRequest(`${BASE_URL}/${channelId}`, 'POST', messageData)
}