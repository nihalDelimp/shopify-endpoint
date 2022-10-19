"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOPIFY_PATH = exports.STRIPE_RETURN_URL = exports.STRIPE_REFRESH_URL = exports.STRIPE_CURRENCY = exports.STRIPE_APPLICATION_FEE = exports.STRIP_COUNTRY = exports.STRIPE_SECRET = exports.ORIGIN = exports.LOG_DIR = exports.LOG_FORMAT = exports.SECRET_KEY = exports.DB_DATABASE = exports.DB_PORT = exports.DB_HOST = exports.PORT = exports.NODE_ENV = exports.SHOPIFY_SHOP_NAME = exports.SHOPIFY_PASSWORD = exports.API_SECRET_KEY = exports.HOST = exports.HOST_SCHEME = exports.API_KEY = exports.CREDENTIALS = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });
exports.CREDENTIALS = process.env.CREDENTIALS === 'true';
_a = process.env, exports.API_KEY = _a.API_KEY, exports.HOST_SCHEME = _a.HOST_SCHEME, exports.HOST = _a.HOST, exports.API_SECRET_KEY = _a.API_SECRET_KEY, exports.SHOPIFY_PASSWORD = _a.SHOPIFY_PASSWORD, exports.SHOPIFY_SHOP_NAME = _a.SHOPIFY_SHOP_NAME, exports.NODE_ENV = _a.NODE_ENV, exports.PORT = _a.PORT, exports.DB_HOST = _a.DB_HOST, exports.DB_PORT = _a.DB_PORT, exports.DB_DATABASE = _a.DB_DATABASE, exports.SECRET_KEY = _a.SECRET_KEY, exports.LOG_FORMAT = _a.LOG_FORMAT, exports.LOG_DIR = _a.LOG_DIR, exports.ORIGIN = _a.ORIGIN, exports.STRIPE_SECRET = _a.STRIPE_SECRET, exports.STRIP_COUNTRY = _a.STRIP_COUNTRY, exports.STRIPE_APPLICATION_FEE = _a.STRIPE_APPLICATION_FEE, exports.STRIPE_CURRENCY = _a.STRIPE_CURRENCY, exports.STRIPE_REFRESH_URL = _a.STRIPE_REFRESH_URL, exports.STRIPE_RETURN_URL = _a.STRIPE_RETURN_URL;
exports.SHOPIFY_PATH = `https://${exports.API_KEY}:${exports.API_SECRET_KEY}@nihal-test-endpoint.myshopify.com/admin/api/2022-01`;
//# sourceMappingURL=index.js.map