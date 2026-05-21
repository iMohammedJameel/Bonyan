import { Outlet } from "react-router-dom";

function Users({ setIsDirty }) {
  return (
    <section className="py-4">
      <Outlet context={{ setIsDirty }} />
    </section>
  );
}

export default Users;
