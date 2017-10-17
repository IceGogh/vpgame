// pages/account/earnings/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "selStatus" : 0,
    "weekpercent" : '70',
    "totalpercent": '30',
    "rollDeg" : 225,
    "rollDeg2": 50,
    "rollTime" : 1000,
    "weekRateRotateL" : '',
    "weekRateRotateR" : '',
    "totalRateRotateL": '',
    "totalRateRotateR" : '',
    "RzIndex" : 80,
    "RzIndex2": 80,
  },

  //  我的收益 - 周/总 数据统计切换
  changeSelStatus1 : function(){
    if (this.data.selStatus != 1){
      this.setData({
        "selStatus" : 1
      });
    }
  },
  changeSelStatus0: function () {
    if (this.data.selStatus != 0) {
      this.setData({
        "selStatus": 0
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
    //  周数据统计
    this.weekRateRotateL = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: this.data.rollTime,
      timingFunction: 'linear',
    });

    this.weekRateRotateR = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: this.data.rollTime * (this.data.rollDeg - 180) / 180,
      timingFunction: 'linear',
    });

    //  总数据统计
    this.totalRateRotateL = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: this.data.rollTime,
      timingFunction: 'linear',
    });

    this.totalRateRotateR = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: this.data.rollTime * (this.data.rollDeg2 - 180) / 180,
      timingFunction: 'linear',
    });

    this.rotateL(this.data.rollDeg);
    this.rotateL2(this.data.rollDeg2)

  },

  // 滑动时 双向绑定 根据 current值 改变 selStatus值 (周数据/总数据)
  swiperData : function(e){
    var val = e.detail.current;
    this.setData({
      selStatus : val
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (){
    
  },

  //  周数据 左半圆 
  rotateL: function (deg) {
    if (deg > 180) {
      this.weekRateRotateL.rotate(180).step();
      this.setData({
        weekRateRotateL: this.weekRateRotateL.export()
      });
      var _this = this;
      var tm = this.data.rollTime
      setTimeout(function () {
        _this.setData({
          RzIndex: 160
        });
        _this.rotateR(deg - 180)
      }, tm)
    } else {
      this.weekRateRotateL.rotate(deg).step();
      this.setData({
        weekRateRotateL: this.weekRateRotateL.export()
      });
    }
  },

  //  周数据  右半圆
  rotateR: function (deg) {
    this.weekRateRotateR.rotate(deg).step();
    this.setData({
      weekRateRotateR: this.weekRateRotateR.export()
    })
  },


  //  总数据  左半圆
  rotateL2: function (deg) {
    if (deg > 180) {
      this.totalRateRotateL.rotate(180).step();
      this.setData({
        totalRateRotateL: this.totalRateRotateL.export()
      });
      var _this = this;
      var tm = this.data.rollTime
      setTimeout(function () {
        _this.setData({
          RzIndex2: 160
        });
        _this.rotateR2(deg - 180)
      }, tm)
    } else {
      this.totalRateRotateL.rotate(deg).step();
      this.setData({
        totalRateRotateL: this.totalRateRotateL.export()
      });
    }
  },

  // 总数据  右半圆
  rotateR2: function (deg) {
    this.totalRateRotateR.rotate(deg).step();
    this.setData({
      totalRateRotateR: this.totalRateRotateR.export()
    })
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