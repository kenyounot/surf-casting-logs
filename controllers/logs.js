const Log = require('../models/Log');

// @desc Get all logs
// @route GET /api/v1/logs
// @auth Private
exports.getLogs = (req, res) => {
	res.status(200).json({
		success: true,
		msg: 'Get all logs',
	});
};

// @desc Create a log
// @route POST /api/v1/logs
// @auth Private
exports.createLog = async (req, res) => {
	try {
		const log = await Log.create(req.body);

		res.status(201).json({
			success: true,
			data: log,
		});
	} catch (err) {
		res.status(400).json({
			success: false,
			error: err.message,
		});
	}
};

// @desc Get a single log
// @route GET /api/v1/logs/:id
// @auth Private
exports.getLog = (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Get log with id of ${req.params.id}`,
	});
};

// @desc Update a single log
// @route PUT /api/v1/logs/:id
// @auth Private
exports.updateLog = (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Update log with id of ${req.params.id}`,
	});
};

// @desc Delete a single log
// @route DELETE /api/v1/logs/:id
// @auth Private
exports.deleteLog = (req, res) => {
	res.status(200).json({
		success: true,
		msg: `Delete log with id of ${req.params.id}`,
	});
};
