import type { DateString, DateFormatter, DurationCalculator } from '../types/resume';

/**
 * 格式化日期為本地化字串
 * @param dateString - ISO 日期字串 (YYYY-MM-DD)
 * @returns 格式化後的日期字串
 */
export const formatDate: DateFormatter = (dateString: DateString): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-TW', { year: 'numeric', month: 'short' });
};

/**
 * 計算兩個日期之間的工作時間差
 * @param startDate - 開始日期
 * @param endDate - 結束日期，null 表示至今
 * @returns 格式化的時間差字串
 */
export const calculateJobDuration: DurationCalculator = (
  startDate: DateString, 
  endDate: DateString | null
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const daysDiff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  const years = Math.floor(daysDiff / 365.25);
  const months = Math.ceil((daysDiff % 365.25) / 30.4375);
  
  let result = '';
  if (years >= 1) result += `${years} 年 `;
  if (months >= 1) result += `${months} 個月`;
  
  return result.trim() || '不到一個月';
};

/**
 * 驗證日期字串格式是否正確
 * @param dateString - 要驗證的日期字串
 * @returns 是否為有效的日期格式
 */
export const isValidDateString = (dateString: string): dateString is DateString => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

/**
 * 獲取當前日期的 ISO 字串
 * @returns 當前日期的 YYYY-MM-DD 格式字串
 */
export const getCurrentDateString = (): DateString => {
  return new Date().toISOString().split('T')[0] as DateString;
};