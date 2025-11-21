export type Vacancy = {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  isActive: boolean;
};

export const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Frontend დეველოპერი",
    category: "IT",
    location: "თბილისი",
    description: "React, Next.js და თანამედროვე UI ტექნოლოგიებით მუშაობა.",
    isActive: true
  },
  {
    id: 2,
    title: "Backend დეველოპერი",
    category: "IT",
    location: "თბილისი",
    description: "Node.js, Express, PostgreSQL API-ს განვითარება.",
    isActive: true
  },
  {
    id: 3,
    title: "მარკეტინგის სპეციალისტი",
    category: "მარკეტინგი",
    location: "თბილისი",
    description: "მარკეტინგული კამპანიების დაგეგმვა და შესრულება.",
    isActive: false
  },
  {
    id: 4,
    title: "ფილიალის მენეჯერი",
    category: "მენეჯმენტი",
    location: "ქუთაისი",
    description: "ფილიალის ოპერაციული მართვა და გუნდის ზედამხედველობა.",
    isActive: true
  },
  {
    id: 5,
    title: "მომხმარებელთა მხარდაჭერა",
    category: "სერვისი",
    location: "ბათუმი",
    description: "კლიენტების კონსულტაცია და მხარდაჭერა.",
    isActive: false
  },
  {
    id: 6,
    title: "UX/UI დიზაინერი",
    category: "IT",
    location: "თბილისი",
    description: "მომხმარებლის გამოცდილების პროექტირება და ინტერფეისის დიზაინი.",
    isActive: true
  },
  {
    id: 7,
    title: "გაყიდვების მენეჯერი",
    category: "გაყიდვები",
    location: "თბილისი",
    description: "B2B გაყიდვები და კლიენტურის განვითარება.",
    isActive: true
  },
  {
    id: 8,
    title: "HR სპეციალისტი",
    category: "მენეჯმენტი",
    location: "ბათუმი",
    description: "პერსონალის მართვა, შერჩევა და ადაპტაცია.",
    isActive: false
  },
  {
    id: 9,
    title: "DevOps ინჟინერი",
    category: "IT",
    location: "თბილისი",
    description: "CI/CD, cloud ინფრასტრუქტურა და ავტომატიზაცია.",
    isActive: true
  },
  {
    id: 10,
    title: "ფინანსური ანალიტიკოსი",
    category: "ფინანსები",
    location: "თბილისი",
    description: "ფინანსური მონაცემების ანალიზი და რეპორტინგი.",
    isActive: true
  }
];