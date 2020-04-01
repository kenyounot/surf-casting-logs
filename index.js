const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const app = express();

// Log http requests in development
app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`serving running in ${process.env.NODE_ENV} on port ${PORT}`
	)
);
