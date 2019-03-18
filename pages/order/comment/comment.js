// pages/order/comment/comment.js
const { $Toast } = require('../../../dist/base/index');
Page({
  data: {
    proRate: 0,
    sendRate: 0,
    commentText: '',
    titleObj: { proRate: '商品评价', sendRate: '配送评价', commentText: '评论内容' }
  },
  onChange(e) {
    let item = e.currentTarget.dataset.item
    if (item === 'commentText') {
      this.setData({
        'commentText': e.detail.value
      })
    } else if (item === 'proRate') {
      this.setData({
        'proRate': e.detail.index
      })
    } else if (item === 'sendRate') {
      this.setData({
        'sendRate': e.detail.index
      })
    }
  },
  doSure() {
    let params = {
      proRate: this.data.proRate,
      sendRate: this.data.sendRate,
      commentText: this.data.commentText
    }
    if (this.data.proRate<1) {
      $Toast({
        content: this.data.titleObj.proRate + '不得为空'
      })
      return false;
    } else if (this.data.sendRate<1) {
      $Toast({
        content: this.data.titleObj.sendRate + '不得为空'
      })
      return false;
    } else if (this.data.commentText=='') {
      $Toast({
        content: this.data.titleObj.commentText + '不得为空'
      })
      return false;
    }
    // if (this.data.flag) {
    //   api._get('customer/addAddress',params).then(res => {
    //     if (res.code !== 0) {
    //       $Toast({
    //         content: res.msg
    //       });
    //     }
    //   }).catch(e => {

    //     console.log(e)
    //   })
      wx.navigateTo({url: '/pages/order/scan/scan'})
    // }
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