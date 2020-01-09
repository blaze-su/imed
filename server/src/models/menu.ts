import * as mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	src: {
		type: String,
		required: true
	}
});

export const Menu = mongoose.model('Menu', menuSchema);
