---
to: xstate/<%= h.changeCase.lower(name) %>/use<%= (h.changeCase.upperCaseFirst(name)) %>.ts
---
import { useMachine } from "@xstate/react";
import machine from "./machine";

//*replace the URL with your api route*/
const URL = 'https://jsonplaceholder.typicode.com/users'
export default () => {
  const [state, send] = useMachine(machine, {
    actions: {
      load: () => {
        fetch(URL)
          .then(res => res.json())
          .then(data => {
            send({ type: "RESOLVE", data: data });
          });
      },
    }
  });

  return [
    state.context.data,
    { loading: state.value === "loading", success: state.value === "success" },
    () => send("LOAD_DATA)
  ];
};

