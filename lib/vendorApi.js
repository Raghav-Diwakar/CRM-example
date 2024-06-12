import { dummyVendorEndPoint } from "./dummyVendorApi.js";
export const sendBulkMessage = async (message, audienceId) => {
    const requestOptions = {
        method: dummyVendorEndPoint.sendBulkMessage.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, audienceId })
    };

    try {
        const response = await fetch(dummyVendorEndPoint.sendBulkMessage.url, requestOptions);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error sending bulk message:', error);
        throw new Error('Error sending bulk message');
    }
};

export const updateStatus = async (communicationId, status) => {
    const requestOptions = {
        method: dummyVendorEndPoint.updateStatus.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ communicationId, status })
    };

    try {
        const response = await fetch(dummyVendorEndPoint.updateStatus.url, requestOptions);
        const responseData = await response.json();
        return responseData; // Return data from the dummy endpoint response
    } catch (error) {
        console.error('Error updating status:', error);
        throw new Error('Error updating status');
    }
};


export const deliveryReceipt = async (communicationId, deliveryStatus) => {
    const requestOptions = {
        method: dummyVendorEndPoint.deliveryReceipt.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ communicationId, deliveryStatus })
    };

    try {
        const response = await fetch(dummyVendorEndPoint.deliveryReceipt.url, requestOptions);
        const responseData = await response.json();
        return responseData; // Return data from the dummy endpoint response
    } catch (error) {
        console.error('Error receiving delivery receipt:', error);
        throw new Error('Error receiving delivery receipt');
    }
};
