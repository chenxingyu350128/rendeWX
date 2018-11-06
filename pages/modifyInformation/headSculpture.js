// pages/modifyInformation/headSculpture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headSculpture:"",
  },
  chooseImage: function () {
    var that = this;
    // var items = that.data.photos;
    var headSculpture = that.data.headSculpture;
    wx.chooseImage({
      count: 1, // 一次可提交最多1张照片   默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        headSculpture=tempFilePaths
        that.setData({
          headSculpture: headSculpture
        })
      }
    })
  },
  returnToRevise:function(){
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var touxiang = options.touxiang
    that.setData({
      headSculpture: touxiang,
    })
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