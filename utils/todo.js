/**
 * This function makes sure, that todos added to the db
 * have no other properties than `name` and `isDone` and
 * that they're of type string and boolean respectively
 */
export const sanitizeTodo = ({ name, isDone }) => {
  return {
    name: name ? String(name) : undefined,
    isDone: isDone ? Boolean(isDone) : undefined,
  };
};
