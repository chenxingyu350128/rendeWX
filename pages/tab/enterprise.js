// pages/tab/enterprise.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectPerson1: true,
    selectPerson2: true,
    selectPerson3: true,
    selectArea1: false,
    selectArea2: false,
    selectArea3: false,
    firstPerson: '区域',
    secondPerson: '行业',
    thirdPerson: '规模',
    areaList:[
      '不限',
      '福建省',
      '北京',
      '浙江省',
    ] ,   
    positiontypeList: [
      '不限',
      '销售',
      '软件工程师',
      '文员秘书',
    ], 
    scaleList: [
      '不限',
      '1-10人',
      '10-99人',
      '100-999人',
    ],     
  },

// 区域选择
  clickPerson1: function () {
    var selectPerson1 = this.data.selectPerson1;
    if (selectPerson1 == true) {
      this.setData({
        selectArea1: true,
        selectPerson1: false,
      })
    } else {
      this.setData({
        selectArea1: false,
        selectPerson1: true,
      })
    }
  },

  //行业类型
  clickPerson2: function () {
    var selectPerson2 = this.data.selectPerson2;
    if (selectPerson2 == true) {
      this.setData({
        selectArea2: true,
        selectPerson2: false,
      })
    } else {
      this.setData({
        selectArea2: false,
        selectPerson2: true,
      })
    }
  },
  //规模类型
  clickPerson3: function () {
    var selectPerson3 = this.data.selectPerson3;
    if (selectPerson3 == true) {
      this.setData({
        selectArea3: true,
        selectPerson3: false,
      })
    } else {
      this.setData({
        selectArea3: false,
        selectPerson3: true,
      })
    }
  },

  // 规模选择
  exprselect: function (e) {
    this.setData({
      thirdPerson: e.target.dataset.me,
      selectPerson3: true,
      selectArea3: false,
    })
  },
  // 行业选择
  typeSelect: function (e) {
    this.setData({
      secondPerson: e.target.dataset.me,
      selectPerson2: true,
      selectArea2: false,
    })
  },
  //区域选择
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson1: true,
      selectArea1: false,
    })
  },

  // 跳转到人才详情页面
  goInfo: function () {
    wx.navigateTo({
      url: '/pages/prise/priseInfo',
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