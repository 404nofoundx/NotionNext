const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-07-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '人法地，地法天，天法道，道法自然。', url: 'https://blog.404nofoundx.top/'},
    { title: '让灵魂，生生不息，将生命，紧紧握住。去把握，去支撑，去咬紧，去哀求。无论变成如何，都坚守不放！', url: 'https://blog.404nofoundx.top/'},
    { title: '梦想、希望、未来，都是靠自己来决定的。', url: 'https://blog.404nofoundx.top/'},
    { title: '脚在你身上长着。走不走，走哪条路，走什么样的路，做不做人，做什么样的人，亦是如此。', url: 'https://blog.404nofoundx.top/'},
    { title: '有些烦恼，丢掉了，才有云淡风轻的机会。', url: 'https://blog.404nofoundx.top/'},
    { title: '等风来，不如追风去。', url: 'https://blog.404nofoundx.top/'},
    { title: '我不知道将去何方，但我已经在路上。', url: 'https://blog.404nofoundx.top/'},
    { title: '过去无可挽回，未来可以改变。', url: 'https://blog.404nofoundx.top/'},
    { title: '拔一毛而利天下，不为也。', url: 'https://blog.404nofoundx.top/'},
    { title: '己不由心，身又岂能由己。', url: 'https://blog.404nofoundx.top/'},
    { title: '做人可以不高尚，但不能无耻。', url: 'https://blog.404nofoundx.top/'},
    { title: '非是局中人，莫论是与非。', url: 'https://blog.404nofoundx.top/'},
    { title: '为人可以不伟大，但不能卑鄙。', url: 'https://blog.404nofoundx.top/'},
    { title: '是是非非，终须有报，善恶有头，终有尾报。', url: 'https://blog.404nofoundx.top/'},
    { title: '头脑可以不聪明，但不能糊涂。', url: 'https://blog.404nofoundx.top/'},
    { title: '人心中的成见是一座大山，任你怎么努力都休想搬动。', url: 'https://blog.404nofoundx.top/'},
    { title: '生活可以不乐观，但不能厌世。', url: 'https://blog.404nofoundx.top/'},
    { title: '人生就像一场修行，重要的是过程，而不是结果。', url: 'https://blog.404nofoundx.top/'},
    { title: '这短短的一生，我们最终都会失去，你不妨大胆一些，爱一个人，攀一座山，追一个梦。', url: 'https://blog.404nofoundx.top/'},
    { title: '聚散离合，乃是缘分，苦情巨树续的是缘，而有缘，未必有分。', url: 'https://blog.404nofoundx.top/'},
    { title: '若黯夜终临，吾必立于万万人前，横刀向渊，血染天穹。', url: 'https://blog.404nofoundx.top/'},
    { title: '它们在黑夜之中熠熠生辉，如浮空的灵魂和瑰丽的梦，照亮了漆黑的人间。', url: 'https://blog.404nofoundx.top/'},
    { title: '世间万物，风云变幻，苍黄翻覆。纵使波谲云诡，但制心一处，便无事不办。天定胜人，人定兮胜天。', url: 'https://blog.404nofoundx.top/'},
    { title: '人生如戏，全靠演技，但请你记住，真诚不可丢。', url: 'https://blog.404nofoundx.top/'},
    { title: '交友可以不慷慨，但不能损人。', url: 'https://blog.404nofoundx.top/'},
    { title: '即使世界以痛吻我，我仍报之以歌，因为心中有光，便无所畏惧。', url: 'https://blog.404nofoundx.top/'},
    { title: '己不由心，身又岂能由己。', url: 'https://blog.404nofoundx.top/'},
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

  // 右侧个人资料卡牌欢迎语，点击可自动切换
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
  WECHAT_CODE_PATH : "/images/wechat.png",

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://blog.404nofoundx.top/contact',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

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
