/**
 * A single todo item
 */
export const TodoItem = ({ name, isDone, onDelete, onToggle }) => {
  // TODO: update this todo item to fulfill the following criteria:
  //
  //   const [isDone, setDone] = useState(`todo-id-done : ${id}`, false); //   - it visually shows weather it isDone or not
  //   onToggle = () => {
  //     setDone(!isDone);
  //   }; //   - it has an onClick listener that calls onToggle when the todo item is
  //     supposed to be toggled
  //   - it has an onClick listner (on a seperate button) that calls onDelete
  //     when the todo item is supposed to be deleted

  return <li>{name}</li>;
};
