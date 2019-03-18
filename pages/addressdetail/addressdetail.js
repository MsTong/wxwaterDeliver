// pages/addressdetail/addressdetail.js
const { $Toast } = require('../../dist/base/index');
const api = require('../../utils/api.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    region: [],
    customItem: '全部',
    index: 0,
    showTips:false,
    actions: [
      {
        name: '取消'
      },
      {
        name: '删除',
        color: '#ed3f14',
        loading: false
      }
    ],
    nowAddress: {
      name: '',
      phone: '',
      region: '',
      address: ''
    },
    titleObj: { name: '收货人', phone: '联系电话', region: '区域', address: '详细地址' }
  },
  selectRegion() {

  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit(e) {
    for (let [index, val] of Object.entries(e.detail.value)) {
      if (val === '') {
        $Toast({
          content: this.data.titleObj[index] + '不得为空'
        })
        return false
      }
      this.setData({ flag: true })
    }
    if (this.data.flag) {
      api._get('customer/addAddress').then(res => {
        if (res.code !== 0) {
          $Toast({
            content: res.msg
          });
        }
      }).catch(e => {
       
        console.log(e)
      })
    }
    wx.navigateBack({
      delta: 1
    })
  },
  showTips(e) {
      this.setData({showTips:true})
  },
  doDelete({ detail }) {
    console.log(detail)
    if (detail.index === 0) {
      this.setData({
        showTips: false
      });
    } else {
      const action = [...this.data.actions];
      action[1].loading = true;

      this.setData({
        actions: action
      });
      // api._get('customer/deleteAddress').then(res => {
      //   if (res.code !== 0) {
      //     $Toast({
      //       content: res.msg
      //     });
      //     return false
      //   }
        action[1].loading = false;
        this.setData({
          showTips: false,
          actions: action
        });
        $Toast({
          content: '删除成功！',
          type: 'success'
        });
        wx.navigateBack({
          delta: 1
        })
      // }).catch(e => {
      //   console.log(e)
      // })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.add) {
      this.setData({ add: options.add })
      wx.setNavigationBarTitle({
        title: '新增配送地址'
      })
      return false;
    }
    this.setData({nowAddress: app.data.nowAddress})
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