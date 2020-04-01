exports.getLogs = (req, res) => {
	res.status(200).json({
		success: true,
		msg: 'Get all logs'
	});
};
