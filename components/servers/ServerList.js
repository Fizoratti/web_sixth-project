import ServerItem from './ServerItem';
import classes from './ServerList.module.css';

function ServerList(props) {
	return (
		<ul className={classes.list}>
			{props.servers.map((server) => (
				<ServerItem
					key={server.id}
					id={server.id}
					image={server.image}
					title={server.title}
					address={server.address}
				/>
			))}
		</ul>
	);
}

export default ServerList;
