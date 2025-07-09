import type {
  ResumeData,
  Skill,
  Experience,
  Education,
  Project,
  Recognition,
  ExternalLink
} from '../types/resume';
import { isValidDateString } from './dateUtils';

/**
 * 驗證履歷資料的完整性
 */
export class ResumeValidator {
  private errors: string[] = [];

  /**
   * 驗證主要履歷資料
   */
  validateResumeData(data: ResumeData): boolean {
    this.errors = [];

    // 驗證必要欄位
    if (!data.header.name.trim()) {
      this.errors.push('姓名不能為空');
    }

    if (!data.header.current_title.trim()) {
      this.errors.push('職位不能為空');
    }

    if (!data.contact.email || !this.isValidEmail(data.contact.email)) {
      this.errors.push('請提供有效的電子郵件地址');
    }

    // 驗證照片路徑
    if (data.header.photo && !this.isValidImagePath(data.header.photo)) {
      this.errors.push('照片路徑格式不正確');
    }

    return this.errors.length === 0;
  }

  /**
   * 驗證工作經驗資料
   */
  validateExperience(experiences: Experience[]): boolean {
    const experienceErrors: string[] = [];

    experiences.forEach((exp, index) => {
      if (!exp.company.trim()) {
        experienceErrors.push(`工作經驗 ${index + 1}: 公司名稱不能為空`);
      }

      exp.positions.forEach((pos, posIndex) => {
        if (!pos.title.trim()) {
          experienceErrors.push(`工作經驗 ${index + 1}, 職位 ${posIndex + 1}: 職位名稱不能為空`);
        }

        if (!isValidDateString(pos.startdate)) {
          experienceErrors.push(`工作經驗 ${index + 1}, 職位 ${posIndex + 1}: 開始日期格式不正確`);
        }

        if (pos.enddate && !isValidDateString(pos.enddate)) {
          experienceErrors.push(`工作經驗 ${index + 1}, 職位 ${posIndex + 1}: 結束日期格式不正確`);
        }

        // 驗證日期邏輯
        if (pos.enddate && pos.startdate >= pos.enddate) {
          experienceErrors.push(`工作經驗 ${index + 1}, 職位 ${posIndex + 1}: 開始日期不能晚於結束日期`);
        }
      });
    });

    this.errors.push(...experienceErrors);
    return experienceErrors.length === 0;
  }

  /**
   * 驗證技能資料
   */
  validateSkills(skills: Skill[]): boolean {
    const skillErrors: string[] = [];

    skills.forEach((skill, index) => {
      if (!skill.skill.trim()) {
        skillErrors.push(`技能 ${index + 1}: 技能名稱不能為空`);
      }
    });

    this.errors.push(...skillErrors);
    return skillErrors.length === 0;
  }

  /**
   * 驗證外部連結
   */
  validateLinks(links: ExternalLink[]): boolean {
    const linkErrors: string[] = [];

    links.forEach((link, index) => {
      if (!link.name.trim()) {
        linkErrors.push(`連結 ${index + 1}: 連結名稱不能為空`);
      }

      if (!this.isValidUrl(link.url)) {
        linkErrors.push(`連結 ${index + 1}: URL 格式不正確`);
      }
    });

    this.errors.push(...linkErrors);
    return linkErrors.length === 0;
  }

  /**
   * 獲取所有驗證錯誤
   */
  getErrors(): string[] {
    return [...this.errors];
  }

  /**
   * 清除錯誤記錄
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * 驗證電子郵件格式
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * 驗證 URL 格式
   */
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 驗證圖片路徑格式
   */
  private isValidImagePath(path: string): boolean {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
    return imageExtensions.some(ext => path.toLowerCase().endsWith(ext));
  }
}

/**
 * 建立驗證器實例的工廠函數
 */
export const createResumeValidator = (): ResumeValidator => {
  return new ResumeValidator();
};