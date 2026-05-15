import { Outlet } from "react-router-dom";

function Projects({ setIsDirty }) {
  return (
    <section className="py-4">
      <Outlet context={{ setIsDirty }} />
    </section>
  );
}

export default Projects;
