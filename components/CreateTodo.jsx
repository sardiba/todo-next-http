/**
 * A simple form that creates new todos
 */
export const CreateTodo = ({ onCreate }) => {
  return (
    <form
      className="CreateTodo"
      onSubmit={(event) => {
        const form = event.target;
        const newTodo = form.elements.newTodo.value;
        onCreate(newTodo);
        event.preventDefault();
        form.reset();
      }}
    >
      <input type="text" name="newTodo" />
      <input type="submit" />
    </form>
  );
};
