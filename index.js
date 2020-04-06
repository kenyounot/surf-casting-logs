const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Route Files
const logs = require('./routes/logs');

// Set app to express
const app = express();

// Log http requests in development
app.use(morgan('dev'));

// Mount routers
app.use('/api/v1/logs', logs);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`serving running in ${process.env.NODE_ENV} on port ${PORT}`
	)
);
