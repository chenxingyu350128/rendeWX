// pages/collectedResumes/collectedResumes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    click:true,
    list: ['最新', '邀请面试'],
    newList:[{
      headSculptureImg: "../../assets/mine/headSculpture.png",
      position:"平面设计师",
      click:true,
      name: "张羽文",
      demand1: "2年以上经验",
      demand2: "本科学历",
      price: "4000-5000",
      time: "2018-09-05",
      state:0,//0表示未邀请人员，1表示已邀请人员
      isChecked: false
    },
    {
      headSculptureImg: "../../assets/mine/headSculpture.png",
      click: true,
      position: "平面设计师",
      name: "张羽文",
      demand1: "2年以上经验",
      demand2: "本科学历",
      price: "4000-5000",
      time: "2018-09-05",
      state: 0,
      isChecked: false
    },
    {
      headSculptureImg: "../../assets/mine/headSculpture.png",
      position: "平面设计师",
      click: true,
      name: "张羽文",
      demand1: "2年以上经验",
      demand2: "本科学历",
      price: "4000-5000",
      time: "2018-09-05",
      state: 1,
      isChecked: false
    }],
  },
  toResume:function(i){
    wx.navigateTo({
      url: '/pages/talent/talentInfo?isChecked=' + this.data.newList[i].isChecked,
    })
  },
  click1:function(e){
    var newList = this.data.newList
    var index = e.currentTarget.dataset.index;
    var click = newList[index].click
    click=false
    newList[index].click=click
    this.setData({
      newList: newList
    })
    this.toResume(index)
  },
  click2: function (e) {
    var newList = this.data.newList
    var index = e.currentTarget.dataset.index;
    var click = newList[index].click
    click = false
    newList[index].click = click
    this.setData({
      newList: newList
    })
    this.toResume(index)
  },
  click3:function(e){
    wx.showToast({
      title: '成功',
    })
    var index=e.currentTarget.dataset.index
    var newList = this.data.newList
    var state = newList[index].state
    state=1
    newList[index].state = state
    this.setData({
      newList: newList
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
    } else{
      that.setData({
        selected: 1
      })
    }
  },
  click4:function(e){
    var index=e.currentTarget.dataset.index
    var newList = this.data.newList
    for (var i = 0; i < newList.length;i++){
      if (newList[i].click==true){
        newList[index].isChecked = true
      }
    }
    this.setData({
      newList: newList
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