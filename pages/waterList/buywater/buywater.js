// pages/buywater/buywater.js
const { $Toast } = require('../../../dist/base/index');
const api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress:true,
    defaultAddress:{name:'tongling',phone:18814183794,address:'四合院'},
    count:1,
    type:'山泉水桶装水',
    simplyPrice:10,
    money:10,
    payInfo: {
      deliverMoney:10,
      countMoney:40,
      voucherMoney:'暂无可用',
      pointsMoney: '暂无可用',
      payMoney:100
    },
    addressInfo: {
      defaultAddress: { name: 'tongling', phone: 18814183794, address: '四合院' },
      dateTime:''
    },
    date:''
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        date: e.detail.value
    })
    this.setData({
      addressInfo: {
        defaultAddress: this.data.addressInfo.defaultAddress,
        dateTime: e.detail.value
      }
    })
  },
  changeCount({ detail }) {
    let money = detail.value * this.data.simplyPrice
    this.setData({
      count: detail.value,
      money:money
    })
  },
  onChange(e) {
    console.log(e)
  },
  toOrder() {
    if (this.data.addressInfo.dateTime=='') {
      $Toast({content:'请选择送水时间！'})
      return false;
    } else if (this.data.count==0) {
      $Toast({ content: '请选择购买数量！' })
      return false;
    }
    let params = {
      count:this.data.count,
      type: this.data.type,
      addressInfo: this.data.addressInfo,
      payInfo: this.data.payInfo
    }
    console.log(params)
    // api._get('customer/orderWater',params).then(res => {
    //   if (res.code !== 0) {
    //     $Toast({
    //       content: res.msg
    //     });
    //   }
    //   this.setData({ defaultAddress: res.data.addressList[0] })
    // }).catch(e => {
    //   $Toast({
    //     content: e
    //   });
    //   console.log(e)
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // api._get('customer/getAddressList').then(res => {
    //   if (res.code !== 0) {
    //     $Toast({
    //       content: res.msg
    //     });
    //   }
    //   this.setData({ defaultAddress: res.data.addressList[0] })
    // }).catch(e => {
    //   $Toast({
    //     content: e
    //   });
    //   console.log(e)
    // })

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