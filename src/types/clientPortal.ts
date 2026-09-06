export interface Tour360Folder {
  id: string;
  date: string;
  title: string;
  phaseName: string;
  progress: number;
  embedCode: string;
  folderUrl?: string;
  notes?: string;
  thumbnail?: string;
}

export type PhaseStatus = 'completed' | 'in_progress' | 'scheduled';

export interface ConstructionPhase {
  id: string;
  order: number;
  title: string;
  progress: number;
  status: PhaseStatus;
  targetDates: string;
  supervisionNotes: string;
  inspectedBy: string;
  completionDate?: string;
}

export type PhotoCategory = 'Estructura' | 'Acabados' | 'Instalaciones' | 'Fachada' | 'Interiores' | 'Alberca';

export interface PhotoReport {
  id: string;
  period: string;
  category: PhotoCategory;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  technicalNote: string;
  isReframed360?: boolean;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  zone: string;
  beforeDate: string;
  afterDate: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface ProjectDirector {
  name: string;
  role: string;
  credentials: string;
  phone: string;
  email: string;
  whatsapp: string;
  photo?: string;
}

export interface ClientProject {
  id: string;
  propertyName: string;
  accessCode: string;
  clientName: string;
  location: string;
  typology: string;
  totalArea: string;
  startDate: string;
  estimatedDelivery: string;
  globalProgress: number;
  currentPhaseName: string;
  heroImage: string;
  director: ProjectDirector;
  cloudpanoTours: Tour360Folder[];
  phases: ConstructionPhase[];
  photoReports: PhotoReport[];
  beforeAfterComparisons: BeforeAfterItem[];
}

