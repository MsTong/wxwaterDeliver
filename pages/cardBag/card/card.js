// pages/cardBag/card/card.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      card:[{
        money:100,
        limitCount:2,
        title:'可抵扣配送费',
        limitDate:1000000000000
      },
        {
          money: 100,
          limitCount: 2,
          title: '可抵扣商城商品',
          limitDate: 1000000000000
        },
        {
          money: 100,
          limitCount: 2,
          title: '可抵扣商城商品',
          limitDate: 1000000000000
        }]
    },
    formatTime(newDateTime) {
      var date = new Date(newDateTime)
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      return year + "年" + month + "月" + day + "日"
    },
  toPurchase() {
      console.log('去购买')
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let tempCard = this.data.card
      tempCard.map(item => {
        item.limitDate = this.formatTime(item.limitDate)
      })
      this.setData({card:tempCard})
      wx.setNavigationBarTitle({
        title: options.title
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