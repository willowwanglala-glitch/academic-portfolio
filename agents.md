# 学术个人网站项目 - 治愈系小狗主题版

## Dependencies
- lucide-react: 图标库，用于页面各区块的装饰性图标
- framer-motion: 动画库（模板预置，未直接使用）

## Architecture
- 单页滚动式布局，src/routes/index.tsx 作为入口编排6个独立区块组件
- 组件拆分到 src/components/：HeroSection、ResearchInterests、EducationSection、ResearchExperienceSection、AcademicProjectsSection、AwardsSection
- 数据类型集中定义在 src/types/index.ts，供 AcademicProjectsSection 引用
- 设计系统 tokens 定义在 src/styles.css，使用 oklch 色彩空间

## Patterns / Constraints
- 所有滚动渐入动画通过 class="reveal" + data-reveal-delay 实现，由 lib/reveal-engine.ts 自动接管
- 照片引用必须使用 CDN URL，禁止本地路径
- 颜色统一使用 semantic tokens（--primary、--secondary、--muted 等），禁止硬编码 hex/rgb
- 暖黄+草地绿配色取自治愈系小狗插画（背景色 oklch(0.96 0.05 90)，前景色 oklch(0.28 0.04 140)）
- Hero区域使用用户上传的治愈系小狗插画作为全屏背景图，无遮罩层完全展现插画；文字通过 textShadow 白色阴影保证在复杂背景上的可读性，不使用任何半透明卡片或渐变遮罩
- 小狗爪印装饰使用 SVG 内联绘制，配合 paw-decoration CSS 动画实现漂浮效果
- 卡片圆角增大到 rounded-2xl，营造柔软亲切感
- Hero区域右上角固定🐕 emoji，带 floating-dog 浮动动画
- Hero背景搭配 falling-paw 飘落动画（9个爪印从顶部随机位置持续飘落）
- Education时间线左侧添加4个同步移动的爪印足迹，使用 reveal-up + data-reveal-delay 实现滚动触发的依次淡入效果
