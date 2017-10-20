// pages/account/myMatch/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    weekOrTotalData : 1,
    weekRate : Math.round(0.6111 * 100),
    totalRate: Math.round(0.48777 * 100),
    selectAllItem: ['全部', 'DOTA2', 'CSGO', '体育赛事'],
    selectAllFlag : true,
    selectAllchooseIndex : 0,
    selectResultItem : ['全部', '进行中', '未开始', '赢', '输'],
    selectResultFlag : true,
    selectResultchooseIndex : 0,
    timeRortFlag : true,
    dataList : [
      {
        "title" : [
          "Elague",
          "2017-10-11 10:17:44" 
        ],
        "result" : [
          "猜胜负",
          "输"
        ],
        "detail" : [
          {
            "team" : [
              "VG" , 0.63 , "IG" , 1.46
            ],
            "accessory" : [
              0.15 , -0.15
            ],
            "money" : [
              1 , 1
            ]
          }
        ],
        "accessoryDetail" : [
          {"title" : "DOTA2"},
          {"du" : "102.3"},
          {
            "img" : [
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
                "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png"

            ]
          }
        ]
      },
      {
        "title" : [
          "Elague",
          "2017-10-11 10:17:44"
        ],
        "result" : [
          "猜胜负",
          "输"
        ],
        "detail" : [
          {
            "team" : [
              "VG" , 0.63 , "IG" , 1.46
            ],
            "accessory" : [
              0.15 , -0.15
            ],
            "money" : [
              1 , 1
            ]
          }
        ],
        "accessoryDetail" : [
          {"title" : "DOTA2"},
          {"du" : "102.3"},
          {
            "img" : [
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
                "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png"

            ]
          }
        ]
      },
      {
        "title" : [
          "Elague",
          "2017-10-11 10:17:44"
        ],
        "result" : [
          "猜胜负",
          "输"
        ],
        "detail" : [
          {
            "team" : [
              "VG" , 0.63 , "IG" , 1.46
            ],
            "accessory" : [
              0.15 , -0.15
            ],
            "money" : [
              1 , 1
            ]
          }
        ],
        "accessoryDetail" : [
          {"title" : "DOTA2"},
          {"du" : "102.3"},
          {
            "img" : [
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png" ,
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170315/X0005C9Q.png",
              "https://vip-account.oss-cn-hangzhou.aliyuncs.com/files/170316/X0005EAH.png"

            ]
          }
        ]
      }

    ],
   
    accessoryCheckNub : -1
  
  },

  // 选择 week 周数据统计
  selWeekData : function(){
    if (this.data.weekOrTotalData !== 1){
      this.setData({
        weekOrTotalData : 1
      })
    }
  },

  // 选择 total 总数据统计
  selTotalData : function () {
    if (this.data.weekOrTotalData !== 0) {
      this.setData({
        weekOrTotalData : 0
      })
    }
  },

  // cavs 胜率 周/总 切换
  switchRate : function(){
    this.setData({
      weekOrTotalData: !this.data.weekOrTotalData
    })
  },

  // timeSort 按时间排序
  timeRort : function(){
    if (!this.data.selectAllFlag || !this.data.selectResultFlag){
      this.setData({
        selectAllFlag : true,
        selectResultFlag : true
      })
    }
    this.setData({
      timeRortFlag: !this.data.timeRortFlag
    })
  },

  // 打开selectAllchoose选框
  selectAlloption : function(){
    if (!this.data.selectResultFlag){
      this.setData({
        selectResultFlag: true
      })
    }
    this.setData({
      selectAllFlag: !this.data.selectAllFlag
    })
  },

  // 打开selectResultchoose选框
  selectResultoption: function () {
    if (!this.data.selectAllFlag) {
      this.setData({
        selectAllFlag: true
      })
    }
    this.setData({
      selectResultFlag: !this.data.selectResultFlag
    })
  },

  // selectAllchoose 选择比赛项目类型
  selectShow: function(e){
    var val = e.target.dataset.index;
    this.setData({
      selectAllchooseIndex: val,
      selectAllFlag: !this.data.selectAllFlag
    })

  },

  // selectResultchoose 选择比赛结果分类
  selectShow2: function (e) {
    var val = e.target.dataset.index;
    this.setData({
      selectResultchooseIndex: val,
      selectResultFlag: !this.data.selectResultFlag
    })

  },

  // 打开饰品下注明细 accessoryTap
  accessoryTap : function(e){
    var Ind = e.target.dataset.nub
    if (this.data.accessoryCheckNub !== Ind){
      this.setData({
        accessoryCheckNub: Ind
      })
    }else{
      this.setData({
        accessoryCheckNub: -1
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

    function drawing(elm, rate){
      var R = 0;
      var rate = rate/100;
      var drawingTimer = setInterval(function(){
        if (R < rate) {
          elm.setLineWidth(1);
          elm.setStrokeStyle('red');
          elm.beginPath();
          elm.arc(36, 36, 34, -.5 * Math.PI, (-.5 + 2 * R) * Math.PI, false);
          elm.stroke();
          elm.closePath();
          elm.draw(true);
          R += 0.01;
        }else{
          clearInterval(drawingTimer)
        }
      },10)
    }

    var cvs1 = wx.createCanvasContext('weekCvs');
    cvs1.setLineWidth(1);
    cvs1.setStrokeStyle('#979090');
    cvs1.beginPath();
    cvs1.arc(36, 36, 34, 0, 2 * Math.PI, false);
    cvs1.stroke();
    cvs1.closePath();
    cvs1.draw();

    var cvs2 = wx.createCanvasContext('totalCvs');
    cvs2.setLineWidth(1);
    cvs2.setStrokeStyle('#979090');
    cvs2.beginPath();
    cvs2.arc(36, 36, 34, 0, 2 * Math.PI, false);
    cvs2.stroke();
    cvs2.closePath();
    cvs2.draw();

    drawing(cvs1, this.data.weekRate);
    drawing(cvs2, this.data.totalRate);
  },


  // 页面后退
  goBack: function (ops) {
    wx.navigateBack();
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