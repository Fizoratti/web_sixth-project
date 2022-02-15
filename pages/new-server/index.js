import NewServerForm from '../../components/servers/NewServerForm';

function NewServerPage() {
	function addServerHandler(enteredServerData) {
		console.log(enteredServerData);
	}

	return <NewServerForm onAddServer={addServerHandler} />;
}

export default NewServerPage;
