// pages/account/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    "silTransfBoxHidden" : true
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
  
  },
  // 跳转至 个人设置 accountSetting
  JumpTo: function (ops) {
    wx.navigateTo({
      url: "accountSetting/index"
    })
  },

  // 兑换框显示
  showsilTransfBox : function(){
    if(this.data.silTransfBoxHidden){
      this.setData({
        "silTransfBoxHidden" : false
      })
    }
  },

  // 取消兑换狂
  canclesliTransfBox : function(){
    if (!this.data.silTransfBoxHidden){
      this.setData({
        "silTransfBoxHidden": true
      })
    }
  },

  // 存取 (跳转至背包)
  JumpToMyBag: function() {
    wx.switchTab({
      url: "myBag/index"
    })
  },

  // 充值
  JumpToRecharge : function(){
    wx.navigateTo({
      url : "userMoney/index"
    })
  },
  
  // 我的收益
  JumpToEarnings : function(){
    wx.navigateTo({
      url : 'myEarnings/index'
    })
  },

  // 我的竞猜
  JumpToMyMatch : function(){
    wx.navigateTo({
      url : 'myMatch/index'
    })
  },

  // 我的推荐
  JumpToMyRecommend: function () {
    wx.navigateTo({
      url: 'myRecommend/index'
    })
  },

  // 资产摘要
  JumpToMyAssets: function () {
    wx.navigateTo({
      url: 'myAssets/index'
    })
  },

  // 消息中心
  JumpToMsgCenter: function () {
    wx.navigateTo({
      url: 'msgCenter/index'
    })
  },

  // 常见问题
  JumpToProblem: function () {
    wx.navigateTo({
      url: 'problem/index'
    })
  },
})