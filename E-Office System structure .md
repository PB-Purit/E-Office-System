# E-Office System

React 18 + TypeScript + Tailwind CSS + Vite

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```


## Features
- Full CRUD (Create, Read, Update, Delete)
- Search & filter
- Status toggle
- Pagination
- Form validation
- Toast notifications
- Responsive design



📰 E-Office System

ระบบจัดการข่าวประชาสัมพันธ์สำหรับกรมการขนส่งทางราง
พัฒนาด้วย React 18 + TypeScript + Tailwind CSS + Vite
รองรับ Full CRUD · Real-time Search · Status Toggle ·

🧭 Table of Contents

Project Overview
Technology Stack
Project Structure
File Description
Installation
Available Scripts
Features
Component Architecture
Data Flow
API Reference
Environment Variables
Deployment to Vercel
Folder Conventions
TypeScript Types
Changelog


🗂 Project Overview
EDNewsManager เป็น Web Application สำหรับจัดการข่าวประชาสัมพันธ์ภายในองค์กร
ออกแบบมาเพื่อใช้งานใน e-Office System ของกรมการขนส่งทางราง
รองรับการสร้าง อ่าน แก้ไข และลบข่าว (CRUD) พร้อม Role-based Button Permissions
ItemDetailProject NameEDNewsManagerVersion1.0.0 Organizationกรมการขนส่งทางราง (Department of Rail Transport)Systemระบบบริหารสำนักงานอัตโนมัติ (e-Office)LanguageThai 

⚙️ Technology Stack
🖥 Frontend Core
TechnologyVersionPurposeReact18.3.1UI Component Library — Virtual DOM, HooksTypeScript5.6.2Static Type Checking — ป้องกัน Runtime ErrorsVite5.4.10Build Tool & Dev Server — Fast HMRTailwind CSS3.4.14Utility-First CSS Framework — Responsive Design

🔧 Supporting Tools
ToolVersionPurposePostCSS8.4.47CSS Processor — ประมวลผล Tailwind directivesAutoprefixer10.4.20CSS Vendor Prefix — Cross-browser compatibilityESLint—Code Linting — ตรวจสอบ Code Quality

📦 Runtime Dependencies
react                 ^18.3.1    Core React library
react-dom             ^18.3.1    React DOM renderer
🛠 Dev Dependencies
@types/react          ^18.3.1    TypeScript types for React
@types/react-dom      ^18.3.1    TypeScript types for React DOM
@vitejs/plugin-react  ^4.3.1     Vite plugin — Fast Refresh support
autoprefixer          ^10.4.20   PostCSS autoprefixer
postcss               ^8.4.47    CSS transformation tool
tailwindcss           ^3.4.14    Utility CSS framework
typescript            ^5.6.2     TypeScript compiler
vite                  ^5.4.10    Next-gen frontend build tool

🌐 Deployment Platform
PlatformToolPurposeVercelVercel CLI / GitHub IntegrationHosting + CI/CDNode.js≥ 18.xRuntime for build processnpm≥ 9.xPackage Manager

📁 Project Structure
E-Office System
│
├── 📄 index.html                        # Entry HTML — mount point #root
├── 📄 package.json                      # Dependencies & npm scripts
├── 📄 vite.config.ts                    # Vite configuration
├── 📄 tailwind.config.ts                # Tailwind CSS configuration
├── 📄 tsconfig.json                     # TypeScript compiler options
├── 📄 postcss.config.js                 # PostCSS configuration
├── 📄 vercel.json                       # Vercel deployment config (SPA routing)
├── 📄 .env.example                      # Environment variable template
├── 📄 .gitignore                        # Git ignore rules
├── 📄 README.md                         # Project documentation (this file)
│
└── 📂 src/
    │
    ├── 📄 main.tsx                      # React entry — ReactDOM.createRoot()
    ├── 📄 App.tsx                       # Root component — layout + modal + toast
    ├── 📄 index.css                     # Global styles + Tailwind directives + animations
    │
    ├── 📂 types/
    │   └── 📄 news.ts                   # TypeScript interfaces & type aliases
    │
    ├── 📂 constants/
    │   └── 📄 mockData.ts               # Seed data + empty form default values
    │
    ├── 📂 services/
    │   └── 📄 newsService.ts            # API layer — async CRUD functions (mock → real)
    │
    ├── 📂 hooks/
    │   └── 📄 useNews.ts                # Custom hook — state management + CRUD handlers
    │
    └── 📂 components/
        │
        ├── 📄 NewsTable.tsx             # Data table with shimmer loading + action buttons
        ├── 📄 SummaryCards.tsx          # Stats cards — total / active / inactive / search
        │
        ├── 📂 ui/
        │   ├── 📄 Icons.tsx             # SVG icon components (Eye, Edit, Trash, Plus, Close, Warn)
        │   ├── 📄 StatusToggle.tsx      # Toggle switch component — Status 0/1
        │   ├── 📄 Toast.tsx             # Notification snackbar — success / error / info
        │   └── 📄 Pagination.tsx        # Page navigation — first / prev / next / last
        │
        └── 📂 modals/
            ├── 📄 NewsFormModal.tsx     # Form modal — Create / Edit / View modes
            └── 📄 ConfirmModal.tsx      # Delete confirmation modal with warning icon

📄 File Description
Root Config Files
FileDescriptionindex.htmlHTML shell file — Vite injects script tag อัตโนมัติ, มี <div id="root"> เป็น mount pointpackage.jsonกำหนด dependencies, devDependencies และ npm scripts (dev, build, preview)vite.config.tsVite setup — ใช้ @vitejs/plugin-react สำหรับ Fast Refresh และ JSX transformtailwind.config.tsกำหนด content paths สำหรับ Tailwind purge — scan .ts และ .tsx ทุกไฟล์ใน src/tsconfig.jsonTypeScript compiler — target ES2020, strict mode on, jsx: react-jsx, moduleResolution: bundlerpostcss.config.jsประมวลผล CSS — รัน tailwindcss และ autoprefixervercel.jsonSPA routing rewrite — redirect ทุก path กลับ /index.html เพื่อรองรับ client-side routing
Source Files
FileLinesDescriptionsrc/main.tsx~10Entry point — สร้าง React root และ render <App/> ใน StrictModesrc/App.tsx~80Root component — จัดการ layout, เรียก useNews hook, render modals และ toastsrc/index.css~25Tailwind base/components/utilities + custom animations (fadeUp, shimmer)
Types
FileExportsDescriptionsrc/types/news.tsNewsItem, ModalMode, ModalState, ToastState, NewsFormDataTypeScript interface ทั้งหมดของโปรเจค
Constants
FileExportsDescriptionsrc/constants/mockData.tsMOCK_NEWS, EMPTY_FORMข้อมูล seed 4 รายการ + ค่าเริ่มต้น form สำหรับ Create
Services
FileFunctionsDescriptionsrc/services/newsService.tsgetAll, create, update, toggleStatus, removeAPI layer — ใช้ async/await, simulate 800ms delay, swap เป็น real API ได้
Hooks
FileReturnsDescriptionsrc/hooks/useNews.tsstate + handlersCustom hook รวม state ทั้งหมด — news, modal, confirm, toast, search, page
Components
ComponentPropsDescriptionNewsTabledata, loading, page, perPage, total, search, callbacksตาราง data หลัก — shimmer skeleton, row actions, paginationSummaryCardsnews, filteredCount4 stat cards แสดง total / active / inactive / search countui/Icons—SVG icon components ทั้งหมด — ไม่มี external icon dependencyui/StatusTogglestatus, onChange, disabledToggle switch — เปลี่ยน Status 0↔1 พร้อม animationui/Toastmsg, type, onDoneAuto-dismiss notification — success=green, error=red, info=blueui/Paginationpage, total, perPage, onChangeNavigation — แสดง first/prev/pages/next/lastmodals/NewsFormModalmode, item, onClose, onSaveForm modal 3 mode — Create (green) / Edit (amber) / View (blue, read-only)modals/ConfirmModalitem, onConfirm, onCancelDelete confirmation — แสดงชื่อข่าวพร้อม warning icon

🚀 Installation
Prerequisites
bashnode --version    # >= 18.x required
npm --version     # >= 9.x required
Step 1 — Extract & Enter Project
bashunzip ed-news-manager.zip
cd ed-news-manager
Step 2 — Install Dependencies
bashnpm install
Step 3 — Run Development Server
bashnpm run dev
เปิดเบราว์เซอร์ที่ http://localhost:5173

📜 Available Scripts
ScriptCommandDescriptionDevelopmentnpm run devStart Vite dev server with HMR at port 5173Buildnpm run buildTypeScript compile + Vite production build → /distPreviewnpm run previewPreview production build locally at port 4173

✨ Features
CRUD Operations
OperationUI TriggerService FunctionToastCreateปุ่ม "สร้างข่าว" (เขียว)newsService.create()✅ successReadปุ่มตา 👁 (น้ำเงิน)newsService.getAll()—Updateปุ่มดินสอ ✏️ (เหลือง)newsService.update()ℹ infoDeleteปุ่มถัง 🗑 (แดง)newsService.remove()❌ errorToggle Statusสวิตช์ใน table / modalnewsService.toggleStatus()✅ success
Other Features

🔍 Real-time Search — กรองตามชื่อข่าวและเนื้อหาทันทีขณะพิมพ์
📄 Pagination — แสดง 6 รายการต่อหน้า พร้อม first/last/prev/next
✅ Form Validation — ตรวจสอบ required fields ก่อน submit
🎨 Role-based Buttons — ButtonView / ButtonEdit / ButtonDelete ควบคุมการแสดงปุ่ม
💀 Shimmer Loading — skeleton animation ระหว่าง fetch data
📱 Responsive Design — รองรับ mobile, tablet, desktop
🎭 3 Modal Modes — Create / Edit / View ใน component เดียว
🔔 Toast Notifications — auto-dismiss 2.5 วินาที แยกสี 3 ประเภท


🏗 Component Architecture
App.tsx
├── <header>                          Layout — sticky top bar
├── <main>
│   ├── Search Input + Create Button  UI controls
│   ├── <SummaryCards/>               Stats — total, active, inactive, filtered
│   └── <NewsTable/>                  Main data table
│       ├── <StatusToggle/>           Inline status toggle per row
│       ├── <EyeIcon/> <EditIcon/>    Action buttons
│       ├── <TrashIcon/>              Delete button
│       └── <Pagination/>             Page navigation
├── <NewsFormModal/>                  Conditional — Create / Edit / View
│   └── <StatusToggle/>               Status toggle inside modal
├── <ConfirmModal/>                   Conditional — Delete confirmation
└── <Toast/>                          Conditional — auto-dismiss notification

🔄 Data Flow
User Action
    │
    ▼
App.tsx (useNews hook)
    │
    ├── setModal()      → NewsFormModal renders
    ├── setConfirm()    → ConfirmModal renders
    └── handler called
          │
          ▼
    newsService.ts      (async API call / mock)
          │
          ▼
    setNews()           (update React state)
          │
          ▼
    Component re-renders with new data
          │
          ▼
    showToast()         (Toast notification)

🌐 API Reference
FunctionMethodEndpoint (real)DescriptiongetAll()GET/ED-GetNews?EmployeeId=3ดึงรายการข่าวทั้งหมดcreate()POST/ED-CreateNewsสร้างข่าวใหม่update()PUT/ED-UpdateNews/:idแก้ไขข่าวtoggleStatus()POST/ED-UpdateStatusNewsเปลี่ยนสถานะข่าวremove()DELETE/ED-DeleteNews/:idลบข่าว
NewsItem Response Schema
json{
  "NewsId": 4,
  "NameNews": "แจ้งประชุมระบบ E-office",
  "Detail": "รายละเอียดข่าว...",
  "Status": 1,
  "UpdatedDate": "2021-12-12T09:00:00",
  "ButtonView": 1,
  "ButtonEdit": 1,
  "ButtonDelete": 1
}
FieldTypeValuesDescriptionNewsIdnumberautoPrimary keyNameNewsstring—ชื่อข่าว (required)Detailstring—เนื้อหาข่าว (required)Status0 | 10=ปิด, 1=เปิดสถานะการแสดงผลUpdatedDatestringISO 8601วันที่อัพเดทล่าสุดButtonView0 | 10=ซ่อน, 1=แสดงสิทธิ์ดูรายละเอียดButtonEdit0 | 10=ซ่อน, 1=แสดงสิทธิ์แก้ไขButtonDelete0 | 10=ซ่อน, 1=แสดงสิทธิ์ลบ

🔐 Environment Variables
bash# .env.local  (สร้างไฟล์นี้เอง — ห้าม commit)
VITE_API_BASE_URL=https://your-api-domain.com/api

ตัวแปร environment ใน Vite ต้องขึ้นต้นด้วย VITE_ เท่านั้น
ใช้ใน code ผ่าน import.meta.env.VITE_API_BASE_URL



📐 Folder Conventions
PatternConventionExampleComponentsPascalCaseNewsTable.tsx, StatusToggle.tsxHookscamelCase + use prefixuseNews.tsServicescamelCase + Service suffixnewsService.tsTypescamelCase file, PascalCase typenews.ts → NewsItemConstantscamelCase file, UPPER_SNAKE constmockData.ts → MOCK_NEWSCSS classesTailwind utility onlybg-blue-600 rounded-lg px-4

🔷 TypeScript Types
ts// src/types/news.ts

interface NewsItem {
  NewsId: number
  NameNews: string
  Detail: string
  Status: 0 | 1
  UpdatedDate: string
  ButtonView: 0 | 1
  ButtonEdit: 0 | 1
  ButtonDelete: 0 | 1
}

type ModalMode = 'create' | 'edit' | 'view'

interface ModalState {
  mode: ModalMode
  item: NewsItem | null
}

interface ToastState {
  msg: string
  type: 'success' | 'error' | 'info'
}

type NewsFormData = Pick<
  NewsItem,
  'NameNews' | 'Detail' | 'Status' | 'ButtonView' | 'ButtonEdit' | 'ButtonDelete'
>

🔌 Switching from Mock to Real API
เปิดไฟล์ src/services/newsService.ts แล้วแทนที่ mock functions:
tsconst BASE = import.meta.env.VITE_API_BASE_URL

export const newsService = {
  async getAll() {
    const res = await fetch(`${BASE}/ED-GetNews?EmployeeId=3`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.json()
  },

  async create(form: NewsFormData) {
    const res = await fetch(`${BASE}/ED-CreateNews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    return res.json()
  },

  async update(id: number, form: NewsFormData) {
    const res = await fetch(`${BASE}/ED-UpdateNews/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    return res.json()
  },

  async toggleStatus(id: number) {
    const res = await fetch(`${BASE}/ED-UpdateStatusNews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ NewsId: id }),
    })
    return res.json()
  },

  async remove(id: number) {
    await fetch(`${BASE}/ED-DeleteNews/${id}`, { method: 'DELETE' })
  },
}

📋 Changelog
v1.0.0 — 2025

✅ Initial release
✅ Full CRUD operations (Create, Read, Update, Delete)
✅ Status toggle with visual feedback
✅ Real-time search / filter
✅ Pagination (6 items per page)
✅ Role-based button permissions (ButtonView / ButtonEdit / ButtonDelete)
✅ Form validation with inline error messages
✅ Toast notification system (success / error / info)
✅ Shimmer skeleton loading animation
✅ Responsive design (mobile → desktop)
✅ 3-mode modal (Create / Edit / View)
✅ Delete confirmation modal


Built By Purit ❤️ E-Office Systems