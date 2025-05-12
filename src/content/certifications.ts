export interface Certification {
  id: string;
  title: string;
  institution: string;
  category: 'frontend' | 'backend' | 'tools' | 'fundamentals';
  status: 'completed';
  startDate: string;
  endDate: string;
  description: string;
  url: string;
}

export const certifications: Certification[] = []; 