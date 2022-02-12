import {sendRequest} from './users-api';

const BASE_URL = '/api/events';

export function createEvent(eventDetails, locationDetails){
    return sendRequest(BASE_URL, 'POST', {eventDetails, locationDetails});
};

export function getUserEvents() {
    return sendRequest(BASE_URL);
}

export function updateEvent(updatedEventDetails) {
    return sendRequest(`${BASE_URL}/update`, 'PUT', updatedEventDetails);
}

export function deleteEvent(selectedEvent) {
    return sendRequest(`${BASE_URL}/delete`, 'DELETE', selectedEvent);
}

export function findEvent(eventCode){
    return sendRequest(`${BASE_URL}/find/${eventCode}`)
}

export function joinEvent(eventId, userId){
    return sendRequest(`${BASE_URL}/join`, 'PUT', {eventId, userId});
}

export function getMapAPIKey(){
    return sendRequest(`${BASE_URL}/map/key`);
}