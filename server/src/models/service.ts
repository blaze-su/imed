import * as mongoose from 'mongoose';

const serviseSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	},
	parentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service'
	},
	sort: {
		type: Number
	},
	description: {
		type: String,
	},
	doctorsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Doctor'
	},
	equipmentsId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Equipment'
	} 

});

export const Service = mongoose.model('Service', serviseSchema);
