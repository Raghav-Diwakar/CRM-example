import { Router } from "express";
import { createCustomer } from "../controllers/customer.js";
// import { authGoogle, authGoogleCallback } from "../controllers/signIn.js";
import { getOrdersByCustomerId, orderAdds ,getOrders} from "../controllers/orders.js";
import { audienceRules } from "../controllers/audience.js";
import { getCampaignHistory } from "../controllers/campaign.js";
const route=Router();


//login:

// route.get('/auth/google',authGoogle);
// route.get('/auth/google/callback',authGoogleCallback);


//customer:

route.post('/createCustomer',createCustomer);

//orders:

route.post('/create-orders',orderAdds);
route.get('/get-orders',getOrders);
route.get('/get-order-bycustomer',getOrdersByCustomerId)



//audience

route.post('/audience-rules',audienceRules)


//campaign

route.get('/get-campaign-history',getCampaignHistory);


export default route