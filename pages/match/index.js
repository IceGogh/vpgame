// pages/table/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    array:['DOTA2','CSGO','SPORT','我的竞猜'],
    oIndex:'0',//轮播索引值
    momArray:[1,2,3],
    cldArray:[1,2,3],
    cldIndex: -1,
    momKeyAry:[],//此处为画圆记录
    
    //圆的比例
    ballAry:[
      [30,70],
      [40,60],
      [80,20]
    ],
    hgt:600
  },

  //table点击
  table: function(e){ 
    var idx = e.target.dataset.index;
    if (idx == 3) {
      // console.log('跳转')
      return false;
    }
    this.doTable(idx);
  },
  //轮播
  bindChange:function(e){
    this.doTable(e.detail.current);
  },
  //table 轮播的 双向绑定
  doTable: function(pro){
    this.setData({
      oIndex: pro
    })
  },
  //母盘点击事件
  momClc: function(e){
    var ind = e.currentTarget.dataset.indx;
    // this.data.momKeyAry[ind] = !this.data.momKeyAry[ind];
    this.data.momKeyAry[ind] = true;
    this.setData({
      momKeyAry: this.data.momKeyAry,
      cldIndex : ind
    })
  },
  //test
  hua: function(){
    return this;
  },
  huahua: function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hua().huahua(); 
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