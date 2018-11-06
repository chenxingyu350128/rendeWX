// pages/prise/priseInfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    p_cate:1,
    showflag:0,
    banner:1,
    status:0,
    followText:'关注'
  },

  // 公司信息
  prise:function(e){
    this.setData({
      p_cate: e.currentTarget.dataset.id
    })
  },
  // 显示更多公司介绍
  showmore:function(e){
    this.setData({
      showflag: e.currentTarget.dataset.num
    })
    console.log(this.data.showflag)
  },

 // 点击关注按钮
  follow:function(e){
    if (e.target.dataset.index==1){
      this.setData({
        status: e.target.dataset.index
      }) 
     }
  },
  // 点击已关注按钮取消关注
  cancleFollow:function (e) {
    if (e.target.dataset.index == 0) {
      this.setData({
        status: e.target.dataset.index
      })
    }
  },
  // 查看地图
  lookMap:function(e){
    const latitude = 26.6434592320
    const longitude = 119.5442365838
    wx.openLocation({
      latitude,
      longitude,
      // 地图缩放比例
      scale: 28 
    })
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