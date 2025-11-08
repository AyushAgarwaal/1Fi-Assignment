import express from 'express';

import { getAllProducts,getProductById,getAllEMIPlans } from '../controllers/Product.js';

/// to get all products

const router = express.Router();

router.get('/all', getAllProducts);

router.get('/:id',getProductById);

router.get('/allEMI', getAllEMIPlans);


export default router;