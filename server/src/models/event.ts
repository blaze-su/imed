import * as mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
	photo: {
		type: String
	},
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	place: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	cost: {
		type: String,
		required: true
	},
	doctorsId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Doctor'
	},
	tablesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Table'
	},
	describesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Describe'
	}
});

export const Event = mongoose.model('Event', eventSchema);
