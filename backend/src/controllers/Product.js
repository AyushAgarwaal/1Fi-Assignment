import express from 'express';

import Product from '../models/Product.js';

/// to get all products

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    next(error); // Pass to global error handler
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error); // Forward error to middleware
  }
};


export const getAllEMIPlans = async (req, res, next) => {
try {
    
} catch (error) {
    
}
}