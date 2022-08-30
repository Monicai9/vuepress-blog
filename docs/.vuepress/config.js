module.exports = {
  title: "吃七颗栗子", // 网站的标题
  description: "Q仔的写字台", 
  sidebarDepth: 0,
  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }], // 需要被注入到当前页面的 HTML <head> 中的标签
  ],
  themeConfig: {
    logo: "/logo.jpg",
    nav:[
      { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }        
    ],
    sidebar: 'auto',
    lastUpdated: 'Last Updated', 
  },
  sidebar:{
    // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
    '/accumulate/': [
        '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
        {
          title: '侧边栏下拉框的标题1',
          children: [
            '/accumulate/JS/test', // 以docs为根目录来查找文件 
          ]
        }
      ],
      // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
      '/algorithm/': [
        '/algorithm/', 
        {
          title: '第二组侧边栏下拉框的标题1',
          children: [
            '/algorithm/simple/test' 
          ]
        }
      ]
  }
};
