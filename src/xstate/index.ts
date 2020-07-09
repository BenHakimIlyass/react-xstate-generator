import useTodoList from "./todolist/useTodoList";

const dist = (value, states, load) => ({ value, states, load });

export default () => {
  // Here you have to call your hooks
  // e.g : const [user, userStates, getUser] = useUser();
  const [todoList, todoStates, getTodoList] = useTodoList();
  // And here you have to pass each hook properties in the dist function
  // and pass it inside the return object
  // e.g : return {user: dist(user, userStates, getUser), data: dist(data, dataStates, getData)}
  return { todoList: dist(todoList, todoStates, getTodoList) };
};
