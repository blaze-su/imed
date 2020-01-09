import * as mongoose from 'mongoose';

const sefurlSchema = new mongoose.Schema({
	modulesId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Module'
	},
	code: {
		required: true,
		type: [String]
	},
	redirect: {
		type: [String]
	},
	cannonical: {
		type: String,
		required: true
	},
	timeStamp: {
		required: true,
		type: Date,
		default: Date.now
	},
	breadCrumbs: {
		type: String,
		required: true
	},
	url: {
		required: true,
		type: String
	}
});

export const Sefurl = mongoose.model('Sefurl', sefurlSchema);
