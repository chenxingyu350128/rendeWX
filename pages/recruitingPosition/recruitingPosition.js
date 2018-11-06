// pages/recruitingPosition/recruitingPosition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    list: ['正在热招', '完成招聘'],
    recruitingList:[{
      name:"安全工程师或安全员",
      money:"3000-8000元",
      state:"完成招聘",
      time:"09月12日",
      state1:0,//0表示未完成招聘，1表示已完成招聘
    },
      {
        name: "安全工程师或安全员",
        money: "3000-8000元",
        state: "完成招聘",
        time: "09月12日",
        state1: 0,
      },
      {
        name: "安全工程师或安全员",
        money: "3000-8000元",
        state: "完成招聘",
        time: "09月12日",
        state1: 1,
      }],
  },
  toPostionDetail:function(){
    wx.navigateTo({
      url: '/pages/common/ocpDetail?client='+2+"&show="+1,
    })
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
  
  complete:function(e){
    var index=e.currentTarget.dataset.index
    var recruitingList = this.data.recruitingList
    var state1 = recruitingList[index].state1
    state1=1
    recruitingList[index].state1 =state1
    this.setData({
      recruitingList: recruitingList
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