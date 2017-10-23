// pages/roll/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperPage: 0,
    roomImg : [
      [
        "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005A1O.png",
        "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005A1O.png",
        "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005A1O.png",
        "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005GBU.png"
      ]
    ]
  },

  // 滑动时 双向绑定 根据 current值 改变 swiperPage (周数据/总数据)
  swiperData: function (e) {
    var val = e.detail.current;
    this.setData({
      swiperPage: val
    });
    console.log(this.data.swiperPage)
  },

  switch0: function () {
    if (this.data.swiperPage != 0) {
      this.setData({
        swiperPage: 0
      })
    }
  },

  switch1: function () {
    if (this.data.swiperPage != 1) {
      this.setData({
        swiperPage: 1
      })
    }
  },

  switch2: function () {
    if (this.data.swiperPage != 2) {
      this.setData({
        swiperPage: 2
      })
    }
  },

  switch3: function () {
    if (this.data.swiperPage != 3) {
      this.setData({
        swiperPage: 3
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