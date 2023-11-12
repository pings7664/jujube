export default defineAppConfig({
  title: 'Jujube',
  description: '一切都会变好！超好！爆好！无敌好！',
  nav: [
    {
      text: '主页',
      link: '/',
      icon: ''
    },
    {
      text: '博客',
      link: '/blogs',
      icon: ''
    },
    {
      text: '文档',
      link: '/posts',
      icon: ''
    },
    {
      text: '生活',
      link: '/life',
      icon: '',
      items: [
        {
          text: '电影',
          link: '/movies',
          icon: ''
        }, {
          text: '音乐',
          link: '/music',
          icon: ''
        }
      ]
    },
    {
      text: '关于',
      link: '/about',
      icon: ''
    }
  ],
  link: {
    github: 'https://github.com/gnipgnos/jujube'
  }
})
