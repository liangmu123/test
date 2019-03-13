// pages/activityInfo/activityInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    num:'',
    note:''
  },
  showDiaolg(){
    this.setData({
      show: true,
    
    });
  },

  onClose(event) {
    if (event.detail === 'confirm') {
      // 异步关闭弹窗
        this.setData({
          show: false
        });
        console.log(this.data.num,this.data.note,2222)
    } else {
      this.setData({
        show: false,
          num: '',
         note: ''
      });
      console.log(this.data.num, this.data.note)
    }
  },
  inputchange(e){
    this.setData({
      num:e.detail
    })
  },
  notechange(e){
    this.setData({
      note: e.detail
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