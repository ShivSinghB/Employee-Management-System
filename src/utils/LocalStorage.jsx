const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Prepare Report",
        description: "Prepare the monthly financial report.",
        date: "2025-02-01",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        description: "Attend the client meeting for project discussion.",
        date: "2025-02-03",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Update Database",
        description: "Update the customer records in the database.",
        date: "2025-02-05",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Code Review",
        description: "Review the new code for the software module.",
        date: "2025-02-02",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Submit Report",
        description: "Submit the weekly progress report.",
        date: "2025-02-04",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug Fixing",
        description: "Fix the reported bugs in the application.",
        date: "2025-02-06",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Design Mockup",
        description: "Create the mockup for the new landing page.",
        date: "2025-02-03",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Briefing",
        description: "Conduct the weekly team briefing.",
        date: "2025-02-05",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Research",
        description: "Perform market research for upcoming projects.",
        date: "2025-02-07",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Kabir",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Inventory Check",
        description: "Perform an inventory audit.",
        date: "2025-02-04",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Data Entry",
        description: "Input new client data.",
        date: "2025-02-06",
        category: "Data Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Document Filing",
        description: "Organize and file legal documents.",
        date: "2025-02-08",
        category: "Administration",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Ayaan",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 4,
      newTask: 1,
      completed: 3,
      failed: 0,
    },
    tasks: [
      {
        taskTitle: "Client Outreach",
        description: "Contact potential clients for business proposals.",
        date: "2025-02-05",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Training Session",
        description: "Conduct training for new hires.",
        date: "2025-02-07",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Policy Update",
        description: "Review and update company policies.",
        date: "2025-02-09",
        category: "Compliance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];


const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return{employees, admin}
};
