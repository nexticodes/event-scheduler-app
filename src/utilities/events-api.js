import {sendRequest} from './users-api';

const BASE_URL = '/api/events';

export function createEvent(eventDetails){
    return sendRequest(BASE_URL, 'POST', eventDetails);
};