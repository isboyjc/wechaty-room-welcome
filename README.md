# wechaty-room-welcome

[![Wechaty Plugin Contrib](https://img.shields.io/badge/Wechaty%20Plugin-wechaty--room--welcome-brightgreen.svg)](https://github.com/isboyjc/wechaty-room-welcome) [![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)

Welcome to the room

加入房间欢迎



## 开始

### 简介

这是一个及其简单的插件，功能也只有一个，那就是用于监听群聊中新人员的加入，随后回复一个入群欢迎，可管理多个群聊



### 安装

```txt
npm install wechaty-room-welcome

or

yarn add wechaty-room-welcome
```



### 使用

```js
const WechatyRoomWelcome = require("wechaty-room-welcome")

bot.use(WechatyRoomWelcome(options))
```



`options` 参数是一个对象，只有一个属性 `reply`

| Options 参数属性 | 类型          | 简介                                                         |
| ---------------- | ------------- | ------------------------------------------------------------ |
| reply            | String\|Array | reply参数为字符串时，机器人加入的所有群聊监听到新的加入都将回复此欢迎语，当为数组时，可自由配置管理的每个群聊要回复什么欢迎语，为数组类型的具体配置请看下文示例 |

`reply` 数组格式示例

```js
reply: [
  {
    // 群聊名
    name: "微信机器人",
    // 群聊id
    roomId: "24661539197@chatroom",
    // 入群回复的欢迎词
    reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！😊`,
  },
	...
]
```



### 示例

```js
const { Wechaty } = require("wechaty")
const { PuppetPadplus } = require("wechaty-puppet-padplus")
const Qrterminal = require("qrcode-terminal")
const WechatyRoomWelcome = require("../index")

// 初始化 bot
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    // 机器人padplus协议token
    token: PUPPET_PADPLUS_TOKEN,
  }),
  // 机器人名字
  name: ROBOT_NAME,
})

const options = {
  reply: [
    {
      name: "Web圈0x01",
      roomId: "10614174865@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ 😊`,
    },
    {
      name: "Web圈0x02",
      roomId: "22825376327@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！😊`,
    },
    {
      name: "每日算法",
      roomId: "21705489152@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！😊`,
    },
    {
      name: "微信机器人",
      roomId: "24661539197@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！😊`,
    },
    {
      name: "男神开门群",
      roomId: "22275855499@chatroom",
      reply: "男神你好，欢迎加入",
    },
  ],
}

// 使用插件
bot.use(WechatyRoomWelcome(options))

bot
  .on("scan", (qrcode, status) => {
    Qrterminal.generate(qrcode, { small: true })
  })
  .start()

```



### 最后

扫描二维码，加圈子微信备注加群，可进交流群哦，赶快来试试体验一波吧

<img src="https://gitee.com/IsboyJC/PictureBed/raw/master/other/asdakshdajshdas1.jpeg" width="200" height="200" alt="图片名称" align=left />