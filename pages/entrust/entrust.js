// pages/entrust/entrust.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    list: ['企业委托', '人才委托'],
    enterpriseList: [{
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise:"杭州北角医学检验所有限公司",
      request:"福州   |  5年经验  |  大专学历"
    },
    {
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise: "杭州北角医学检验所有限公司",
      request: "福州   |  5年经验  |  大专学历"
    },
    {
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise: "杭州北角医学检验所有限公司",
      request: "福州   |  5年经验  |  大专学历"
    }],
    talentList: [{
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise: "杭州北角医学检验所有限公司",
      request: "福州   |  5年经验  |  大专学历"
    },
    {
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise: "杭州北角医学检验所有限公司",
      request: "福州   |  5年经验  |  大专学历"
    }, {
      name: "安全工程师或安全员",
      money: "￥12.00-18.00万 ",
      reward: "1500",
      time: "09月12日",
      enterprise: "杭州北角医学检验所有限公司",
      request: "福州   |  5年经验  |  大专学历"
    }]
  },
  selected: function (e) {
    let that = this
    console.log(e)
    let index = e.currentTarget.dataset.index
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})