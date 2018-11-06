// pages/talent/resume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

// 点击跳转编辑简历
  goModify:function(){
    wx.navigateTo({
      url: '/pages/talent/resumeModify',
    })
  },

  // 点击跳转添加工作经历
  addworkexpr: function () {
    wx.navigateTo({
      url: '/pages/talent/addworkexpr',
    })
  },
// 点击跳转添加教育经历
  addeduexp:function(){
    wx.navigateTo({
      url: '/pages/talent/addeduexpr',
    })
  },

//点击跳转到添加技能页面
addskill:function(){
  wx.navigateTo({
    url: '/pages/talent/addskill',
  })
},
  
//点击跳转到编辑工作经历页面
  goeditwork:function(){
    wx.navigateTo({
      url: '/pages/talent/addworkexpr',
    })
  },
  //点击跳转到编辑教育经历页面
  goeditedu: function () {
    wx.navigateTo({
      url: '/pages/talent/addeduexpr',
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