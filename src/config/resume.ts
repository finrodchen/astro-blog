import type { SectionSettings } from '../types/resume';

/**
 * 履歷配置選項
 */
export interface ResumeConfig {
  // 顯示設定
  display: {
    showPhoto: boolean;
    showContactInfo: boolean;
    showSocialLinks: boolean;
    maxItemsPerSection: number;
  };
  
  // 格式設定
  formatting: {
    dateFormat: 'short' | 'long' | 'numeric';
    locale: string;
    timeZone: string;
  };
  
  // 主題設定
  theme: {
    colorScheme: 'light' | 'dark' | 'auto';
    fontFamily: string;
    fontSize: 'small' | 'medium' | 'large';
  };
  
  // SEO 設定
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  
  // 功能設定
  features: {
    enablePrint: boolean;
    enableDownload: boolean;
    enableShare: boolean;
    enableDarkMode: boolean;
  };
}

/**
 * 預設履歷配置
 */
export const DEFAULT_RESUME_CONFIG: ResumeConfig = {
  display: {
    showPhoto: true,
    showContactInfo: true,
    showSocialLinks: true,
    maxItemsPerSection: 10
  },
  
  formatting: {
    dateFormat: 'short',
    locale: 'zh-TW',
    timeZone: 'Asia/Taipei'
  },
  
  theme: {
    colorScheme: 'light',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 'medium'
  },
  
  seo: {
    title: '陳思蒝 - 個人履歷',
    description: '研究發展部主任，專精於細胞治療技術與專案管理',
    keywords: [
      '細胞治療',
      '生物工程',
      '專案管理',
      '研發主任',
      '生技產業',
      '特管辦法'
    ]
  },
  
  features: {
    enablePrint: true,
    enableDownload: false,
    enableShare: true,
    enableDarkMode: false
  }
};

/**
 * 區段顯示優先順序
 */
export const SECTION_ORDER: (keyof SectionSettings)[] = [
  'skills',
  'experience',
  'education',
  'projects',
  'recognition',
  'interests',
  'social_links'
];

/**
 * 區段標題對應
 */
export const SECTION_TITLES: Record<keyof SectionSettings, string> = {
  skills: '技能',
  experience: '經歷',
  education: '學歷',
  projects: '專案',
  recognition: '認證',
  interests: '興趣',
  social_links: '社群'
};

/**
 * 技能類別顏色對應
 */
export const SKILL_CATEGORY_COLORS: Record<string, string> = {
  '基礎生化實驗': '#3498db',
  '細胞生化實驗': '#e74c3c',
  '專案計畫管理': '#2ecc71',
  '工具及技術': '#9b59b6',
  '語言': '#f39c12'
};

/**
 * 公司 Logo 預設設定
 */
export const COMPANY_LOGO_CONFIG = {
  defaultSize: {
    width: '150px',
    height: '150px'
  },
  fallbackImage: '/img/companylogos/default.svg',
  supportedFormats: ['.svg', '.png', '.jpg', '.jpeg', '.webp']
};

/**
 * 個人照片設定
 */
export const PROFILE_PHOTO_CONFIG = {
  defaultSize: {
    desktop: {
      width: '120px',
      height: '120px'
    },
    mobile: {
      width: '100px',
      height: '100px'
    }
  },
  borderRadius: '50%',
  borderWidth: '4px',
  borderColor: '#3498db',
  fallbackImage: '/img/profile/default-avatar.svg'
};