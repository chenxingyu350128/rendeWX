// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentWordNumber1: 0,
    currentWordNumber2: 0,
    max: 140, //最多字数
    txtRealContent1: '',
    txtContent1: '1、建筑相关专业毕业，3年以上现场安全管理经验 2、持有相关证书',
    txtRealContent2: '',
    txtContent2: '一、协助工程部对公司在建工程的安全管理，对施工现场出现的安全问题给予指出并纠正。二、贯彻执行国家地方有关主管部门关于安全的方针政策、规范、制度的规定，坚持“安全预防为主”的方针',
  },
  toAddBenefits:function(){
    wx.navigateTo({
      url: '../addBenefits/addBenefits',
    })
  },
  txtInput1(e) {
    this.setData({ txtContent1: e.detail.value })
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber1: len //当前字数
    });
  },
  txtInput2(e) {
    this.setData({ txtContent2: e.detail.value })
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber2: len //当前字数
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options,e) {
    var txtContent1 = this.data.txtContent1
    var txtContent2 = this.data.txtContent2
    var len1 = parseInt(txtContent1.length);
    var len2 = parseInt(txtContent2.length);
    this.setData({
      currentWordNumber1: len1,
      currentWordNumber2: len2
    });
    var currentWordNumber1 = this.data.currentWordNumber1
    var currentWordNumber2 = this.data.currentWordNumber2
    this.setData({
      txtRealContent1: txtContent1,
      txtRealContent2: txtContent2,
      currentWordNumber1: currentWordNumber1,
      currentWordNumber2: currentWordNumber2
    })
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