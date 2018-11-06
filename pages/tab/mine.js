// pages/tab/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    client: 2,//1代表求职者//2代表企业//3代表猎头
    personalInfo:[{
      headSculpture:"../../assets/mine/headSculpture.png",
      name:"张羽文",
      telImg:"../../assets/mine/tel.png",
      tel:"13011112222",
      enter: '一个灰常牛逼的企业',
      enterImg: '../../assets//mine/enterImg.png'
    }],
    List:[{
      title: "联系我们",
      listItem: [
        {
          id:1,
          img: "../../assets/mine/contactCustomerService.png",
          text: "联系客服"
        },
        {
          id: 2,
          img: "../../assets/mine/feedbackFeedback.png",
          text: "意见反馈"
        },
        {
          id: 3,
          img: "../../assets/mine/aboutUs.png",
          text: "关于我们"
        }]
    },{
        title: "其它",
        listItem: [
          {
            id: 4,
            img: "../../assets/mine/message.png",
            text: "消息"
          },
          {
            id: 5,
            img: "../../assets/mine/newsInformation.png",
            text: "新闻资讯"
          },
          {
            id: 6,
            img: "../../assets/mine/change.png",
            text: "我的兑换"
          }]
    }]
    
  },
  click1:function(e){
    var index = e.currentTarget.dataset.index;
    let client = this.data.client;
    if (index == 0 && (client == 1 || client == 3)){
      wx.navigateTo({
        url: '../collectionPosition/collectionPosition',
      })
    } else if (index == 1 && (client == 1 || client == 3)){
      wx.navigateTo({
        url: '../collectionEnterprise/collectionEnterprise',
      })
    } else if (index == 2 && client == 1){
      wx.navigateTo({
        url: '../deliverySchedule/deliverySchedule',
      })
    } else if (index == 2 && client == 3) {
      wx.navigateTo({
        url: '../entrust/entrust',
      })
    } else if (index == 3 && client == 2) {
      wx.navigateTo({
        url: '../reviseEnterprise/reviseEnterprise',
      })
    }  else if ((index == 3 && (client == 1 || client == 3)) || index == 2 && (client == 2)){
      wx.navigateTo({
        url: '../setting/setting',
      })
    }
    else if (index == 0 && client == 2) {
      wx.navigateTo({
        url: '/pages/recruitingPosition/recruitingPosition',
      })
    } else if (index == 1 && client == 2) {
      wx.navigateTo({
        url: '/pages/collectedResumes/collectedResumes',
      })
    }
  },
  click21: function () {
    wx.navigateTo({
      url: '../talent/resume',
    })
  },
  click22: function () {
    wx.navigateTo({
      url: '/pages/post/post',
    })
  },
  click3:function(e){
    var id = e.currentTarget.dataset.id;
    if (id == 1) {
      wx.navigateTo({
        url: '../contactCustomerService/contactCustomerService',
      })
    } else if (id == 2) {
      wx.navigateTo({
        url: '../feedbackFeedback/feedbackFeedback',
      })
    } else if (id == 3) {
      wx.navigateTo({
        url: '../aboutUs/aboutUs',
      })
    } else if (id == 4) {
      wx.navigateTo({
        url: '../message/message',
      })
    } else if (id == 5){
      wx.navigateTo({
        url: '/pages/common/wpInfo',
      })
    }else{
      wx.navigateTo({
        url: '../myExchange/myExchange',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let client = this.data.client;
    if(client == 1){
      this.setData({
        topbtnList: [{
          id: 1,
          img: "../../assets/mine/collectionPosition.png",
          text: "收藏职位"
        },
        {
          id: 2,
          img: "../../assets/mine/collectionEnterprise.png",
          text: "收藏企业"
        },
        {
          id: 3,
          img: "../../assets/mine/deliverySchedule.png",
          text: "投递进度"
        },
        {
          id: 4,
          img: "../../assets/mine/setting.png",
          text: "设置"
        }],
      })
    }
    else if (client == 2){
      this.setData({
        topbtnList: [{//企业端
          id: 1,
          img: "../../assets/mine/collectionPosition.png",
          text: "发布的职位"
        },
        {
          id: 5,
          img: "../../assets/mine/resumeImg.png",
          text: "收到的简历"
        },
        {
          id: 4,
          img: "../../assets/mine/setting.png",
          text: "设置"
        },
        {
          id: 2,
          img: "../../assets/mine/collectionEnterprise.png",
          text: "公司资料"
        }],
      })
    }
    else if (client == 3){
      this.setData({
        topbtnList: [{//猎头端
          id: 1,
          img: "../../assets/mine/collectionPosition.png",
          text: "收藏职位"
        },
        {
          id: 2,
          img: "../../assets/mine/collectionEnterprise.png",
          text: "收藏企业"
        },
        {
          id: 6,
          img: "../../assets/mine/getEntrust.png",
          text: "收到委托"
        },
        {
          id: 4,
          img: "../../assets/mine/setting.png",
          text: "设置"
        }],
      })
    }
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