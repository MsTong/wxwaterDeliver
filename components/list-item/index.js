//(Component构造器)
Component({
  //一些组件选项
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  //组件的对外属性，属性设置中可包含三个字段,type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数    
  properties: {
    // 活动封面
    itemObj: {
      type: Object,
      value:{
        title:'',
        subTitle:'',
        score:0,
        createTime:''
      }
    },
    title: {
      type: String,
      value: 'ddd'
    },
    // 活动标题
    subtitle: {
      type: String,
      value: "我是Title"
    },

    // 打卡时间范围
    createTime: {
      type: String,
      value: "00:00-23:59"
    },

    // 是否是组织者
    score: {
      type: Number,
      value: 0
    },

    // 是否是组织者
    signTimes: {
      type: Number,
      value: 0
    },

    // 打卡状态
    signStatus: {
      type: Number,
      value: 0
    }
  },
  //组件的内部数据，和 properties 一同用于组件的模版渲染
  data: {
    isShowOrganizer: false,
  },
  //组件的方法，包括事件响应函数和任意的自定义方法 
  methods: {
    // 跳转活动详情  
    activityDetailTap: function (e) {
      var currentPosition = e.currentTarget.dataset.currentPosition
      this.triggerEvent('signEvent', {
        'currentPosition': currentPosition
      })
    }
  },
  // 组件生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

})