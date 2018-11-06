
Page({

  /**
   * 页面的初始数据
   */
  data: {
    factory: '行业',
    area: '福建',
    range1: ['a', 'b', 'c', 'd', 'e'],
    array1: [
      { province: '河北省' },
      { province: '河南省' },
      { province: '福建省' },
      { province: '广东省' },
      { province: '四川省' },
      { province: '甘肃省' },
      { province: '云南省' },
      { province: '浙江省' },
      { province: '广西省' },
    ],
    index1: 0,
    range2: ['factory1', 'factory2', 'factory3', 'factory4', 'factory5'],
    array2: [
      { province: '行业1' },
      { province: '行业2' },
      { province: '行业3' },
      { province: '行业4' },
      { province: '行业5' },
      { province: '行业6' },
      { province: '行业7' },
      { province: '行业8' },
      { province: '行业9' },
    ],
    index2: 0,
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
  picker1: function (e) {
    console.log(111)
    console.log(e)
    console.log(typeof (e.detail.value))
    this.setData({
      index1: e.detail.value,
      area: this.data.range1[e.detail.value]
    })
  },
  picker2: function (e) {
    console.log(222)
    console.log(e)
    console.log(typeof (e.detail.value))
    this.setData({
      index2: e.detail.value,
      factory: this.data.range2[e.detail.value]
    })
  },
  detail: function(){
    wx.navigateTo({
      url: '/pages/common/shopDetail',
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