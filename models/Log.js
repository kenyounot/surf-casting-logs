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
		min: [0, 'Minimum air temperature is 0.'],
		max: [120, 'Maximum air temperature is 120'],
		required: [true, 'Air temperature is required.'],
	},
	barometer: {
		type: String,
		maxlength: [
			20,
			'Max length for barometer cant be more than 20 characters',
		],
		required: [true, 'Barometer is required.'],
	},
	swellSize: {
		type: Number,
		min: [0, 'Minimum swell size is 0.'],
		max: [15, 'Maximum swell size is 15'],
		required: [true, 'Swell size is required.'],
	},
	tide: {
		type: String,
		maxLength: [
			30,
			'Max tide length cant be more than 30 characters.',
		],
		required: [true, 'Tide is required.'],
	},
	waterClarity: {
		type: String,
		maxLength: [
			30,
			'Max water clarity length cant be more than 30 characters.',
		],
		required: [true, 'Water clarity is required.'],
	},
	waterTemperature: {
		type: Number,
		min: [28, 'Min water temperature is 28.'],
		max: [90, 'Max water temperature is 90.'],
		required: [true, 'Water temperature is required.'],
	},
	tripRating: {
		type: Number,
		min: [1, 'Minimum rating is 1.'],
		max: [5, 'Maximum rating is 5.'],
		required: true,
	},
	comments: {
		type: String,
		maxLength: [1000, 'Max comment length is 1000 characters.'],
	},
});

module.exports = mongoose.model('Log', logSchema);
