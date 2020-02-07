 const fetchQuery = require('./utils/fetch-query');

 const GET_TODOS = `
	query {
		allTodos {
			data {
				_id
				text
				completed
			}
		}
	}
`;

exports.handler = async () => {
	const { data, errors } = await fetchQuery(GET_TODOS);

	if (errors) {
		return {
			statusCode: 500,
			body: JSON.stringify(errors)
		}
	}

	return {
		statusCode: 200,
		body: JSON.stringify({ todos: data.allTodos.data })
	}
}