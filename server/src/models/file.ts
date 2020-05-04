import * as mongoose from 'mongoose';


export interface IFile extends mongoose.Document {
	_id: string | null;
	src: string;
	title?: string;
	type: string;
	parentId?: string
}


const fileSchema = new mongoose.Schema({
	src: {
		required: true,
		type: String
	},
	title: {
		type: String
	},
	type: {
		required: true,
		type: String
	},
	parentId: {
		type: String
	}
});

export const File = mongoose.model<IFile>('File', fileSchema);
