import * as mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	phone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

export const Meeting = mongoose.model('Meeting', meetingSchema);
