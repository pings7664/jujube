export default defineAppConfig({
  title: 'Seventy',
  description: '一切都会变好! 超好! 爆好! 无敌好! ',
  author: 'Song Ping',
  nav: [
    {
      text: '主页',
      link: '/',
      icon: 'lucide:home',
    },
    {
      text: '内容',
      link: '/posts',
      icon: 'lucide:terminal',
      items: [
        { text: '编程', link: '/coding', icon: 'lucide:code-xml' },
        { text: '项目', link: '/projects', icon: 'lucide:rocket' },
      ],
    },
    {
      text: '手记',
      link: '/blog',
      icon: 'lucide:pen-line',
    },
    {
      text: '生活',
      link: '/life',
      icon: 'lucide:shell',
      items: [
        { text: '电影', link: '/movies', icon: 'lucide:film' },
        { text: '音乐', link: '/music', icon: 'lucide:music-2' },
        { text: '书籍', link: '/books', icon: 'lucide:library-big' },
        { text: '游戏', link: '/games', icon: 'lucide:swords' },
        { text: '食谱', link: '/recipe', icon: 'lucide:utensils-crossed' },
      ],
    },
    {
      text: '工作',
      link: '/work',
      icon: 'lucide:briefcase',
      items: [
        { text: '面试', link: '/interviews', icon: 'lucide:speech' },
        { text: '语言', link: '/languages', icon: 'lucide:languages' },
        { text: '链接', link: '/links', icon: 'lucide:link' },
      ],
    },
    {
      text: '更多',
      link: '/others',
      icon: 'lucide:more-horizontal',
      items: [
        { text: '摘抄', link: '/search', icon: 'lucide:notebook' },
        { text: '归档', link: '/archives', icon: 'lucide:archive' },
        { text: '标签', link: '/tags', icon: 'lucide:tag' },
        { text: 'RSS', link: '/rss.xml', icon: 'lucide:rss' },
      ],
    },
    {
      text: '关于',
      link: '/about',
      icon: 'lucide:smile',
    },
  ],
  link: {
    github: {
      href: 'https://github.com/pings7664/jujube',
      icon: 'lucide:github',
    },
    x: {
      href: 'https://twitter.com/pings7664',
      icon: 'lucide:x',
    },
  },
})
