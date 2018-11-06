// pages/common/generalDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: 1//默认选择性别男
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
  gender: function(e){
    console.log(e)
      this.setData({
        gender: e.currentTarget.dataset.id
      })
  },
  edit: function(){
    this.setData({
      showFillBox: !this.data.showFillBox
    })
  },
  confirm: function(){
    this.setData({
      showFillBox: !this.data.showFillBox
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