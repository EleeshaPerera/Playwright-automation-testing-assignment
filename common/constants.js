const path = require('path');

const BASE_URL = process.env.BASE_URL || 'https://www.daraz.lk';
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'data');

module.exports = {
  BASE_URL,
  ROOT_DIR,
  DATA_DIR,
  USERS_PATH: path.join(DATA_DIR, 'users.json'),
  PRODUCTS_PATH: path.join(DATA_DIR, 'products.json'),
};
