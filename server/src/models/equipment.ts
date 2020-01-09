import * as mongoose from 'mongoose';

const equipmentSchema = new mongoose.Schema({
	title: {
		type: String
	},
	photo: {
		type: String
	},
	describe: {
		type: String,
		required: true
	}
});

export const Equipment = mongoose.model('Equipment', equipmentSchema);
