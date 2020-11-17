// pages/index2/index2.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    musicMsg:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    backgroundAudioManager.title = '再见二丁目'
    backgroundAudioManager.epname = '再见二丁目'
    backgroundAudioManager.singer = '杨千嬅'
    backgroundAudioManager.coverImgUrl = 'http://p1.music.126.net/afjQwekhKMBiLOOQz56TLA==/7836219371362214.jpg?param=130y130'
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = 'https://m801.music.126.net/20201117225644/486c9343916d605e0030e3193e31139c/jdyyaac/035d/530e/525b/471bf349abddd04a6d98e1f626015468.m4a'
    backgroundAudioManager.play()

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