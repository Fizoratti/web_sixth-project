import { serversRepo } from '../../../helpers/servers-repo';

async function handler(req, res) {
	if (req.method === 'GET') {
		const servers = serversRepo.getAll();

		res.status(200).json(servers);
	}
}

export default handler;
