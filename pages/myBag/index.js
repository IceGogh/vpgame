// pages/myBag/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectItemArray: [],
    DotaOrCsgo: 0,
    QualityList: true,
    selectBag : true,
    imgData: [
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "0.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005G7O.png",
        "val": "0.55",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.13",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "3.03",
        "valColor": "#8847ff"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00056I7.png",
        "val": "0.03",
        "valColor": "#e4ae39"
      },
      {
        "img": "http://vip-t-account.oss-cn-hangzhou.aliyuncs.com/files/170314/X00057BL.png",
        "val": "1.03",
        "valColor": "#8847ff"
      }
    ]
  },

  // 选择 DOTA2 或者 GSGO饰品分类 switchDotaOrCsgo
  switchDotaOrCsgo: function (e) {
    var key = e.detail.current
    this.setData({
      DotaOrCsgo: key
    })
  },

  selDota: function () {
    this.setData({
      DotaOrCsgo: 0
    })
  },

  selCsgo: function () {
    this.setData({
      DotaOrCsgo: 1
    })
  },

  // 选择背包类型 steam背包/ vip背包 / 饰品兑换
  selBag : function(){
    this.setData({
      selectBag: !this.data.selectBag
    })
  },

  // 品质分级选择
  slcQuality: function () {
    this.setData({
      QualityList: !this.data.QualityList
    })
  },

  // 选择饰品
  selectItem: function (e) {
    var ind = e.currentTarget.dataset.ind;
    var arr = this.data.selectItemArray;
    arr[ind] = !arr[ind];
    this.setData({
      selectItemArray: arr
    })
  },

  // 页面后退
  goBack: function (ops) {
    wx.navigateBack();
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