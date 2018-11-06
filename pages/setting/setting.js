// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      revise1:[{
        reviseHeadSculptureName: "修改头像",
        reviseHeadSculptureImg: "../../assets/mine/headSculpture.png",
      }],
      revise2:[{
        name:"修改名称",
        text:"张羽文"
      },
        {
          name: "修改手机",
          text: "13011112222"
        },
        {
          name: "修改密码",
          text: ""
        }]  
  },
  toheadSculpture:function(){
    wx.navigateTo({
      url: '/pages/modifyInformation/headSculpture?touxiang=' + this.data.revise1[0].reviseHeadSculptureImg,
    })
  },
  click: function (e) {
    var index =e.currentTarget.dataset.index;
    if(index==0){
      wx.navigateTo({
        url: '/pages/modifyInformation/name?name=' + this.data.revise2[index].text
      })
    } else if (index == 1) {
      wx.navigateTo({
        url: '/pages/modifyInformation/tel?tel=' + this.data.revise2[index].text
      })
    } else{
      wx.navigateTo({
        url: '/pages/modifyInformation/password'
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