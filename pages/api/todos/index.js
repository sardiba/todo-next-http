import { client } from '../../../utils/database';
import { sanitizeTodo } from '../../../utils/todo';

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db('todoapp');
    const collection = db.collection('todos');

    switch (request.method) {
      case 'GET':
        const todos = []; // TODO: find all todos
        response.status(200).json(todos);
        break;

      case 'POST':
        const newTodo = sanitizeTodo(request.body);
        const insertResult = {}; // TODO: insert newTodo
        response.status(200).json(insertResult);
        break;

      default:
        response.status(405).json({ error: 'Method not allowed' });
        break;
    }
  } catch (error) {
    response.status(500).json({ error: 'Something went wrong!' });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
