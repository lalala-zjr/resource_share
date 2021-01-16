<template>
  <div class="main">
    <div class="left">
        <img src="../assets/left1.png" class="left_img">
        <h1>欢迎进入考研资料共享平台</h1>
        <img src="../assets/jiantou.png" class="small">
        <div class="time">距离{{year}}考研还有{{time}}天</div>
    </div>
    <div class="center">
        <p>登陆</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      year: '',
      time: ''
    }
  },
  created: function () {
    var myDate = new Date()
    this.year = myDate.getFullYear() + 1
    var further = new Date(myDate.getFullYear() + '/12/26')
    var n = further.getTime() - myDate.getTime()
    var day = Math.floor(n / 1000 / 60 / 60 / 24)
    this.time = day
  }
}
</script>
<style scoped>
.main{
    position: relative;
    height: 530px;
}
.small{
    position: absolute;
    top: 22%;
    left: 10%;
    width: 5%;
    height: 60px;
}
h1{
    position: absolute;
    top: 5%;
    left: 5%;
    color: #ccc;
}
.time{
    position: absolute;
    color: #45b4ff;
    top: 22%;
    left: 16%;
    width: 200px;
    height: 60px;
    line-height: 60px;
}
.left{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}
.left_img{
    display: block;
    width: 100%;
    height: 100%;
}
.center{
    position: absolute;
    top: 18%;
    right: 18%;
    width: 26%;
    height: 70%;
    border-radius: 5%;
    box-shadow: 10px 10px 5px #222;
    background-color: rgba(255, 255, 255, 0.3);
}
p{
    margin: 12% 0 0 0;
    width: 100%;
    height: 40px;
    font-size: 24px;
    text-align: center;
}
/* .right{
    box-sizing: border-box;
    position:absolute;
    right: 0;
    top: 0;
    width: 38%;
    height: 100%;
} */
</style>
