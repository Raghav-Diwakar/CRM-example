
import { customerQueries } from "../queries/customerQueries.js";
import pool from "../db/connection.js";

export const createCustomer=async(req,res)=>{
    try {
        const { name, email, total_spends, visits, last_visit } = req.body;
       
        const [existingCustomer]=await pool.query(customerQueries.existingCustomer,[email]);
        if(existingCustomer.length>0){
            return res.status(404).json({message:"customer already exists"});
        }

        await pool.query(customerQueries.addCustomer,[name,email,total_spends,visits,last_visit]);
        return res.status(201).json({message:"customer added successfully"});

        
    } catch (error) {
        console.log("error in customer",error);
        return res.status(404).json({message:"Error in adding customer"});
        
    }
}