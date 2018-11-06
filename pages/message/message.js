// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[{
      enterpriseImg:"../../assets/message/messageing.png",
      enterpriseName:"仁德直聘通知",
      government:true,
      time:"5分钟前",
      connent:"你好，感觉你符合我们的岗位要求111111111111...",
      num:1,
    },
      {
        enterpriseImg: "../../assets/collectionPosition/enterpriseImg.png",
        enterpriseName: "福建博业建设集团有限公司福11111",
        government: false,
        time: "15分钟前",
        connent: "你好，感觉你符合我们的岗位要求111111111111...",
        num: 0,
      },
      {
        enterpriseImg: "../../assets/collectionPosition/enterpriseImg.png",
        enterpriseName: "福建博业建设集团有限公司福11111",
        government: false,
        time: "2018-08-04",
        connent: "你好，感觉你符合我们的岗位要求111111111111...",
        num: 0,
      }]
  },
  click1:function(){
    wx.navigateTo({
      url: '/pages/common/hr',
    })
  },
  click2:function(e){
    var index=e.currentTarget.dataset.index;
    var messageList = this.data.messageList
    var num = this.data.messageList[index].num
    num=0;
    this.data.messageList[index].num=num
    this.setData({
      messageList: messageList
    })
    wx.navigateTo({
      url: '/pages/contactCustomerService/contactCustomerService',
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