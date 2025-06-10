import { createContext, useContext, useReducer } from "react";
import { reducer } from "./projectReducer";
const initialState = {
  name: "",
  description: "",
  status: "",
  startdDate: "",
  editDate: "",
  assignedTo: "",
};


const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
