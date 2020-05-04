import { IFile, IMark } from "types"


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
    article: string
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

export interface IArticle {
	_id: string | null
	title: string,
	preview: string,
	chunks: Array<IChunk>
	fileId?: IFile | string,
	marksId: Array<IMark>
}