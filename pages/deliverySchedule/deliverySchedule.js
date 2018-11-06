// pages/deliverySchedule/deliverySchedule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    list: ['全部', '被查看', '不合适'],
    positionList: [{
      postion: "UI设计师",
      price: "5-7K/月",
      time: "09-29",
      enterprise:"福建博业建设集团有限公司福州分公司",
      state:"简历被查看"
    },
    {
      postion: "UI设计师",
      price: "5-7K/月",
      time: "09-29",
      enterprise: "福建博业建设集团有限公司福州分公司",
      state: "不合适"
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
    } else {
      that.setData({
        selected: 2
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