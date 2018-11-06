// pages/tab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  toMessage:function(){
    wx.navigateTo({
      url: '/pages/message/message',
    })
  },
  searchPage: function(){
    console.log(22)
    wx.navigateTo({
      url: '/pages/prise/findwork',
    })
  },
  wpInfo:function(){
    wx.navigateTo({
      url: '/pages/common/wpInfo',
    })
  },
  store: function () {
    wx.navigateTo({
      url: '/pages/common/store',
    })
  },
  hr: function(){
    wx.navigateTo({
      url: '/pages/common/hr',
    })
  },
  jobFair: function () {
    wx.navigateTo({
      url: '/pages/common/jobFair',
    })
  },
  general: function(){
    wx.navigateTo({
      url: '/pages/common/general',
    })
  },
  shop: function () {
    wx.navigateTo({
      url: '/pages/common/shop',
    })
  },
  proxy: function () {
    wx.navigateTo({
      url: '/pages/common/proxy',
    })
  },
  ocpDetail: function(){
    wx.navigateTo({
      //url: '/pages/common/ocpDetail?user=' + 1 + "&client=" + 1 + "&show=" + 1,//个人
      url: '/pages/common/ocpDetail?user='+1+"&client="+2+"&show="+0,//企业
    })
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