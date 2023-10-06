// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE: string = 'Jujube'
export const SITE_DESCRIPTION: string = '一定会变好，超好，爆好，无敌好！'

export const NAV: {
  text: string
  link?: string
  items?: {
    text: string
    link: string
  }[]
}[] = [
  {
    text: '主页',
    link: '/',
  },
  {
    text: '博客',
    link: '/blog',
  },
  {
    text: '文档',
    link: '/posts',
  },
  {
    text: '生活',
    items: [
      { text: '音乐', link: '/life/music' },
      { text: '电影', link: '/life/movie' },
    ],
  },
  {
    text: '关于',
    link: '/about',
  },
]

export const LINK: { github: string
home: string} = {
  github: 'https://github.com/gnipgnos',
  home: ''
}
