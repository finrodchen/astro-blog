import type {
  ResumeData,
  Skill,
  Experience,
  Education,
  Project,
  Interests,
  ExternalLink,
  Recognition
} from '../types/resume';

export const resumeData: ResumeData = {
  header: {
    name: "陳思蒝",
    suffix: "Finrod Chen",
    current_title: "研究發展部主任",
    intro: "自大同大學生物工程研究所畢業後踏入職場，加入喜躍生醫股份有限公司至今。由製程工程師升級為生產部技術主管，並參與過多次臨床試驗查核、特管辦法計畫申請及恩慈療法執行，熟悉細胞治療相關法規及實際執行經驗。",
    display_contact_info: true,
    photo: "/img/profile/profile.jpg"
  },
  contact: {
    email: "me@finrod.xyz",
    phone: "",
    address: "新北市永和區"
  },
  social: {
    GitHub: "https://github.com/finrodchen",
    LinkedIn: "https://linkedin.com/in/finrodchen",
    Website: "https://astro.finrod.xyz"
  },
  sections: {
    skills: true,
    experience: true,
    recognition: true,
    education: true,
    projects: true,
    interests: true,
    social_links: true
  }
};

export const skills: Skill[] = [
  {
    skill: "基礎生化實驗",
    description: "5年以上經驗於中草藥研究領域，包含活性成份分離純化、成份定性定量、化合物結構分析以及生化活性分析(in vitro/ in vivo)"
  },
  {
    skill: "細胞生化實驗",
    description: "10年以上經驗於人類細胞組織領域，專注於成體幹細胞製程開發最佳化，應用於疾病治療新要開發"
  },
  {
    skill: "專案計畫管理",
    description: "專案提案、執行及管理，統籌規劃專案資源及內部控制流程"
  },
  {
    skill: "工具及技術",
    list: ["Digiwin iGP Workflow", "AWS Services", "Docker", "Fiddler", "Git", "Google Workspace", "Microsoft Office", "PaloAlto Firewall", "Postman", "PowerShell", "SQL Server", "SVN", "VS Code", "Web Frontend/Backend"]
  },
  {
    skill: "語言",
    list: ["中文 - Native", "台語 - Native", "英文 - Advanced", "日文 - Beginner"]
  }
];

export const experience: Experience[] = [
  {
    company: "喜躍生醫",
    url: "https://xiyuebiomed.com/",
    logo: "/img/companylogos/xiyue.png",
    summary: "",
    positions: [
      {
        title: "研發主任",
        startdate: "2022-05-23",
        enddate: null,
        summary: "研究發展部主任，負責協調各研發專案資源分配，專案報告審查；另負責於「特定醫療儀器及醫療技術技術管理辦法」規範之細胞治療計畫案件完整流程",
        projects: []
      },
      {
        title: "資訊管理人",
        startdate: "2020-01-01",
        enddate: "2022-05-22",
        summary: "行政管理處資訊管理人，負責公司內部資訊資安議題，管理進銷存系統、內部網路系統及企業內部服務",
        projects: []
      }
    ]
  },
  {
    company: "光麗生醫",
    url: "https://guangli.com.tw/",
    logo: "/img/companylogos/guangli.png",
    summary: "成立於2009年，為細胞治療產業元祖級公司，也是第一間儲存「成人幹細胞」的公司，於2023年初因IPO需求更名為喜躍生醫",
    positions: [
      {
        title: "生產主任",
        startdate: "2018-02-01",
        enddate: "2022-01-31",
        summary: "生產製造部主任，負責協調生產排程，簽署細胞產品製程報告；另負責或參與於「特定醫療儀器及醫療技術技術管理辦法」規範之細胞治療計畫案件完整流程",
        projects: [
          "參與免疫殺手細胞製程開發",
          "主導膝關節脂肪取得並建立脂肪間質幹細胞庫技術開發之人體研究",
          "主導抽脂後廢棄脂肪建立脂肪間質幹細胞庫技術開發之人體研究",
          "特定醫療儀器及醫療技術技術管理辦法：免疫殺手細胞治療第四期實體癌專案管理",
          "特定醫療儀器及醫療技術技術管理辦法：脂肪間質幹細胞治療退化性關節炎專案管理"
        ]
      },
      {
        title: "副研究員",
        startdate: "2014-02-01",
        enddate: "2018-01-31",
        summary: "研究發展部研究員，負責收集彙整尖端技術資訊及臨床研究成果、填寫與檢核細胞產品製程報告、執行每日檢查並參與內部能力試驗",
        projects: [
          "參與脂肪間質幹細胞治療漸凍症臨床研究申請",
          "參與脂肪間質幹細胞治療漸凍症恩慈治療申請"
        ]
      },
      {
        title: "製程工程師",
        startdate: "2012-02-01",
        enddate: "2014-01-31",
        summary: "生產製造部製程工程師，主要負責脂肪間質幹細胞及臍帶間質幹細胞組織分離與幹細胞培養",
        projects: [
          "參與脂肪間質幹細胞治療二型糖尿病臨床研究申請",
          "參與製程ISO文件系統建置專案"
        ]
      }
    ]
  }
];

