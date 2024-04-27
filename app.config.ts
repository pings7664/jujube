export default defineAppConfig({
  title: 'Jujube',
  logo: '',
  description: '一切都会变好! 超好! 爆好! 无敌好! ',
  author: 'Song Ping',
  nav: [
    {
      text: '主页',
      link: '/',
      icon: 'lucide:home',
    },
    {
      text: '博客',
      link: '/posts',
      icon: 'lucide:folder',
    },
    {
      text: '生活',
      icon: 'lucide:shell',
      items: [
        {
          text: '电影',
          link: '/life/movies',
          icon: 'lucide:film',
        },
        {
          text: '音乐',
          link: '/life/music',
          icon: 'lucide:music-2',
        },
        {
          text: '书籍',
          link: '/life/books',
          icon: 'lucide:library-big',
        },
        {
          text: '游戏',
          link: '/life/games',
          icon: 'lucide:swords',
        },
        {
          text: '菜单',
          link: '/life/recipe',
          icon: 'lucide:utensils-crossed',
        },
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
