// pages/myExchange/myExchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    list: [{
      name:"全部",
      arrow:false
    }, {
        name: "分类",
        arrow: false
      }, {
        name: "积分",
        arrow: false
      }],
    exchangeList:[{
      exchangeImg:"../../assets/myExchange/exchangePic.png",
      name:"小米电热水",
      value:"19900",
      time:"2018/10/24"
    },
      {
        exchangeImg: "../../assets/myExchange/exchangePic.png",
        name: "小米电热水",
        value: "19900",
        time: "2018/10/24"
      }]
  },
  selected: function (e) {
    let that = this
    let index = e.currentTarget.dataset.index
    var arrow = that.data.list[index].arrow
    that.data.list[index].arrow=!arrow
    var list=that.data.list
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1,
        list:list
      })
    } else {
      that.setData({
        selected: 2,
        list: list
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