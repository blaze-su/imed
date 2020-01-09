import * as mongoose from 'mongoose';

const seminarSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	number: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});

export const Seminar = mongoose.model('Seminar', seminarSchema);
