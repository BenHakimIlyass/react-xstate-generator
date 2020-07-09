# react-xstate-generator
This an useful generator for xstate fetching data using react hooks based on hygen.

To use this generator you will need to add **xstate** and **@xstate/react** packages.

# API

To initialize your xstate folder

```jsx
$ yarn hygen xstate init
```

If you have hygen installed globally

```jsx
$ hygen xstate init
```

 

To create your states

```jsx
$ yarn hygen xstate create
```

and write your state name.

```jsx
$ name>> myState
```

# What to do ?

Everytime you create a state you have to add manually two lines of code in `/xstate/index.ts`.

- Calling your state hook
- Return it as object

## Example

```jsx
//index.ts
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
```

You will find in your state folder `/xstate/yourState/` two files **machine.ts** and **useYourState.ts.**

In the hook file (e.g `useAuth.ts`) you can change the URL with your API route.

```jsx
import { useMachine } from "@xstate/react";
import machine from "./machine";

//*replace the URL with your api route*/
const URL = "https://jsonplaceholder.typicode.com/users";
```

# Using data

In your component you have just to call your store hook, and destructure your states objects.

```jsx
import * as React from "react";
import "./styles.css";
import useUser from "./xstate";

export default function App() {
  const { todoList } = useStore();
  return (
    <div>
      {user.states.success && user.value.name}
      {todoList.states.loading && "loading..."}
      <button onClick={todoList.load}>fetch</button>
    </div>
  );
}
```

That's it !!

You will find a live demo [here](https://codesandbox.io/s/new-mountain-gt5l4).
