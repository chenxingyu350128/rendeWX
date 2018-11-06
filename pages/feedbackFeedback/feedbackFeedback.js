// pages/feedbackFeedback/feedbackFeedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:0,
    classifyList:[
      "功能建议",
      "性能问题",
      "其它"
    ],
    photos: [],
  },
  choose:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index)
    if(index==0){
      this.setData({
        classify:0
      })
    } else if (index == 1){
      this.setData({
        classify:1
      })
    }else{
      this.setData({
        classify:2
      })
    }
  },
  chooseImage: function () {
    var that = this;
    var items = that.data.photos;
    wx.chooseImage({
      count: 1, // 一次可提交最多1张照片   默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;

        for (var i = 0; i < tempFilePaths.length; i++) {
          items.push({
            src: tempFilePaths[i]
          });
        }
        that.setData({
          photos: items
        });
      }
    })
  },
  previewImage: function (e) {
    const idx = e.target.dataset.idx
    const photos = this.data.photos
    var imgArr = [];
    for (var i = 0; i < photos.length; i++) {
      //预览图片的数组
      imgArr.push(photos[i].src);
    }
    wx.previewImage({
      current: imgArr[idx],//预览当前的图片
      urls: imgArr
    })
  },
  removeImage(e) {
    const idx = e.currentTarget.dataset.idx
    var photos = this.data.photos
    photos.splice(idx, 1)
    this.setData({
      photos: photos
    })
  },
  submit:function(){
    wx.navigateBack()
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