export const userColumns = ["#", "First Name", "Last Name", "Handle"];
export const userRows = [
  [1, "Mark", "Otto", "@mark"],
  [2, "Jacob", "Thornton", "@jacob"],
  [3, "Larry", "Bird", "@larry"],
];
export const userFields = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "lastName", label: "Last Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "password", label: "Password", type: "password" },
];

export const projectColumns = ["#", "Project Name", "Status", "Deadline"];
export const projectRows = [
  [1, "Bonyan App", "Active", "2026-06-01"],
  [2, "CMS Portal", "Pending", "2026-08-15"],
  [3, "Mobile App", "Completed", "2026-12-01"],
];
export const projectFields = [
  { id: "projectName", label: "Project Name", type: "text" },
  { id: "status", label: "Status", type: "text" },
  { id: "deadline", label: "Deadline", type: "date" },
];

export const devColumns = ["#", "Name", "Skill", "Email"];
export const devRows = [
  [1, "Ahmed Ali", "React", "ahmed@gmail.com"],
  [2, "Sara Mohamed", "Node.js", "sara@gmail.com"],
  [3, "Omar Hassan", "Flutter", "omar@gmail.com"],
];
export const devFields = [
  { id: "name", label: "Full Name", type: "text" },
  { id: "skill", label: "Skill", type: "text" },
  { id: "email", label: "Email", type: "email" },
];
