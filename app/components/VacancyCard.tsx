import { Vacancy } from "../data/vacancies";

type Props = {
  vacancy: Vacancy;
};

const VacancyCard = ({ vacancy }: Props) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{vacancy.title}</h2>
      <p>{vacancy.category} — {vacancy.location}</p>
      <p>{vacancy.description}</p>
    </div>
  );
};

export default VacancyCard;