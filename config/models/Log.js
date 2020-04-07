const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
	location: {
		type: String,
		unique: true,
		trim: true,
		maxlength: [50, 'Name cant be more than 50 characters.'],
		required: [true, 'Location is required.'],
	},
	startDate: {
		type: Date,
		required: [true, 'Start date is required.'],
	},
	endDate: {
		type: Date,
		required: [true, 'End date is required.'],
	},
	windDirection: {
		type: String,
		maxlength: [
			50,
			'Wind direction cant be more than 50 characters.',
		],
		required: [true, 'Wind direction is required.'],
	},
	windSpeed: {
		type: String,
		maxLength: [
			20,
			'Wind speed max length cant be more than 20 characters.',
		],
		required: [true, 'Wind speed is required.'],
	},
	moonPhase: {
		type: String,
		maxLength: [
			30,
			'Max moon phase length cant be more than 30 characters.',
		],
		required: [true, 'Moon phase is required.'],
	},
	sky: {
		type: String,
		maxLength: [
			30,
			'Max sky length cant be more than 30 characters.',
		],
		required: [true, 'Sky condition is required.'],
	},
	precipitation: {
		type: String,
		maxLength: [
			30,
			'Max precipitation length cant be more than 30 characters.',
		],
		required: [true, 'Precipitation is required.'],
	},
	airTemperature: {
		type: Number,
		maxlength: [3, 'Temperature cant be more than 3 digits.'],
		required: [true, 'Air temperature is required.'],
	},
	barometer: {
		type: String,
		maxlength: [
			20,
			'Max length for baromete cant be more than 20 characters',
		],
		required: [true, 'Baromete is required.'],
	},
	swellSize: {
		type: Number,
		maxlength: [2, 'Max swell size length is 2 digits.'],
	},
});
