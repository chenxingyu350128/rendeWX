// pages/addBenefits/addBenefits.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sectectedList: [
      "五险一金",
      "五险一金",
      "五险一金",
      "五险一金",
      "五险一金",
    ],
    noSectectList:[
      "五险一金",
      "五险一XXXXXXXL金",
      "五险一金",
      "五险一金",
      "五险一金",
      "五险一金",

    ],
  },
  del:function(e){
    var index=e.currentTarget.dataset.index;
    var sectectedList = this.data.sectectedList;
    sectectedList.splice(index, 1)
    var noSectectList = this.data.noSectectList;
    var additem = noSectectList[index]
    this.setData({
      sectectedList: sectectedList,
      noSectectList: noSectectList.concat(additem),
    })
  },
  add:function(e){
    var index = e.currentTarget.dataset.index;
    var sectectedList = this.data.sectectedList;
    var noSectectList = this.data.noSectectList;
    var additem=noSectectList[index]
    noSectectList.splice(index, 1)
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