export type Vacancy = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
};

export const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Frontend Developer",
    category: "IT",
    location: "Tbilisi",
    description: "დაწვრილებითი აღწერის მოკლე ვარიანტი – React, Next.js და UI მუშაობა."
  },
  {
    id: 2,
    title: "Backend Developer",
    category: "IT",
    location: "Tbilisi",
    description: "Node.js, Express, PostgreSQL API-ს განვითარება."
  },
  {
    id: 3,
    title: "Marketing Specialist",
    category: "Marketing",
    location: "Tbilisi",
    description: "მარკეტინგული კამპანიების დაგეგმვა და შესრულება."
  },
  {
    id: 4,
    title: "Branch Manager",
    category: "Management",
    location: "Kutaisi",
    description: "ფილიალის ოპერაციული მართვა და გუნდის ზედამხედველობა."
  },
  {
    id: 5,
    title: "Customer Support",
    category: "Service",
    location: "Batumi",
    description: "კლიენტების კონსულტაცია და მხარდაჭერა."
  }
];
