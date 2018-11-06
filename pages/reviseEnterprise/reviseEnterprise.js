// pages/reviseEnterprise/reviseEnterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 140, //最多字数
    currentWordNumber2: 0,
    txtRealContent2: '',
    txtContent2: '一、协助工程部对公司在建工程的安全管理，对施工现场出现的安全问题给予指出并纠正。二、贯彻执行国家地方有关主管部门关于安全的方针政策、规范、制度的规定，坚持“安全预防为主”的方针。三、认真检查督促施工现场的安全生产的劳动保护及各项安全规定的落实。四、参加施工方案忠安全生产技术措施的条款立定工作，检查督促条款的实施，负责安全措施标识的管理和使用，及时记录好安全台账。五、负责公司在建项目的常规安全检查活动，并做好检查记录。协助落实奖罚措施，对违章现象进行制止，对一般事故作出处理和记录。六、对进入施工现场的新工人进行安全教育及日常生产的安全教育工作。',
  },
  toAddBenefits: function () {
    wx.navigateTo({
      url: '../addBenefits/addBenefits',
    })
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
  onLoad: function (options, e) {

    var txtContent2 = this.data.txtContent2
    var len2 = parseInt(txtContent2.length);
    this.setData({
      currentWordNumber2: len2
    });
    var currentWordNumber2 = this.data.currentWordNumber2
    this.setData({
      txtRealContent2: txtContent2,
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