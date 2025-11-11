import { education } from '../content/education';
import '../assets/css/Education.css';

interface EducationProps {
  language: boolean;
}

export const Education: React.FC<EducationProps> = ({ language }) => {
  const translations = {
    title: language ? 'Educación' : 'Education',
    status: {
      'in-progress': language ? 'En progreso' : 'In Progress',
      'completed': language ? 'Completado' : 'Completed'
    }
  };

  return (
    <section id="section-education">
      <h2>{translations.title}</h2>
      <div className="education-container">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <h3>{edu.title}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="date">
              {edu.startDate} - {edu.endDate || translations.status[edu.status]}
            </p>
            <p className="description">{edu.description}</p>
            {edu.status === 'in-progress' && (
              <span className="status">{translations.status[edu.status]}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}; 