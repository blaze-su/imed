import * as mongoose from 'mongoose';


export interface IService extends mongoose.Document {
	_id: string,
	title: string,
	parentId: string,
	sort: number,
	description: string,
	doctorsId: string[],
	equipmentsId: string[]
}

export interface IServiceCategory {
	_id?: string,
	title: string,
	sort?: number
}

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

export const Service = mongoose.model<IService>('Service', serviseSchema);
