import { useEffect, useState } from 'react';

import ServerList from '../components/servers/ServerList';

const DUMMY_SERVERS = [
	{
		id: 'srv1',
		title: 'Server 1',
		image:
			'https://static.vecteezy.com/system/resources/previews/002/249/702/original/server-icon-on-white-background-vector.jpg',
		address: 'Round Rock St.',
		description: 'Glassbox',
	},
	{
		id: 'srv2',
		title: 'Server 2',
		image:
			'https://static.vecteezy.com/system/resources/previews/002/249/702/original/server-icon-on-white-background-vector.jpg',
		address: 'Round Rock St.',
		description: 'Glassbox',
	},
	{
		id: 'srv3',
		title: 'Server 3',
		image:
			'https://static.vecteezy.com/system/resources/previews/002/249/702/original/server-icon-on-white-background-vector.jpg',
		address: 'Round Rock St.',
		description: 'Glassbox',
	},
];

function HomePage() {
	const [loadedServers, setLoadedServers] = useState([]);

	useEffect(() => {
		// send a http request and fetch data
		setLoadedServers(DUMMY_SERVERS);
	}, []);

	return <ServerList servers={loadedServers}></ServerList>;
}

export default HomePage;
