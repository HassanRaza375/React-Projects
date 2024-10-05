import { createContext } from "react";

export const TodoContext = createContext({
  arrayitems: [],
  DeleteEvent: () => {},
  AddEventHandler: () => {},
  EditEvent: () => {},
});
