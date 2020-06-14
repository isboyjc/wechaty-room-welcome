/*
 * @Author: isboyjc
 * @Date: 2020-06-14 22:55:52
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-06-14 23:03:08
 * @Description: file content
 */

// Wechaty核心包
const { Wechaty } = require("wechaty")
// padplus协议包
const { PuppetPadplus } = require("wechaty-puppet-padplus")
// qr码
const Qrterminal = require("qrcode-terminal")
// 插件 WechatyRoomWelcome
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
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`,
    },
    {
      name: "Web圈0x02",
      roomId: "22825376327@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`,
    },
    {
      name: "每日算法",
      roomId: "21705489152@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`,
    },
    {
      name: "微信机器人",
      roomId: "24661539197@chatroom",
      reply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流，最后，请向大家介绍你自己！ \n\n Hello, welcome to join, please consciously abide by the group rules, civilized communication, finally, please introduce yourself to everyone！😊`,
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
