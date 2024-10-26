# Chrome Sidebar Calendar & Notes / Chrome 侧边栏日历与笔记

A Chrome extension that adds a sleek sidebar panel with a calendar and daily notes functionality. / 一个 Chrome 扩展程序，添加了一个时尚的侧边栏面板，具有日历和每日笔记功能。

## Features / 功能

- 📅 **Mini Calendar / 迷你日历**
  - Displays current date and month view / 显示当前日期和月份视图
  - Highlights today's date / 突出显示今天的日期
  - Allows navigation between months / 允许在月份之间导航

- 📝 **Daily Notes / 每日笔记**
  - Quick note-taking interface / 快速记笔记界面
  - Auto-saves notes for each date / 自动保存每个日期的笔记
  - Markdown support for rich text formatting / 支持 Markdown 进行富文本格式化

- 🎯 **Sidebar Panel / 侧边栏面板**
  - Opens from right side of browser / 从浏览器右侧打开
  - Adjustable width / 可调节宽度
  - Minimalistic and clean design / 极简和干净的设计
  - Non-intrusive to main browsing experience / 不干扰主要浏览体验

## Technical Implementation / 技术实现

### Core Components / 核心组件

1. **Manifest (v3) / 清单 (v3)**
   - Browser action with popup / 带弹出窗口的浏览器操作
   - Sidebar panel implementation / 侧边栏面板实现
   - Required permissions / 所需权限

2. **UI Components / 用户界面组件**
   - Calendar widget / 日历小部件
   - Notes editor / 笔记编辑器
   - Settings panel / 设置面板

3. **Data Management / 数据管理**
   - Chrome storage sync for cross-device access / Chrome 存储同步以实现跨设备访问
   - Local storage backup / 本地存储备份
   - Date-based note organization / 基于日期的笔记组织

### File Structure / 文件结构

```
extension/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── sidebar/
│   ├── sidebar.html
│   ├── sidebar.css
│   └── sidebar.js
├── components/
│   ├── calendar.js
│   └── notes.js
└── assets/
    └── icons/
```

## Development Plan / 开发计划

1. Set up basic extension structure with manifest v3 / 设置基本的扩展结构，使用清单 (v3)
2. Implement sidebar panel injection / 实现侧边栏面板注入
3. Develop calendar component / 开发日历组件
4. Create notes interface / 创建笔记界面
5. Add data persistence / 添加数据持久化
6. Polish UI/UX / 打磨 UI/UX
7. Add settings and customization options / 添加设置和自定义选项

## Future Enhancements / 未来增强

- 🔄 Cloud sync support / 云端同步支持
- 🎨 Customizable themes / 可定制主题
- 📊 Calendar view options (week/month) / 日历视图选项（周/月）
- 🔔 Reminders and notifications / 提醒和通知
- 📱 Mobile companion app / 移动伴侣应用

## Installation / 安装

1. Clone repository / 克隆仓库
2. Open Chrome Extensions (chrome://extensions/) / 打开 Chrome 扩展程序（chrome://extensions/）
3. Enable Developer Mode / 启用开发者模式
4. Click "Load unpacked" / 点击 "Load unpacked"
5. Select the extension directory / 选择扩展程序目录

## Usage / 使用

1. Click the extension icon in Chrome toolbar / 点击 Chrome 工具栏中的扩展程序图标
2. Sidebar panel appears on the right / 侧边栏面板在右侧出现
3. View calendar and manage daily notes / 查看日历并管理每日笔记
4. Click outside or use close button to dismiss / 点击外部或使用关闭按钮关闭

## Contributing / 贡献

Contributions are welcome! Please feel free to submit a Pull Request. / 欢迎贡献！请自由提交 Pull Request。
