import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';

const uploadRouter: express.Router = express.Router();

interface IFiles {
	filename: string;
}

const dirpath: string = './uploads';

uploadRouter
	.route('/uploads')
	.get((req: express.Request, res: express.Response) => {
		fs.readdir(dirpath, (err: Error | null, files: any) => {
			const photos: string[] = files.reduce(
				(arr: string[], file: IFiles) => {
					arr.push('localhost:8000/uploads/' + file);
					return arr;
				},
				[]
			);
			res.json(photos);
		});
	});

uploadRouter
	.route('/uploads/:id')
	.get((req: express.Request, res: express.Response) => {
		res.sendFile(path.join(__dirname, '../../uploads/' + req.params.id));
	})
	.delete((req: express.Request, res: express.Response) => {
		const deletepath: string = dirpath + '/' + req.params.id;
		fs.unlinkSync(deletepath);
		res.json('Успешно удаленно');
	});

export  {uploadRouter};
