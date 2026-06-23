export interface TeamMember {
  id: string;
  name: string;
  role: 'Senior Partner' | 'Partner' | 'Associate Partner' | 'Senior Associate' | 'Of Counsel';
  education: string[];
  bars: string[];
  expertise: string[];
  biography: string;
  avatarUrl: string;
  email: string;
  linkedin?: string;
  keyPublications?: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  brief: string;
  description: string;
  focusAreas: string[];
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  category: 'Regulatory Update' | 'Corporate Advisory' | 'Litigation Insight' | 'Treaty & Tax';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface DPDPConsentState {
  hasAcceptedDisclaimer: boolean;
  hasAcceptedDPDP: boolean;
  consentTimestamp: string | null;
  activeDataSubjectId?: string;
}

export interface SupportInquiry {
  id: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  organization: string;
  regulatorySector: string;
  detailedRequest: string;
  submittedAt: string;
  consentHash: string;
}
