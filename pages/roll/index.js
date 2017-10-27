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
        "https://roll.vipgame.com/mobile/static/roll/images/more.jpg"
      ]
    ],
    playerRoomDataPage : 1,
    roomImglist : [],
    loadFlag : true,
    playerDataArr : [],
    playerDataArrVal : {},
    roomImgCheck : false,
  },
  
  // 滑动时 双向绑定 根据 current值 改变 swiperPage (周数据/总数据)
  swiperData: function (e) {
    var val = e.detail.current;
    this.setData({
      swiperPage: val
    });
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

  // 创建房间
  createRoom : function(){
    wx.navigateTo({
      url : "createRoom/index"
    })
  },


  // **  全局  ** 数据加载中样式
  dataGetting : function(){
    wx.showLoading({
      title: '数据加载中..'
    })
  },

  // **  全局  ** 取消数据加载中(请求完成)
  dataGettingComplate : function(){
    setTimeout(function(){
      wx.hideLoading()
    }, 400)
  },


  // 下滑触底 加载下一页数据
  loadNextPageData : function(e){
    if (!this.data.loadFlag){
      return false;
    }
    this.dataGetting();
    this.setData({
      loadFlag : false
    })
    
    var that = this
      , dataPage = this.data.playerRoomDataPage
      , arr = this.data.playerDataArr;
    
    wx.request({
      url: 'https://roll.steampp.com/m/server/getList?page=' + dataPage,
      success: function (res) {
        that.setData({
          loadFlag : true
        })
        that.dataGettingComplate();
        var imgArr = res.data[0].content;
        
        for (var i in imgArr) {
          arr.push(i)
          if (imgArr[i].inventory.length > 4) {
            imgArr[i].inventory = imgArr[i].inventory.slice(0, 3)
          }
        }
        that.data.playerDataArrVal = Object.assign(that.data.playerDataArrVal, res.data[0].content)
        dataPage++;
        that.setData({
          playerDataArr: arr,
          roomImglist: that.data.playerDataArrVal,
          playerRoomDataPage: dataPage
        });

      },
      fail: function (e) {
        console.log(e)
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this
      , dataPage = this.data.playerRoomDataPage
      , arr = this.data.playerDataArr;

    wx.request({
      url: 'https://roll.steampp.com/m/server/getList?page=' + dataPage,
      success: function (res) {
     
        var imgArr = res.data[0].content;

        for (var i in imgArr) {
          arr.push(i)
          if (imgArr[i].inventory.length > 4) {
            imgArr[i].inventory = imgArr[i].inventory.slice(0, 3)
          }
        }
        that.data.playerDataArrVal = Object.assign(that.data.playerDataArrVal, res.data[0].content)
        dataPage++;
        that.setData({
          playerDataArr: arr,
          roomImglist: that.data.playerDataArrVal,
          playerRoomDataPage: dataPage
        });

      },
      fail: function (e) {
        console.log(e)
      }
    });
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