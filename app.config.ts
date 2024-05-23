export default defineAppConfig({
  title: 'Seventy',
  description: '一切都会变好! 超好! 爆好! 无敌好! ',
  author: 'Song Ping',
  nav: [
    {
      label: '主页',
      href: '/',
      icon: 'lucide:home',
    },
    {
      label: '内容',
      href: '/posts',
      icon: 'lucide:terminal',
      items: [
        { label: '编程', href: '/coding', icon: 'lucide:code-xml' },
        { label: '项目', href: '/projects', icon: 'lucide:rocket' },
      ],
    },
    {
      label: '手记',
      href: '/blog',
      icon: 'lucide:pen-line',
    },
    {
      label: '生活',
      href: '/life',
      icon: 'lucide:shell',
      items: [
        { label: '电影', href: '/movies', icon: 'lucide:film' },
        { label: '音乐', href: '/music', icon: 'lucide:music-2' },
        { label: '书籍', href: '/books', icon: 'lucide:library-big' },
        { label: '游戏', href: '/games', icon: 'lucide:swords' },
        { label: '食谱', href: '/recipe', icon: 'lucide:utensils-crossed' },
      ],
    },
    {
      label: '工作',
      href: '/work',
      icon: 'lucide:briefcase',
      items: [
        { label: '面试', href: '/interviews', icon: 'lucide:speech' },
        { label: '语言', href: '/languages', icon: 'lucide:languages' },
        { label: '链接', href: '/links', icon: 'lucide:link' },
      ],
    },
    {
      label: '更多',
      href: '/others',
      icon: 'lucide:more-horizontal',
      items: [
        { label: '摘抄', href: '/notebook', icon: 'lucide:notebook' },
        { label: '归档', href: '/archives', icon: 'lucide:archive' },
        { label: '标签', href: '/tags', icon: 'lucide:tag' },
        { label: 'RSS', href: '/rss.xml', icon: 'lucide:rss' },
      ],
    },
    {
      label: '关于',
      href: '/about',
      icon: 'lucide:smile',
    },
  ],
  href: {
    github: {
      href: 'https://github.com/pings7664',
      icon: 'lucide:github',
    },
    x: {
      href: 'https://twitter.com/pings7664',
      icon: 'lucide:x',
    },
    email: {
      href: 'mailto:pings7664@gmail.com',
      icon: 'lucide:mail',
    },
  },
  github: 'https://github.com/pings7664/jujube',
})
