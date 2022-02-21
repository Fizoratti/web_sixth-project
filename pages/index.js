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

function HomePage(props) {
	return <ServerList servers={props.servers}></ServerList>;
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch fata from an API

// 	return {
// 		props: {
// 			servers: DUMMY_SERVERS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fech data from api

	return {
		props: {
			servers: DUMMY_SERVERS,
		},
		revalidate: 1,
	};
}

export default HomePage;
