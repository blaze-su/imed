import * as mongoose from 'mongoose';

const serviseSchema = new mongoose.Schema({
	doctorsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Doctor'
	},
	describe: {
		required: true,
		type: [String]
	}
});

export const Service = mongoose.model('Service', serviseSchema);
