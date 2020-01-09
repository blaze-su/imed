import * as mongoose from 'mongoose';

interface IBanner extends mongoose.Document {
	title: string;
	photo: string;
	text: string;
}

const bannerSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	photo: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
	}
});

export const Banner = mongoose.model<IBanner>('Appointment', bannerSchema);
