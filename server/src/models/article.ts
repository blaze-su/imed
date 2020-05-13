import * as mongoose from 'mongoose';
import { IFile, IMark } from '@models/';


interface IChunkComon {
    _id?: string
    type: "TITLE" | "PARAGRAPH"
    sort: number
}


interface IChunkTitle extends IChunkComon {
    title: {
        title: string
        style: "H2" | "H3" | "H4"
    };
}


interface IChunkParagraph extends IChunkComon {
    text: string
    image?: {
        file?: {
            _id: string | null
            src: string
            title?: string
            type: string
        };
        style: "SMALL" | "MEDIUM" | "LARGE"
    };
}

export type IChunk = IChunkTitle | IChunkParagraph

const chunkTitleSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	},
	style: {
		required: true,
		type: String,
		enum: [ "H2" , "H3" , "H4"]
	}
})


const chunkImageSchema = new mongoose.Schema({
	fileId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'File',
		required: true
	},
	style: {
		type: String,
		required: true,
		emun: ["SMALL" , "MEDIUM" , "LARGE"]
	}
})


const chunkSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		emun: ["TITLE" , "PARAGRAPH"]
	},
	sort: {
		type: Number,
		required: true
	},
	title: chunkTitleSchema,
	text: {
		type: String,
		text: true
	},
	image: chunkImageSchema
})


export interface IArticle extends mongoose.Document {
	_id: string | null
	title: string,
	preview: string,
	chunks: Array<IChunk>
	fileId?: IFile | string,
	marksId: Array<IMark>
}


const articleSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	},
	preview: {
		type: String,
		required: true,
		text: true
	},
	chunks: [chunkSchema],
	fileId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'File'
	},
	marksId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Mark'
	}
});

export const Article = mongoose.model<IArticle>('Article', articleSchema);
