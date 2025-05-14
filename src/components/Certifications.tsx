import { useState } from 'react';
import { certifications } from '../content/certifications';
import '../assets/css/Certifications.css';

const categories = ['all', 'frontend', 'backend', 'tools', 'fundamentals', 'languages', 'other'] as const;

interface CertificationsProps {
  language: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all');

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  // Ordenar certificaciones por fecha (más reciente primero)
  const sortedCertifications = [...filteredCertifications].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const translations = {
    title: language ? 'Certificaciones' : 'Certifications',
    categories: {
      all: language ? 'Todos' : 'All',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: language ? 'Herramientas' : 'Tools',
      fundamentals: language ? 'Fundamentos' : 'Fundamentals',
      languages: language ? 'Lenguajes' : 'Languages',
      other: language ? 'Otros' : 'Other'
    }
  };

  console.log(certifications.length)

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
        {sortedCertifications.map(cert => (
          <a
            key={cert.id}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
          >
            <h3>{cert.title}</h3>
            <p>{cert.institution}</p>
            <p className="date">{cert.date}</p>
            <p>{cert.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}; 