// pages/account/myAssets/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected : -1,
    selectItemWords : [
      ["收支类型", "赏金渠道", "时间"],
      ["收支类型", "碎银渠道", "时间"],
      ["充值渠道", "", "时间"]
    ],

    selectWd : [
      [
        ["全部", "收入", "支出"],
        ["全部", "竞猜", "商城", "石头剪刀布", "趣味宝箱", "激爆骰子乐", "饰品兑换"],
        ["全部", "昨天", "一周内", "本月"]
      ],
      [
        ["全部", "收入", "支出"],
        ["全部", "签到赠送", "兑换赏金"],
        ["全部", "昨天", "一周内", "本月"]
      ],
      [
        ["全部", "支付宝", "财付通", "微信支付", "银行卡"],
        [],
        ["全部", "昨天", "一周内", "本月"]
      ]
    ],
    assetMoneyData : [

      {
        "time" : "2017/09/04",
        "kind" : "竞猜",
        "matchName": "[ELeague_让分局 Renegades -1.5]   Broken Alliance BO 3 Renegades",
        "data" : "574"
      },
      {
        "time": "2017/09/02",
        "kind": "竞猜",
        "matchName": "[夏季世界大学生运动会-男子_大小分 178.5]   塞尔维亚 BO 1 美国",
        "data": "-44"
      },
      {
        "time": "2017/09/02",
        "kind": "竞猜",
        "matchName": "[夏季世界大学生运动会-男子_大小分 178.5]   塞尔维亚 BO 1 美国",
        "data": "-44"
      },
      {
        "time": "2017/09/02",
        "kind": "竞猜",
        "matchName": "[夏季世界大学生运动会-男子_大小分 178.5]   塞尔维亚 BO 1 美国",
        "data": "-44"
      },
      {
        "time": "2017/08/14",
        "kind": "竞猜",
        "matchName": "[The International 2017_猜胜负]   Dire Team BO 1 Radiant Team",
        "data": "-3"
      }

    ],
    assetSilData: [
      {
        "time": "2017/03/14",
        "kind": "签到赠送",
        "matchName": "[ELeague_让分局 Renegades -1.5]   Broken Alliance BO 3 Renegades",
        "data": "574"
      },
      {
        "time": "2017/09/02",
        "kind": "竞猜",
        "matchName": "[夏季世界大学生运动会-男子_大小分 178.5]   塞尔维亚 BO 1 美国",
        "data": "-44"
      },
      {
        "time": "2017/08/14",
        "kind": "竞猜",
        "matchName": "[The International 2017_猜胜负]   Dire Team BO 1 Radiant Team",
        "data": "-3"
      },
    ],
    assetRechargeData: [
      {
        "time": "2017/03/14",
        "kind": "微信支付",
        "matchName": "3202171020",
        "data": "50"
      },
      {
        "time": "2017/09/02",
        "kind": "竞猜",
        "matchName": "[夏季世界大学生运动会-男子_大小分 178.5]   塞尔维亚 BO 1 美国",
        "data": "-44"
      },
      {
        "time": "2017/08/14",
        "kind": "竞猜",
        "matchName": "[The International 2017_猜胜负]   Dire Team BO 1 Radiant Team",
        "data": "-3"
      },
    ],
    JSON : {
      "s00" : 0,
      "s01" : 0
    },
    s00: 0,
    s01: 0,
    s02: 0,
    s10: 0,
    s11: 0,
    s12: 0,
    s20: 0,
    s22: 0,

    assetKind : 0
  },

  // 选择资产分类几率 switchAssetKind
  switchAssetKind : function(e){
    var Current = e.detail.current;
    this.setData({
      assetKind : Current
    })
  },

  // 点击title 切换 switchTap
  switchTap : function(e){
    var Ind = e.target.dataset.nub;
    if (this.data.assetKind !== Ind ){
      this.setData({
        assetKind : Ind,
        selected : -1
      })
    }
  },

  // 根据 title类型筛选 selectBy
  selectBy : function(e){
    var Nub = e.target.dataset.selnub;
    if (this.data.selected != Nub){
      this.setData({
        selected : Nub
      })
    }else{
      this.setData({
        selected : -1
      })
    }
  },

  // 选择 condition
  selectCondition : function(e){
    console.log(e.target.dataset);
    var Inx = e.target.dataset.indexThird;
    this.setData({
    
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