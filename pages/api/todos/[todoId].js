import { ObjectId } from 'mongodb';
import { client } from '../../../utils/database';
import { sanitizeTodo } from '../../../utils/todo';

export default async function handler(request, response) {
  try {
    await client.connect();
    const db = client.db('todoapp');
    const collection = db.collection('todos');

    const _id = ObjectId(request.query.todoId);

    switch (request.method) {
      case 'GET':
        const todo = {}; // TODO: find todo for _id
        response.status(200).json(todo);
        break;

      case 'PUT':
        const updatedTodo = sanitizeTodo(request.body);
        const updateResult = {}; // TODO: update todo for _id with updatedTodo
        response.status(200).json(updateResult);
        break;

      case 'DELETE':
        const deleteResult = {}; // TODO: delete todo for _id
        response.status(200).json(deleteResult);
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
