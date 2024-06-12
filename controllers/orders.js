import pool from "../db/connection.js"
import { orderQueries } from "../queries/orderQueries.js";

export const orderAdds = async (req, res) => {
    try {
        const { customer_id, amount, order_date } = req.body;
        await pool.query(orderQueries.addOrder, [customer_id, amount, order_date]);
        return res.status(201).json({ message: "added successfully" });
    } catch (error) {
        console.log("error while adding order", error);
        return res.status(404).json({ message: "error while adding orders" });
    }
}

export const getOrders = async (req, res) => {
    try {
        const  {id } = req.query;
       
        const [orders] = await pool.query(orderQueries.getOrderById, [id]);
        return res.status(200).json({ message: "your orders are here", orders });
    } catch (error) {
        console.log("error while fetching orders", error);
        return res.status(404).json({ message: "error while fetching orders" });
    }
}

export const getOrdersByCustomerId = async (req, res) => {
    try {
        const  customer_id  = req.query;
        const [customerOrders] = await pool.query(orderQueries.getOrdersByCustomerId, [customer_id.id]);
        return res.status(200).json({ message: "customer's orders are here", customerOrders });
    } catch (error) {
        console.log("error while fetching orders by customer", error);
        return res.status(404).json({ message: "error while fetching orders by customer" });
    }
}
