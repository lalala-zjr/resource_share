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
        <div class="phone">
            <input type="text" placeholder="请输入你的手机号">
        </div>
        <div class="pass">
            <input type="password" placeholder="请输入你的密码(8-12位)">
        </div>
        <button>登录</button>
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
    box-shadow: 10px 10px 4px #222;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px black dashed;
}
p{
    margin: 12% 0 0 0;
    width: 100%;
    height: 40px;
    font-size: 24px;
    text-align: center;
}
.phone{
    position: absolute;
    top: 26%;
    left: 15%;
    width: 70%;
    height: 40px;
}
.pass{
    position: absolute;
    top: 44%;
    left: 15%;
    width: 70%;
    height: 40px;
}
button{
    position: absolute;
    width: 70%;
    height: 40px;
    background-color: #354762;
    color: white;
    bottom: 10%;
    left: 15%;
}
input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-left: 5%;
    border:none;
    border-bottom: 1px solid #ccc;
    background-color:rgba(255, 255, 255, 0.7);
    color: #354762;
}
</style>
