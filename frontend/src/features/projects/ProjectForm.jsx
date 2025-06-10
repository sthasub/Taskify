import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useProject } from "../../store/project/ProjectContext";
function ProjectForm() {
  const [projectInfo, setProjectInfo] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    category: "",
    members: [],
  });
  const { state, dispatch } = useProject();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      alert("Empty");
      return;
    }
    setProjectInfo((prev) => ({ ...prev, [name]: value }));
    dispatch({ type: "ADD_PROJECT", payload: projectInfo });
    if (!state) alert("No Value empty");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data Submitted:", projectInfo);
    setProjectInfo({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      category: "",
      members: [],
    });
  };

  const handleReset = () => {
    setProjectInfo({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      category: "",
      members: [],
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Project Form</h3>

        <label>Project Name:</label>
        <Input
          type="text"
          name="name"
          value={projectInfo.name}
          handleOnChange={handleChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={projectInfo.description}
          handleOnChange={handleChange}
        />

        <label>Start Date:</label>
        <Input
          type="date"
          name="startDate"
          value={projectInfo.startDate}
          handleOnChange={handleChange}
        />

        <label>End Date:</label>
        <Input
          type="date"
          name="endDate"
          value={projectInfo.endDate}
          handleOnChange={handleChange}
        />

        <label>Category:</label>
        <select
          name="category"
          value={projectInfo.category}
          handleOnChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Web">Web</option>
          <option value="Mobile">Mobile</option>
          <option value="AI">AI</option>
        </select>

        <Button type="submit">Submit</Button>
        <Button type="reset" handleOnclick={handleReset}>
          Reset
        </Button>
      </form>
    </>
  );
}

export default ProjectForm;