export const education: Education[] = [
  {
    uni: "大同大學",
    degree: "生物工程研究所",
    year: "2009年09月 — 2011年06月",
    summary: "主要研究方向為中草藥萃取物化學活性及細胞活性分析，並期望能找出特定的活性成分，進一步純化作為保養品或保健食品之原料",
    awards: [
      { award: "2012年產學合作計畫：小金櫻不同部位萃取物之美白功效" },
      { award: "2013年產學合作計畫：小金櫻抗過敏活性之研究" }
    ]
  }
];

export const projects: Project[] = [
  {
    project: "鼎新 iGP Workflow進銷存系統導入",
    role: "專案經理",
    duration: "2020年06月 — 2021年01月",
    description: "目前全系統穩定運作中\n1. 同時導入iGP Workflow進銷存系統、EasyFlow電子簽核系統及Shop Flow Tracking生產管制系統\n2. 導入時間共4個月，於2020年11月準時上線\n3. 上線後回顧KPI皆達到預期目標，順利結案"
  },
  {
    project: "特管辦法細胞治療計畫申請",
    role: "專案經理、計畫書撰寫",
    duration: "2018年02月 — 至今",
    description: "目前已通過14個計畫案申請(2024年01月)\n1. 撰寫計畫書及產品製造文件，彙整後送審\n2. 公部門/醫療機構聯繫窗口，溝通協調計畫書內容，因應審查意見修正計畫內容\n3. 控制計畫書版本，建立知識管理系統"
  },
  {
    project: "特管辦法細胞治療計畫執行",
    role: "專案經理、品質計畫負責人代理人",
    duration: "2019年02月 — 至今",
    description: "目前8個案件營運中，服務超過170位病患，放行細胞產品超過600劑次(2024年01月)\n1. 審核產品報告，確認記錄完整正確，相關技術性標準作業程序之制定及審查、協助內部PD/CA流程執行\n2. 醫療機構聯繫窗口，安排治療排程，控管計畫成本及治療成效與不良事件追蹤\n3. 收集病患治療資料，彙整年度報告，統計產品品質數據及醫療數據"
  }
];

export const interests: Interests = {
  description: "嘗試各種新世代科技，空閒時自學各項IT/Maker技能，包含自行架設blog、部署雲端服務、3D列印、Arduino開發等..."
};

export const links: ExternalLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/finrodchen",
    label: "finrodchen"
  },
  {
    name: "Blog",
    url: "https://blog.finrod.xyz",
    label: "finrodchen"
  },
  {
    name: "GitHub",
    url: "https://github.com/finrodchen",
    label: "finrodchen"
  },
  {
    name: "Microsoft Learn",
    url: "https://learn.microsoft.com/zh-tw/users/finrodchen-7401/transcript/d5e8nbrp1zkr81q",
    label: "finrodchen"
  }
];

export const recognitions: Recognition[] = [
  {
    award: "乙種職業安全衛生業務主管",
    organization: "社團法人工業安全衛生協會",
    year: "2023/01/17合格"
  }
];