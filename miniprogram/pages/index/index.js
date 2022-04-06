// pages/index/index.js
wx.cloud.init({
  env:"cloud1-3g8ktzem111ecee4",
  traceUser:"true",
})
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mgList:'',
    noticeList:'',
    hotFoodsList:''
  },
  // 点击跳转‘美食优选’界面
  getFoodList:function(){
    wx.navigateTo({
      url: '../foods/foods',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection("banner_swiper").get({
      success:(res)=>{
        // console.log(res);
        this.setData({
          mgList:res.data
        })
      }
    }),
    db.collection("notice").get({
      success:(res)=>{
        // console.log(res);
        this.setData({
          noticeList:res.data
        })
      }
    }),
    db.collection("hotFoods").get().then((res)=>{
      console.log(res);
      this.setData({
        hotFoodsList:res.data
      })
    })
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