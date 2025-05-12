import { useState } from 'react';
import { certifications } from '../content/certifications';
import '../assets/css/Certifications.css';

const categories = ['all', 'frontend', 'backend', 'tools', 'fundamentals'] as const;

interface CertificationsProps {
  language: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all');

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  const translations = {
    title: language ? 'Certificaciones' : 'Certifications',
    categories: {
      all: language ? 'Todos' : 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: language ? 'Herramientas' : 'Tools',
      fundamentals: language ? 'Fundamentos' : 'Fundamentals'
    }
  };

  return (
    <section id="section-certifications">
      <h2>{translations.title}</h2>
      
      <div className="categories-container">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {translations.categories[category]}
          </button>
        ))}
      </div>

      <div className="certifications-grid">
        {filteredCertifications.map(cert => (
          <a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
          >
            <h3>{cert.title}</h3>
            <p>{cert.institution}</p>
            <p className="date">{cert.startDate} - {cert.endDate}</p>
            <p>{cert.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}; 