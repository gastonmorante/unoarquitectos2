export interface Scene360Item {
  id: string;
  title: string;
  equirectangularUrl: string;
  thumbnailUrl?: string;
  roomName?: string;
}

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
  scenes?: Scene360Item[];
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

export interface ProgressMilestone {
  id: string;
  dateStr: string; // e.g. "2026-09-05"
  displayDate: string; // e.g. "05 Septiembre 2026"
  month: 'Agosto' | 'Septiembre' | 'Octubre' | 'Noviembre' | 'Diciembre';
  monthIndex: number; // 0 for Agosto, 1 for Septiembre, 2 for Octubre, 3 for Noviembre, 4 for Diciembre
  day: number; // e.g. 5
  progress: number; // e.g. 68
  phaseName: string;
  title: string;
  summary: string;
  supervisionNotes: string;
  tourId?: string;
  isLatest?: boolean;
  isProjected?: boolean;
}

export interface BitacoraPhoto {
  id: string;
  url: string;
  thumbUrl?: string;
  originalName?: string;
  driveUrl?: string;
  driveThumbnailUrl?: string;
  fileId?: string;
  caption?: string;
  date?: string;
  order?: number;
}

export interface LogbookTourInfo {
  id: string;
  date: string;
  progress: number;
  title: string;
  notes: string;
  scenes360Count: number;
  encuadradasCount?: number;
  folderUrl?: string;
  isLatest?: boolean;
}

export interface DigitalLogbookEntry {
  id: string;
  entryNumber: string; // e.g. "Folio #08"
  date: string; // e.g. "05 Septiembre 2026"
  month: string; // e.g. "Septiembre 2026"
  phaseTitle: string;
  progress: number;
  status: 'completed' | 'in_progress' | 'projected';
  executiveSummary: string;
  technicalDictum: string;
  labTestsAndQuality: string[];
  keyMilestones: string[];
  personnelOnSite: string;
  inspectedBy: string;
  driveFolderUrl?: string;
  photographicLogUrl?: string;
  pdfFileName?: string;
  pdfDriveUrl?: string;
  scenes360Count?: number;
  photosCount?: number;
  photos?: BitacoraPhoto[];
  tourInfo?: LogbookTourInfo;
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
  milestones?: ProgressMilestone[];
  bitacoraFotograficaUrl?: string;
  bitacoraDigitalUrl?: string;
  masterDriveFolderUrl?: string;
  digitalLogbook?: DigitalLogbookEntry[];
}

