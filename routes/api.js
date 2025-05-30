import GetCustomer from '../app/models/getCustomer.js';
import CreateCustomer from '../app/models/postCustomer.js';
import UpdateCustomer from '../app/models/UpdateCustomer.js';
import DeleteCustomer from '../app/models/deleteCustomer.js';
import { Router } from 'express';

export default (function () {
    const router = Router();

    //READ
    router.post('/api/customer/search', GetCustomer);

    //CREATE
    router.post('/api/customer', CreateCustomer);

    //UPDATE
    router.put('/api/customer/:cpf', UpdateCustomer);

    //DELETE
    router.delete('/api/customer/:cpf', DeleteCustomer);

    return router;
}());