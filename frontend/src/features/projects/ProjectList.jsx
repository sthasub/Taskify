import { useEffect } from "react";
import { getAllProducts } from "./projectAPI";
import { useProject } from "../../store/project/ProjectContext";

export default function ProjectList() {
  const { state, dispatch } = useProject();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProducts();
        console.log("Fetched projects:", res.data);
        dispatch({ type: "LISTING", payload: res.data });
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    fetchData(); // call async function
  }, []);
  return (
    <>
      <div>
        {state.map((item) => (
          <div key={item.id}>{item.id}</div>
        ))}
      </div>
    </>
  );
}
