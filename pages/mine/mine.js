Page({
  data: {
    visible:false,
    userInfos:{
      rate:100,
      region:'天河区'
    },
    contentArr: [{
      title: '我的配送',
      itemArr: [{
        itemName: '待配送',
        imagePath: '/images/mine/nopay.png',
        url: '/pages/order/order?current=1'


      }, {
        itemName: '配送中',
        imagePath: '/images/mine/sending.png',
          url: '/pages/order/order?current=2'


      }, {
        itemName: '已配送',
        imagePath: '/images/mine/nosend.png',
          url: '/pages/order/order?current=3'


      }, {
        itemName: '全部配送',
        imagePath: '/images/mine/nopay.png',
          url: '/pages/order/order?current=0'
      }]
    }, {
        title: '我的工具',
        itemArr: [{
          itemName: '扫一扫',
          imagePath: '/images/mine/sao.png',
          url: '/pages/scan/scan'
        }, {
          itemName: '配送收益',
          imagePath: '/images/mine/balance.png',
          url: '/pages/income/income'

        }, {
          itemName: '仓库数据',
            imagePath: '/images/mine/warehouse.png',
          url: '/pages/warehouse/warehouse'
        }]
      }],
    userInfo: '',
    level:1,
    weight: wx.getSystemInfoSync().windowWidth - 220
  },
  changeregion() {
    console.log(99)
    // wx.navigateTo({
    //   url: '/pages/rechargeList/rechargeList',
    // })
  },
  onLoad: function (options) {
    //加载用户信息赋值给userInfo

  },
  enterLevel() {
  },
  toDetail(event) {
    console.log(event)
    if (event.currentTarget.dataset.item.itemName==='客服') {
      this.setData({ visible:true})
      return false
    }
    const jumpUrl = event.currentTarget.dataset.item.url
    wx.navigateTo({
      url: jumpUrl
    })
  },
  toaddress() {
    wx.navigateTo({
      url: "/pages/address/address"
    })
  },
  toaddorder() {
    wx.navigateTo({
      url: "/pages/order/order"
    })
  },
  todoingorder() {
    wx.navigateTo({
      url: "/pages/order/doingorder/doingorder"
    })
  },
  towaitorder() {
    wx.navigateTo({
      url: "/pages/order/waitorder/waitorder"
    })
  },
  handleClose() {
    this.setData({
      visible: false
    });
  },
})