import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import { userColumns, userRows, userFields, projectColumns, projectRows, projectFields, devColumns, devRows, devFields } from "./data";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar isDirty={isDirty} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="/users" element={<Users setIsDirty={setIsDirty} />}>
              <Route index element={<TableDashboard title="Users" addLabel="Add New User" columns={userColumns} rows={userRows} />} />
              <Route path="add" element={<FormDashboard title="Add User" fields={userFields} />} />
            </Route>

            <Route path="/projects" element={<Projects setIsDirty={setIsDirty} />}>
              <Route index element={<TableDashboard title="Projects" addLabel="Add New Project" columns={projectColumns} rows={projectRows} />} />
              <Route path="add" element={<FormDashboard title="Add Project" fields={projectFields} />} />
            </Route>

            <Route path="/developers" element={<Developers setIsDirty={setIsDirty} />}>
              <Route index element={<TableDashboard title="Developers" addLabel="Add New Developer" columns={devColumns} rows={devRows} />} />
              <Route path="add" element={<FormDashboard title="Add Developer" fields={devFields} />} />
            </Route>

          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
