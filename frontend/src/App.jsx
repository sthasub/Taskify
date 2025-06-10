import "./App.css";
import ProjectList from "./features/projects/ProjectList";
import { ProjectContextProvider } from "./store/project/ProjectContext";

function App() {


  return (
    <>
      <ProjectContextProvider>
        <ProjectList />
      </ProjectContextProvider>
    </>
  );
}

export default App;
