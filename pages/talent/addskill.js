// pages/talent/addskill.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      sectectedList: [
      "Angularjs",
      "Angularjs",
      "Angularjs",
      "Angularjs",
      "vue.js",
    ],
  noSectectList: [
    "JS",
    "CSS",
    "HTML",
    "微信小程序",
    "微信小程序2",
    "微信小程序4",
  ],
},

//清除技能
  del:function(e){
    var index = e.currentTarget.dataset.index;
    var sectectedList = this.data.sectectedList;
    var noSectectList = this.data.noSectectList;
    var additem = sectectedList.splice(index, 1);;
    console.log(additem)
    this.setData({
      sectectedList: sectectedList,
      noSectectList: noSectectList.concat(additem)
    })
  },
  //添加技能
  add:function(e){
    var index = e.currentTarget.dataset.index;
    var sectectedList = this.data.sectectedList;
    var noSectectList = this.data.noSectectList;
    var additem = noSectectList.splice(index, 1);;
    console.log(additem)
    this.setData({
      sectectedList: sectectedList.concat(additem),
      noSectectList: noSectectList
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