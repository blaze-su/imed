import * as mongoose from 'mongoose';

const vacancySchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	}
});

export const Vacancy = mongoose.model('Vacancy', vacancySchema);
