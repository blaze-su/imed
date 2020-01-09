import * as path from 'path';
import * as express from 'express';

const resumeRouter: express.Router = express.Router();

interface IFiles {
	filename: string;
}

resumeRouter
	.route('/resumes/:id')
	.get((req: express.Request, res: express.Response) => {
		const urlPath1: string =
			__dirname + '../../../resumes/' + req.params.id;
		res.sendFile(path.join(urlPath1));
	});

export { resumeRouter };
