// 履歷相關的 TypeScript 型別定義

// 日期型別定義
export type DateString = string; // 格式: YYYY-MM-DD
export type FormattedDate = string; // 格式化後的日期字串

// 基本聯絡資訊介面
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

// 社群連結介面
export interface SocialLinks {
  GitHub?: string;
  LinkedIn?: string;
  Website?: string;
  [key: string]: string | undefined;
}

// 履歷標題區域介面
export interface ResumeHeader {
  name: string;
  suffix?: string;
  current_title: string;
  intro: string;
  display_contact_info: boolean;
  photo?: string;
}

// 區段顯示設定介面
export interface SectionSettings {
  skills: boolean;
  experience: boolean;
  recognition: boolean;
  education: boolean;
  projects: boolean;
  interests: boolean;
  social_links: boolean;
}

// 主要履歷資料介面
export interface ResumeData {
  header: ResumeHeader;
  contact: ContactInfo;
  social: SocialLinks;
  sections: SectionSettings;
}

// 技能項目介面
export interface Skill {
  skill: string;
  description?: string;
  list?: string[];
}

// 職位資訊介面
export interface Position {
  title: string;
  startdate: DateString;
  enddate: DateString | null;
  summary: string;
  projects?: string[];
}

// 工作經驗介面
export interface Experience {
  company: string;
  url?: string;
  logo?: string;
  summary?: string;
  positions: Position[];
}

// 獎項介面
export interface Award {
  award: string;
}

// 教育背景介面
export interface Education {
  uni: string;
  degree: string;
  year: string;
  summary: string;
  award?: string;
  awards?: Award[];
}

// 專案介面
export interface Project {
  project: string;
  role: string;
  duration: string;
  description: string;
  url?: string;
}

// 興趣介面
export interface Interests {
  description: string;
}

// 外部連結介面
export interface ExternalLink {
  name: string;
  url: string;
  label: string;
}

// 認證資格介面
export interface Recognition {
  award: string;
  organization: string;
  year: string;
}

// 完整履歷資料集合介面
export interface FullResumeData {
  resumeData: ResumeData;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  interests: Interests;
  links: ExternalLink[];
  recognitions: Recognition[];
}

// 日期相關的工具函數型別
export type DateFormatter = (dateString: DateString) => FormattedDate;
export type DurationCalculator = (startDate: DateString, endDate: DateString | null) => string;