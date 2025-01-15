const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-07-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '我今天就要带她走，我看谁敢拦我。', url: 'https://blog.404nofoundx.top/'},
    { title: '没有光明是不幸的吗？需要光明才是真正的不幸。', url: 'https://blog.404nofoundx.top/'},
    { title: '生命是有光的，在我熄灭以前能够照亮你一点，就是我所有能做的了。', url: 'https://blog.404nofoundx.top/'},
    { title: '每个女孩心里都有一片萤火之森，那里住着一个少年。', url: 'https://blog.404nofoundx.top/'},
    { title: '你不会遇到第二个我，友情也好，爱情也罢。', url: 'https://blog.404nofoundx.top/'},
    { title: '我拯救了全世界，却忘记了那个我最爱的人。', url: 'https://blog.404nofoundx.top/'},
    { title: '我不是天生的王者，但我骨子里流着不让我低头的血液。', url: 'https://blog.404nofoundx.top/'},
    { title: '每当心情郁闷的时候，用手托腮就好，手臂会因为帮上忙而开心的。', url: 'https://blog.404nofoundx.top/'},
    { title: '魔术的确是骗人的，但是看魔术的人喜欢被骗。', url: 'https://blog.404nofoundx.top/'},
    { title: '思念着你的人所在的地方，就是你的归处。', url: 'https://blog.404nofoundx.top/'},
    { title: '生命虽然脆弱但也坚韧，我们无法摆脱疾病和死亡，但正是因为如此，我们才更珍惜彼此，珍惜当下。', url: 'https://blog.404nofoundx.top/'},
    { title: '总有一天，我会彻底超越你的。', url: 'https://blog.404nofoundx.top/'},
    { title: '你本来是有机会的，但是你输了，你不能总是活在过去。', url: 'https://blog.404nofoundx.top/'},
    { title: '越是试着忘记，越是记得深刻。', url: 'https://blog.404nofoundx.top/'},
    { title: '只要有你在，我就无所不能。', url: 'https://blog.404nofoundx.top/'},
    { title: '就算是对我抱有敌意的人，也是被某个人深爱着而降生在这个世界上的。', url: 'https://blog.404nofoundx.top/'},
    { title: '重要的人越多，越是不安。', url: 'https://blog.404nofoundx.top/'},
    { title: '身不由己，苦海无尽，历经折磨蜕变, 却活成了别人想要的样子。', url: 'https://blog.404nofoundx.top/'},
    { title: '水太深的地方会隐藏太多的真相，只有等潮水退去，才能够看清楚那些不为人知的杂草和暗礁。', url: 'https://blog.404nofoundx.top/'},
    { title: '这短短的一生，我们最终都会失去。你不妨大胆一些，爱一个人，攀一座山，追一个梦。', url: 'https://blog.404nofoundx.top/'},
    { title: '心疼的时候其实连身体都会感到强烈的疼痛。', url: 'https://blog.404nofoundx.top/'},
    { title: '人因为有难忘的记忆而变得坚强, 这就是所谓的成长吧。', url: 'https://blog.404nofoundx.top/'},
    { title: '如果这个世界对你不理不睬， 你也可以这样对待它。', url: 'https://blog.404nofoundx.top/'},
    { title: '得到了不该得到的，就会失去不该失去的。', url: 'https://blog.404nofoundx.top/'},
    { title: '所以刻苦铭心的疼痛，都会随着时间的流逝而变的麻木。', url: 'https://blog.404nofoundx.top/'},
    { title: '青春，因喜欢你而开始。', url: 'https://blog.404nofoundx.top/'},
    { title: '不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更接近幸福。', url: 'https://blog.404nofoundx.top/'},
    { title: '我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。', url: 'https://blog.404nofoundx.top/'},
    { title: '人们虽然每天都在像口头禅一样抱怨无聊 没什么有趣的事 ，其实却不希望发生什么变化。', url: 'https://blog.404nofoundx.top/'},
    { title: '如果你真的其貌不扬 ，我真不知道会不会做出同样的选择 ，这就是男人。', url: 'https://blog.404nofoundx.top/'},
    { title: '如果当时我们说了再见，后来是不是就可以再见', url: 'https://blog.404nofoundx.top/'},
    { title: '每个少年都好像一只雏翼的鸟，当蒙在生命里的黑布被掀起一角，露出一抹剌眼的天光', url: 'https://blog.404nofoundx.top/'},
    { title: '重要的人，不想忘记的人，绝对不能忘的人，就算我不记得你的名字，我也会一直一直拼命的寻找你', url: 'https://blog.404nofoundx.top/'},
    { title: '我不知道离别的滋味是这样凄凉，我不知道说声再见要这么坚强。', url: 'https://blog.404nofoundx.top/'},
    { title: '我已记不得你的名字，却还记得喜欢你。', url: 'https://blog.404nofoundx.top/'},
    { title: '如果声音有形状，那一定是我爱你的样子。', url: 'https://blog.404nofoundx.top/'},
    { title: '呐，你知道吗？听说樱花飘落的速度是秒速五厘米哦。" 秒速5厘米，那是樱花飘落的速度，那么怎样的速度才能走完我与你之间的距离？', url: 'https://blog.404nofoundx.top/'},
    { title: '每当心情郁闷的时候，用手托腮就好，手臂会因为帮上忙而开心的。', url: 'https://blog.404nofoundx.top/'},
    { title: '关于自己的生活，我和你都不是读者，而是作者。至少结局，还是能自己说了算的。', url: 'https://blog.404nofoundx.top/'},
    { title: '可能因为我自己也比较单细胞的缘故，所以更喜欢简单和直接的人', url: 'https://blog.404nofoundx.top/'},
    { title: '40我都不明白，你自己都这么讨厌自己，怎么还能期待别人去爱你呢？', url: 'https://blog.404nofoundx.top/'},
    { title: '难道一辈子都这样，最重要的话永远不说出口，摆出一副事不关己的样子，永远一个人走下去。', url: 'https://blog.404nofoundx.top/'},
    { title: '想走的路不好走，想做人不好做，都说是身不由己，不是废话么。 己不由心 身又岂能由己！', url: 'https://blog.404nofoundx.top/'},
    { title: '世界这么大，人生这么长，总会有这么一个人，让你想要温柔地对待。', url: 'https://blog.404nofoundx.top/'},
    { title: '有些烦恼，丢掉了，才有云淡风轻的机会。', url: 'https://blog.404nofoundx.top/'},
    { title: '如果把童年再放映一遍，我们一定会先大笑，然后放声痛哭，最后挂着泪，微笑着睡去。', url: 'https://blog.404nofoundx.top/'},
    { title: '等风来，不如追风去。', url: 'https://blog.404nofoundx.top/'},
    { title: '总有一个人，会把你的百炼成钢化为绕指柔，教你温柔对待这个世界。', url: 'https://blog.404nofoundx.top/'},
    { title: '我不知道将去何方，但我已经在路上。', url: 'https://blog.404nofoundx.top/'},
    { title: '人的梦想是不会终结的！', url: 'https://blog.404nofoundx.top/'},

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
