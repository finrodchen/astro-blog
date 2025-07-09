// 樣式常數定義

/**
 * 顏色主題
 */
export const COLORS = {
  // 主要顏色
  primary: '#3498db',
  primaryDark: '#2980b9',
  secondary: '#e74c3c',
  secondaryDark: '#c0392b',
  
  // 文字顏色
  textPrimary: '#2c3e50',
  textSecondary: '#34495e',
  textMuted: '#7f8c8d',
  textLight: '#95a5a6',
  
  // 背景顏色
  backgroundLight: '#f8f9fa',
  backgroundBorder: '#ecf0f1',
  backgroundDivider: '#eee',
  
  // 狀態顏色
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db'
} as const;

/**
 * 間距設定
 */
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem'
} as const;

/**
 * 字體大小
 */
export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem'
} as const;

/**
 * 字體權重
 */
export const FONT_WEIGHTS = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700'
} as const;

/**
 * 邊框半徑
 */
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px'
} as const;

/**
 * 陰影效果
 */
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
} as const;

/**
 * 斷點設定
 */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

/**
 * 動畫時間
 */
export const TRANSITIONS = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms'
} as const;

/**
 * Z-index 層級
 */
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060
} as const;