import * as mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	equipmentsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Equipment'
	},
	doctorsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Doctor'
	},
	informationsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Information'
	},
	pricesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Price'
	}
});

export const Category = mongoose.model('Category', categorySchema);
