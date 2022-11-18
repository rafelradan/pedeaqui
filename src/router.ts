import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/podructs', (req, res) => {
    res.send('ok');
});

// Create product
router.post('/podructs', (req, res) => {
    res.send('ok');
});

// Get products by category
router.get('/podructs/:categoryId/products', (req, res) => {
    res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
    res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
    res.send('ok');
});


// Change order status
router.patch('/orders/:orderId', (req, res) => {
    res.send('ok');
});


// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
    res.send('ok');
});
