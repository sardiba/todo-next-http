import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useEffect, useState } from "react";

export const TodoList = () => {
  /**
   * The todos state tracks the current list of todos.
   * Each todo has three properties: `_id`, `name` and `isDone`.
   */
  const [todos, setTodos] = useState([]);

  /**
   * The isLoading state indicates whether the todos are currently being loaded.
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * The async fetchTodos function fetches all todos and sets the todos state.
   */
  const fetchTodos = async () => {
    // begin by setting the isLoading state to `true`

    setIsLoading(true); // TODO: ** set isLoading to true

    try {
      // fetch '/api/todos' to get all todos

      const fetchedTodos = await fetch("http://localhost:3000/api/todos"); // TODO: ** fetch todos and parse to json
      const data = await fetchedTodos.json();
      console.log(data);
      // set the todos state to the newly fetched todos
      setTodos(data);
    } catch (error) {
      // log any errors to the console
      console.error(error.message);
    } finally {
      // no matter what happend we're not loading anymore
      setIsLoading(false); // TODO: set isLoading to false
    }
  };

  /**
   * This effect makes sure, that fetchTodos is called when the component is
   * mounted. There is no await here since we don't care about the value of the
   * Promise returned by fetchTodos.
   */
  useEffect(() => {
    // TODO: call fetchTodos here
    fetchTodos();
  }, []);

  /**
   * The deleteTodo function deletes the todo for _id.
   * It then gets fresh and updated list of todos by calling fetchTodos() again.
   * @param {string} _id
   */
  const deleteTodo = async (_id) => {
    // begin by setting the isLoading state to `true`
    setIsLoading(true); // TODO: set isLoading to true

    try {
      await fetch(`http://localhost:3000/api/todos/${_id}`); // TODO: use await fetch to delete the todo for `_id`.
      // You'll need to set the http method for fetch to DELETE

      fetchTodos();
    } catch (error) {
      console.error(error.message);
    }
  };

  /**
   * The insertTodo function inserts a new todo.
   * It then gets fresh and updated list of todos by calling fetchTodos() again.
   * @param {*} newTodo
   */
  const insertTodo = async (newTodo) => {
    // begin by setting the isLoading state to `true`
    setIsLoading(true); // TODO: set isLoading to true

    try {
      await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      });
      // TODO: ** use await fetch to insert the new todo.
      // You'll need to set the http method for fetch to POST and JSON.stringify
      // the `newTodo` when setting it as the body and set the correct
      // Content-Type header for sending JSON.

      fetchTodos();
    } catch (error) {
      console.error(error.message);
    }
  };

  /**
   * The updateTodo function updates the todo for _id.
   * It then gets fresh and updated list of todos by calling fetchTodos() again.
   * @param {string} _id
   * @param {*} updatedTodo
   */
  const updateTodo = async (_id, updatedTodo) => {
    // begin by setting the isLoading state to `true`
    setIsLoading(true); // TODO: set isLoading to true

    try {
      await fetch(`http://localhost:3000/api/todos/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      }); // TODO: use await fetch to update the todo for `_id`.
      // You'll need to set the http method for fetch to PATCH or PUT (depending
      // on what you did in for the api), JSON.stringify the `updatedTodo` when
      // setting it as the body and set the correct Content-Type header for
      // sending JSON.

      fetchTodos();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <ul>
        {todos.length
          ? todos.map(({ _id, name, isDone }) => (
              <TodoItem
                key={_id}
                name={name}
                isDone={isDone}
                // onToggle is called from within the TodoItem, when the
                // TodoItem wants to toggle it's `isDone` state.
                onToggle={() => {
                  updateTodo({ _id, isDone }); // TODO: ** call updateTodo for `_id` and toggle `isDone`
                }}
                // onDelete is called from within the TodoItem, when the
                // TodoItem wants to have itself removed.
                onDelete={() => {
                  deleteTodo({ _id }); // TODO: call deleteTodo for `_id`
                }}
              />
            ))
          : "Add a new todo to get started."}
      </ul>
      <CreateTodo
        // onCreate is called from within CreateTodo, when CreateTodo wants to
        // insert a new todo item.
        onCreate={(name) => {
          insertTodo(newTodo); // TODO: call insertTodo with new todo object
        }}
      />
      <div>{isLoading ? "🔄" : "✅"}</div>
    </>
  );
};
