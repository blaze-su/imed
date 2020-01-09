import * as path from 'path';
import * as express from 'express';
import * as fs from 'fs';

const photoRouter: express.Router = express.Router();

interface IFiles {
	filename: string;
}

const dirpath: string = './about';

photoRouter
	.route('/photos')
	.get(
		(
			req: express.Request,
			res: express.Response,
			next: express.NextFunction
		) => {
			fs.readdir(dirpath, (err: Error | null, files: any) => {
				if (err) {
					next(err);
				}

				const photos: string[] = files.reduce(
					(arr: string[], file: IFiles) => {
						arr.push('http://localhost:8001/photos/' + file);
						return arr;
					},
					[]
				);
				res.json(photos);
			});
		}
	);

photoRouter
	.route('/photos/:id')
	.get((req: express.Request, res: express.Response) => {
		res.sendFile(path.join(__dirname, '../../about/' + req.params.id));
	})
	.delete((req: express.Request, res: express.Response) => {
		const deletepath: string = dirpath + '/' + req.params.id;
		fs.unlinkSync(deletepath);
		res.json('Успешно удаленно');
	});

export { photoRouter };
