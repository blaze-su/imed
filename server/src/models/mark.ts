import * as mongoose from 'mongoose';

export interface IMark extends mongoose.Document {
	_id: string | null;
	title: string;
}


const markSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	}
});

export const Mark = mongoose.model<IMark>('Mark', markSchema);
