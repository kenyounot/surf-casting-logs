const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors')
const connectDB = require('./config/db'); 


// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Route Files
const logs = require('./routes/logs');

// Set app to express
const app = express();

// Body parser
app.use(express.json())

// Log http requests in development
if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}


// Mount routers
app.use('/api/v1/logs', logs);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`serving running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);


