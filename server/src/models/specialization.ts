import * as mongoose from 'mongoose';

const specializationSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	}
});

export const Specialization = mongoose.model('Specialization', specializationSchema);
