import * as mongoose from 'mongoose';

const tableSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	text: {
		type: String
	}
});

export const Table = mongoose.model('Table', tableSchema);
