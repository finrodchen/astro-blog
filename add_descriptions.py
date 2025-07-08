#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re
from pathlib import Path

# 定義需要添加 description 的檔案和對應的描述
files_to_update = {
    # bioindustry 資料夾
    'src/content/bioindustry/2021-05-31-Exosome-101.md': 'Exosome 外泌體的基礎知識介紹，涵蓋其生物學特性、功能機制及在醫療應用上的潛力。',
    'src/content/bioindustry/2021-10-06-CDMO.md': 'CDMO（合約開發製造組織）的介紹，探討其在生物製藥產業中的角色與重要性。',
    'src/content/bioindustry/2021-10-06-locus-cell-company.md': 'Locus Cell 公司的介紹，專注於細胞治療技術的開發與應用。',
    'src/content/bioindustry/2022-09-22-ACTO.md': 'ACTO 相關內容介紹，涵蓋其在生物產業中的應用與發展。',
    'src/content/bioindustry/2022-10-17-top10-cdmo.md': '全球前十大 CDMO 公司的分析與比較，探討其市場地位與競爭優勢。',
    
    # celltherapy 資料夾
    'src/content/celltherapy/2020-09-30-main-character.md': '細胞治療領域的主要角色與參與者分析，探討產業生態系統的構成。',
    'src/content/celltherapy/2021-02-09-regular-20210209.md': '2021年2月9日細胞治療相關法規更新與重要資訊整理。',
    'src/content/celltherapy/2021-03-05-info-platform.md': '細胞治療資訊平台的介紹，提供產業相關資訊與資源整合。',
    'src/content/celltherapy/2021-08-08-cancer-therapy.md': '癌症細胞治療的最新發展與治療方法介紹，探討其臨床應用前景。',
    'src/content/celltherapy/2021-10-08-cancer-immune-therapy.md': '癌症免疫治療的原理與應用，分析免疫細胞治療在癌症治療中的角色。',
    'src/content/celltherapy/2021-12-10-doma-recent.md': 'DOMA 相關的最新發展與資訊更新，涵蓋細胞治療領域的重要進展。',
    'src/content/celltherapy/2022-09-19-cell-therapy-process-management.md': '細胞治療製程管理的重要概念與實務操作，確保產品品質與安全性。',
    'src/content/celltherapy/2023-01-17-ADSC-OA-therapy.md': 'ADSC（脂肪幹細胞）在骨關節炎治療中的應用與臨床研究進展。',
    'src/content/celltherapy/2023-04-17-DOMA-practice.md': 'DOMA 實務操作與應用案例分享，提供實際執行的經驗與建議。',
    'src/content/celltherapy/2023-08-10-regenerative-medicine-legislation.md': '再生醫學相關法規的最新發展與立法趨勢分析。',
    
    # finance 資料夾
    'src/content/finance/2021-10-08-ETF-00878.md': 'ETF 00878 的投資分析與介紹，探討其投資策略與市場表現。',
    'src/content/finance/2021-10-08-neevo-lesson.md': 'Neevo 投資課程的學習心得與重點整理，分享投資理財的實用知識。',
    
    # markdown 資料夾
    'src/content/markdown/2019-10-07-marp-keynote.md': 'Marp 簡報工具的使用教學，介紹如何用 Markdown 語法製作專業簡報。',
    'src/content/markdown/2019-10-08-Markdown-Cheatsheet.md': 'Markdown 語法速查表，提供常用的 Markdown 語法與格式化技巧。',
    'src/content/markdown/2019-10-08-hackmd-keynote.md': 'HackMD 平台的使用指南，介紹協作編輯與簡報功能的操作方法。',
    'src/content/markdown/2022-06-28-github-jekyll-blog.md': 'GitHub Jekyll 部落格的建置教學，從零開始建立個人技術部落格。',
    
    # medical 資料夾
    'src/content/medical/2019-08-30-mers101.md': 'MERS（中東呼吸症候群）的基礎知識介紹，涵蓋病毒特性、傳播方式與防疫措施。',
    'src/content/medical/2019-09-22-new-born-RDS.md': '新生兒呼吸窘迫症候群（RDS）的醫學知識介紹與治療方法。',
    'src/content/medical/2020-06-30-covid-19-breast-feeding.md': 'COVID-19 疫情期間哺乳相關的醫學建議與注意事項。',
    
    # python 資料夾
    'src/content/python/2021-10-08-py1-stock-scrapper.md': 'Python 股票資料爬蟲教學第一篇，介紹如何使用 Python 抓取台股資料。',
    'src/content/python/2021-10-08-py2-stock-plot.md': 'Python 股票資料視覺化教學，學習如何繪製股價圖表與技術分析圖。',
    'src/content/python/2021-10-08-py3-backtesting.md': 'Python 回測系統建置教學，實作投資策略的歷史績效驗證。',
    'src/content/python/2021-10-08-py4-backtesting-optimal.md': 'Python 回測系統優化技巧，提升策略回測的準確性與效率。',
    
    # work 資料夾
    'src/content/work/2018-03-05-A-plus.md': '科技專案補助資源彙整，包括 A+ 企業創新研發計畫與 SBIR 等政府補助方案介紹。',
    'src/content/work/2022-01-01-Job-frame-101.md': '職能框架的基礎概念與應用，協助員工與主管建立明確的能力發展指引。',
    'src/content/work/2023-01-10-SQL-001.md': 'SQL 資料庫練習第一篇，建立學生成績管理資料庫的完整教學。'
}

def add_description_to_file(file_path, description):
    """為指定檔案添加 description 欄位"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 檢查是否已經有 description
        if 'description:' in content:
            print(f"檔案 {file_path} 已經有 description，跳過")
            return
        
        # 使用正則表達式找到 frontmatter 並添加 description
        pattern = r'(---\s*\n)(title:[^\n]+\n)'
        replacement = r'\1\2description: ' + description + '\n'
        
        new_content = re.sub(pattern, replacement, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"已為 {file_path} 添加 description")
        else:
            print(f"無法為 {file_path} 添加 description，可能格式不符")
            
    except Exception as e:
        print(f"處理檔案 {file_path} 時發生錯誤: {e}")

def main():
    base_path = Path('c:/Users/s0226/Documents/astro-blog')
    
    for relative_path, description in files_to_update.items():
        file_path = base_path / relative_path
        if file_path.exists():
            add_description_to_file(file_path, description)
        else:
            print(f"檔案不存在: {file_path}")

if __name__ == '__main__':
    main()
    print("\n所有檔案處理完成！")