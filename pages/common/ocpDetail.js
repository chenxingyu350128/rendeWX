// pages/common/ocpDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gray:true,
    latitude: 23.099994,
    longitude: 113.324520,
    show: 1,
    bottomText:"",
    client: 1,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    if(options.user==2){
      this.setData({
        showPounty: true,
        bottomText: '立即申请'
      })
    }
    else if (options.user == 1){
      this.setData({
        showPounty: false,
        bottomText: '立即投递'
      })
    }
    this.setData({
      show: options.show,
      client: options.client
      
    })
    // if (options.client == 2 && options.show==1) {
    //   this.setData({
    //     client:2,
    //     show: 1
    //   })
    // } else if (options.client == 2 && options.show == 0) {
    //   this.setData({
    //     client: 2,
    //     show: 0
    //   })
    // } else if (options.client == 1 && options.show == 1) {
    //   this.setData({
    //     client: 1,
    //     show: 1
    //   })
    // }
     // else{
    //   this.setData({
    //     client: 1
    //   })
    // }
    // console.log(this.data.show, this.data.client)
  },
  toPost:function(){
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
  otherOcp: function(){
    let user = parseInt(this.options.user)
    wx.navigateTo({
      url: '/pages/common/ocpDetail?user='+user,
    })
    // console.log('新的职位详情')
    console.log(this)

  },
  company: function(){
    wx.navigateTo({
      url: '/pages/prise/priseInfo',
    })
  },
  toGray:function(){
    if (this.data.bottomText=="立即投递"){
      this.setData({
        gray: false,
        bottomText: "已投递"
      })
    }else{
      this.setData({
        gray: false,
        bottomText: "已申请"
      })
    }
    
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