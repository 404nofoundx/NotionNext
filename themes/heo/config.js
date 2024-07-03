const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-07-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.404nofoundx.top/' },
    { title: '我今天就要带她走，我看谁敢拦我。', url: '' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'Spider',
  // HEO_HERO_TITLE_2: 'Spider',
  HEO_HERO_TITLE_3: '404nofoundx.top',
  HEO_HERO_TITLE_LINK: 'https://blog.404nofoundx.top/',
  // HEO_HERO_TITLE_3: '404nofoundx.top',
  // HEO_HERO_TITLE_4: '家中无富贵 口袋无财宝',
  HEO_HERO_TITLE_5: '寒风终刺骨 勤为好仕途',
  // HEO_HERO_TITLE_5: '博得明月出 用兰花换锦服',
  HEO_HERO_TITLE_LINK: 'https://blog.404nofoundx.top/',

  // 家中无富贵 口袋无财宝 寒风终刺骨 勤为好仕途 博得明月出 用兰花换锦服 
  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '安卓逆向', url: '/tag/安卓逆向' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '爬虫精选', url: '/tag/爬虫精选' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换 https://emojicopy.com/
  HEO_INFOCARD_GREETINGS: [
    '🍻 又菜又爱喝',
    '🏋️ 隔三岔五健身',
    '🏀 不会唱不会跳',
    '🍍 电子农夫',
    '😺😾😼 橘猫之家'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/404nofoundx',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  // HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
  // HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'Android',
      img_1: '/images/heo/android.svg',
      color_1: '#989bf8',
      title_2: 'HttpCanary',
      img_2: '/images/heo/HttpCanary.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Magisk',
      img_1: '/images/heo/magisk.png',
      color_1: '#57b6e6',
      title_2: 'Taichi',
      img_2: '/images/heo/taichi.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Frida',
      img_1: '/images/heo/frida.png',
      color_1: '#eb6840',
      title_2: 'Xposed',
      img_2: '/images/heo/Xposed.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'Jadx',
      img_1: '/images/heo/jadx-logo.png',
      color_1: '#f29e39',
      title_2: 'Jeb',
      img_2: '/images/heo/jeb.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'Charles',
      img_2: '/images/heo/charles-proxy.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'IDA Pro',
      img_2: '/images/heo/ida.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: '/article/contact',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
