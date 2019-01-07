import { schema } from 'normalizr';

// Provides schemes to normalizate data

export const Product = new schema.Entity('products');
export const ProductCollection = [Product];