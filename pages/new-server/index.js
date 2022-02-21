import NewServerForm from '../../components/servers/NewServerForm';

function NewServerPage() {
	async function addServerHandler(enteredServerData) {
		const response = await fetch('/api/new-server', {
			method: 'POST',
			body: JSON.stringify(enteredServerData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		console.log(data);
	}

	return <NewServerForm onAddServer={addServerHandler} />;
}

export default NewServerPage;
