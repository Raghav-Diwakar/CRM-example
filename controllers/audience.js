import pool from "../db/connection.js";
import { createAudience } from "../queries/audienceQueries.js";

export const audienceRules = async (req, res) => {
    try {
        const { rules, customerId, message } = req.body;

        if (!rules || typeof rules !== 'string' || rules.trim() === '') {
            return res.status(400).send('Rules are required');
        }


        let query = `SELECT COUNT(*) as audienceSize FROM customers WHERE ${rules}`;
        const [audienceSizeResult] = await pool.query(query);
        const audienceSize = audienceSizeResult[0].audienceSize;

        const [resultCreateAudience] = await pool.query(createAudience.createaudienceRule, [rules]);
        const audienceId = resultCreateAudience.insertId;

        const insertLogQuery = `
            INSERT INTO communications_log (audience_id, customer_id, message)
            VALUES (?, ?, ?)
        `;
        await pool.query(insertLogQuery, [audienceId, customerId, message]);

        return res.status(201).json({ message: "Created audience and saved in communications log", audienceSize, resultCreateAudience });

    } catch (error) {
        console.error("Error creating audience rules:", error);
        return res.status(500).json({ message: "An error occurred while creating audience rules", error: error.message });
    }
}
