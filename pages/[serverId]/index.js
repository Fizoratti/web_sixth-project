import ServerDetail from '../../components/servers/ServerDetail';

function ServerDetails() {
	return (
		<ServerDetail
			image='https://static.vecteezy.com/system/resources/previews/002/249/702/original/server-icon-on-white-background-vector.jpg'
			title='Server 1'
			address='Some street'
			description='Description.'
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					serverId: 'srv1',
				},
			},
			{
				params: {
					serverId: 'srv2',
				},
			},
			{
				params: {
					serverId: 'srv3',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for a single server

	const serverId = context.params.serverId;

	console.log(serverId);

	return {
		props: {
			serverData: {
				image:
					'https://static.vecteezy.com/system/resources/previews/002/249/702/original/server-icon-on-white-background-vector.jpg',
				title: 'Server 1',
				address: 'Some street',
				description: 'Description.',
			},
		},
	};
}

export default ServerDetails;
