// pages/account/earnings/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "selStatus" : 1
  },

  //  我的收益 - 周/总 数据统计切换
  changeSelStatus1 : function(){
    if (this.data.selStatus != 1){
      this.setData({
        "selStatus" : 1
      })
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
    //  canvas 绘制画布
    var cvs1 = wx.createCanvasContext('weekCanvas');
        // cvs2 = wx.createCanvasContext('totalCanvas');
    
    // 设置线条颜色
    cvs1.setStrokeStyle("#eeeeee");

    // 原点位置 canvas的边长/2  54像素单位 = 108rpx
    cvs1.translate(54, 54);

    // 线条宽度 
    cvs1.setLineWidth(3);

    // 第一遍圆圈
    cvs1.beginPath();

    // arc(x, y, 半径， 开始位置， 结束位置， false默认顺时针运动)
    cvs1.arc(0, 0, 52, 0, 2* Math.PI, false);
    cvs1.closePath();
    // 描绘出点的路径
    cvs1.stroke();

    // 百分比呈现 绘制第二层(百分比)圆
    cvs1.setStrokeStyle("#ee7142");
    cvs1.rotate(Math.PI/-2);  // 旋转回开始位置为12点
    cvs1.setLineWidth(3);
    
    cvs1.beginPath();
    // 50% 半圆
    cvs1.arc(0, 0, 52, 0,  Math.PI, false);
    cvs1.stroke();
    cvs1.closePath();   // 首尾不相连(封闭画法) 先 stroke 后 closePath
    cvs1.draw();
    
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