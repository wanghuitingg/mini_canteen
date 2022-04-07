// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    openid: '',
  },
  // 获取用户信息
  getUserInfo(e) {
    console.log(e);
    this.setData({
      username: e.detail.userInfo.nickName
    })
  },
  getopenid() {
    var that = this;
    wx.cloud.callFunction({
      name: 'open',
      success: (res) => {
        var usid = res.result.openid
        console.log(usid)
        this.setData({
          openid: res.result.openid,
        })
        getApp().globalData.userid = res.result.openid
      },
      fail(res) {
        console.log("获取失败", res);
      }
    })
  },
  // 跳转“个人资料”
  getPersonalInfo:function(e){
    wx.navigateTo({
      url: '../personalInfo/personalInfo',
    })
  },
  // 跳转“帮助中心”
  help:function(e){
    wx.navigateTo({
      url: '../help/help',
    })
  },
  // 跳转“意见反馈”
  feedback:function(e){
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },
    // 跳转页面“关于我们”
    aboutUs:function(e) {
      wx.navigateTo({
        url: '../aboutUs/aboutUs',
      })
    },
    // 跳转“商家管理”
    management:function(e){
      wx.navigateTo({
        url: '../management/management',
      })
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