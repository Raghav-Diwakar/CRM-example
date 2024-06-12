import pool from "../db/connection.js"
import { sendBulkMessage, updateStatus, deliveryReceipt } from "../lib/vendorApi.js";


export const getCampaignHistory = async (req, res) => {
    try {
   
        const query = 'SELECT * FROM communications_log ORDER BY sent_at DESC';
        const [campaigns] = await pool.query(query);

        return res.status(200).json({ campaigns });
    } catch (error) {
        console.error('Error fetching campaign history:', error);
        return res.status(500).json({ message: 'An error occurred while fetching campaign history' });
    }
};



export const saveAudienceWithVendorAPI = async (audienceData) => {
    try {
        const audienceId = await saveAudienceToDatabase(audienceData);

        const bulkMessageResponse = await sendBulkMessage('Hi Mohit, here is 10% off on your next order', audienceId);

        if (bulkMessageResponse.success) {
            await updateStatus(audienceId, 'SENT');
        } else {
            await updateStatus(audienceId, 'FAILED');
        }

        const deliveryReceiptResponse = await deliveryReceipt(audienceId, 'SENT');

        if (deliveryReceiptResponse.success) {
            await updateStatus(audienceId, 'DELIVERED');
        }

        return { success: true, message: 'Audience saved and API interactions simulated successfully' };
    } catch (error) {
        console.error('Error saving audience and simulating API interactions:', error);
        throw new Error('Error saving audience and simulating API interactions');
    }
};
