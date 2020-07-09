import { assign, Machine } from "xstate";

//*put your data type in the context type*/
const context = {
  data: null
};
interface States {
  states: {
    idle: {};
    pending: {};
    success: {};
  };
}
interface FetchContext {
  data: string;
}
const machine = Machine<States, FetchContext>({
  id: "todolist",
  initial: "idle",
  context,
  states: {
    idle: {
      on: { LOAD_DATA: "loading" }
    },
    loading: {
      entry: ["load"],
      on: {
        RESOLVE: {
          target: "success",
          actions: assign({
            data: (context, event: any) => event.data
          })
        }
      }
    },
    success: {}
  }
});
export default machine;
