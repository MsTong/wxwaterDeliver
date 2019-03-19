// pages/order/order.js
const {
  $Toast
} = require('../../dist/base/index');
const api = require('../../utils/api.js')
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '0',
    apiDataList: [{
      orderInfo: {
        orderNo: '12344566777',
        orderType: '桶装水',
        orderStatus: 3,
        luckyCurrency: 0,
        emptyBarrel: 0,
        allPrice: 10,
        count: 1,
        sendTime: '2018年10月1日',
        barrelCount: 1,
        income:22
      },
      addressInfo: {
        name: '佟领',
        phone: '1234565666',
        address: '四合院'
      }
    }, {
      orderInfo: {
        orderNo: '12344566777',
        orderType: '桶装水',
        orderStatus: 1,
        luckyCurrency: 0,
        emptyBarrel: 0,
        allPrice: 10,
        count: 1,
        sendTime: '2018年10月2日',
        barrelCount: 1,
        income: 22
      },
      addressInfo: {
        name: '佟领',
        phone: '1234565666',
        address: '四合院'
      }
    }, {
      orderInfo: {
        orderNo: '12344566777',
        orderType: '桶装水',
        orderStatus: 2,
        luckyCurrency: 0,
        emptyBarrel: 0,
        allPrice: 10,
        count: 1,
        sendTime: '2018年10月3日',
        barrelCount: 1,
        income: 22
      },
      addressInfo: {
        name: '佟领',
        phone: '1234565666',
        address: '四合院'
      }
    }],
    orderList: []
  },
  handleDeliver() {
    console.log(9)
    wx.navigateTo({
      url: '/pages/order/order'
    })
    //发出配送请求
  },
  toOrderDetail(e) {
    //传参
    console.log(e)
    app.data.nowOrder = e.currentTarget.dataset.noworder
    wx.navigateTo({
      url: '/pages/order/orderDetail/orderDetail'
    })
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
    this.select(this.data.current)
  },
  select(index) {
    this.setData({
      orderList: this.data.apiDataList.filter(item => {
        if (index != 0) {
          return item.orderStatus == index
        }
        return true;
      })
    })
  },
  toDetail() {
    wx.navigateTo({
      url: '/pages/order/orderDetail/orderDetail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let current = options.current || 0
    this.setData({
      current: current
    });
    this.select(this.data.current)
    // api._get('customer/getOrderList').then(res => {
    //   if (res.code !== 0) {
    //     $Toast({
    //       content: res.msg
    //     });
    //     return false
    //   }
    //   this.setData({ default: event.currentTarget.dataset.default })
    //   console.log(res)
    // }).catch(e => {
    //   $Toast({
    //     content: e
    //   });
    //   console.log(e)
    // })
    // wx.navigateBack({
    //   delta: 1
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})