export interface taskModel {
  _id: string,
  title: string;
  description: string;
  file: string;
  completed: statusTask;
  budged: budgedTask;
  creatAT: Date;
  endAT: Date;
  updateAT: Date;
  user: {
    _id: string,
    name: string
  };
}

type statusTask = "Pending" | "InProcess" | "Completed";
type budgedTask = "Work" | "Personal" | "Other"| "none";