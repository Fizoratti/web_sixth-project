import { MongoClient } from 'mongodb';

// /api/new-server
// POST /api/new-server

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		// const client = MongoClient.connect(
		// 	'mongodb+srv://robson:gsmp2022@cluster0.90gdv.mongodb.net/servers?retryWrites=true&w=majority'
		// );
		// const db = client.db();

		// const serversCollection = db.collection('servers');

		// const result = await serversCollection.insertOne(data);

		// console.log(result);

		// client.close();

		// res.status(201).json({ message: 'Server inserted.' });

		//---

		// await MongoClient.connect(
		// 	'mongodb+srv://robson:gsmp2022@cluster0.90gdv.mongodb.net',
		// 	function (err, client) {
		// 		if (err) throw err;

		// 		var db = client.db('servers');

		// 		await db.collection('servers').insertOne(data, function (insertErr, result) {
		// 			if (insertErr) throw insertErr;
		// 			console.log(result);
		// 		});

		// 		client.close();
		// 	}
		// );

		// ---

		// const uri =
		// 	'mongodb+srv://robson:gsmp2022@cluster0.90gdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
		// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
		// client.connect((err) => {
		// 	const collection = client.db('servers').collection('servers');
		// 	// perform actions on the collection object
		// 	await collection.insertOne(data);

		// 	client.close();
		// });

		// ---

		// let client;

		// const uri =
		// 	'mongodb+srv://robson:gsmp2022@cluster0.90gdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

		// try {
		// 	client = await MongoClient.connect(uri);
		// } catch (error) {
		// 	res.status(500).json({ message: 'Could not connect to database.' });
		// 	return;
		// }

		// const db = client.db();

		// try {
		// 	const result = await db.collection('servers').insertOne(data);
		// 	console.log(result);
		// } catch (error) {
		// 	client.close();
		// 	res.status(500).json({ message: 'Storing server failed!' });
		// 	return;
		// }

		// client.close();

		res.status(201).json({ message: 'Server inserted.' });
	}
}

export default handler;
