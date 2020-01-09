import * as mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
		text: true
	},
	describe: {
		type: String,
		text: true,
		required: true
	},
	education: {
		type: [String],
		required: true,
		text: true
	},
	experience: {
		type: String,
		required: true,
		text: true
	},
	marksId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Mark'
	},
	specializationsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Specialization'
	},
	filesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'File',
		required: true
	},
	description: {
		type: [String],
		required: true,
		text: true
	}
});

export const Doctor = mongoose.model('Doctor', doctorSchema);
