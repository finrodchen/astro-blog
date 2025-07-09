/**
 * 內容集合型別定義
 */

// 支援的內容集合類型
export type ContentCollection = 'blog' | 'coding' | 'biotechnology' | 'celltherapy';

// 文章資料介面
export interface PostData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
}

// 文章項目介面
export interface PostItem {
  id: string;
  slug: string;
  body: string;
  collection: ContentCollection;
  data: PostData;
}

// 分類頁面配置
export interface CategoryConfig {
  title: string;
  description: string;
  heroImage?: string;
  color?: string;
  icon?: string;
}

// 分類配置映射
export const CATEGORY_CONFIGS: Record<ContentCollection, CategoryConfig> = {
  blog: {
    title: '部落格',
    description: '分享技術心得與生活感悟',
    color: '#3B82F6',
    icon: '📝'
  },
  coding: {
    title: '程式開發',
    description: '程式設計技術與開發經驗分享',
    color: '#10B981',
    icon: '💻'
  },
  biotechnology: {
    title: '生物技術',
    description: '生物科技領域的最新發展與研究',
    color: '#8B5CF6',
    icon: '🧬'
  },
  celltherapy: {
    title: '細胞治療',
    description: '細胞治療技術與臨床應用',
    color: '#F59E0B',
    icon: '🔬'
  }
};

// 文章排序選項
export type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

// 文章篩選選項
export interface FilterOptions {
  tags?: string[];
  author?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchQuery?: string;
}

// 分頁選項
export interface PaginationOptions {
  page: number;
  pageSize: number;
  total: number;
}

// 文章列表回應
export interface PostListResponse {
  posts: PostItem[];
  pagination: PaginationOptions;
  filters: FilterOptions;
}