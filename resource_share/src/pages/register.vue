<template>
  <div class="main">
    <div class="left">
        <img src="../assets/register/background000.jpg" class="left_img">
        <h1>考研资源共享与交流平台</h1>
        <img src="../assets/register/jiantou.png" class="small">
        <div class="time">距离{{year}}考研还有{{time}}天</div>
    </div>
    <div class="center"  v-show="a">
        <p>登陆</p><span class="zhuce" @click="zhuce">(还没有账号？立即注册)</span>
        <div class="phone">
            <input type="text" placeholder="请输入你的手机号" ref="phone" @click="yes">
        </div>
        <div class="pass">
            <input type="password" placeholder="请输入你的密码" ref="password" @click="yes">
        </div>
        <!-- <p class="verify" @click = "change1">验证码登录？</p> -->
        <p class="meg" v-if="meg">{{error}}</p>
        <button @click = "enter">登录</button>
    </div>
    <!-- <div class="center2" v-show="b">
        <p>登陆</p><span class="zhuce" @click="zhuce">(还没有账号？立即注册)</span>
        <div class="phone">
            <input type="text" placeholder="请输入你的手机号" ref="phone1" @click="yes2">
        </div>
        <div class="pass2">
            <input type="password" @click="yes2" placeholder="请输入你的验证码"><span v-on:click = "sendT" ref="Fs">{{send}}</span>
        </div>
        <p class="verify" @click = "change2">密码登录？</p>
        <p class="meg2" v-if="meg2">手机号或者验证码错误</p>
        <button @click = "enter2">登录</button>
    </div> -->
    <div class="center3" v-show="c">
        <p>注册</p>
        <div class="phone">
            <input type="text" placeholder="请输入你的手机号" ref="registerPhone" @click="yes3">
        </div>
        <div class="pass">
            <input type="password" placeholder="请输入你的密码" ref="registerPassword" @click="yes3">
        </div>
        <p class="verify" @click = "change2">登录？</p>
        <p class="meg3" v-if="meg3">{{notice}}</p>
        <button @click = "enter3">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      a: true,
      // b: false,
      c: false,
      send: '发送',
      year: '',
      time: '',
      meg: false,
      meg2: false,
      meg3: false,
      notice: '手机号已存在',
      error: '手机号或者密码错误'
    }
  },
  methods: {
    sendT () {
      var this2 = this
      this2.$refs.Fs.classList.add('notclick')
      // pointer-events: none
      var t = 60
      var c = setInterval(function () {
        this2.send = t--
        if (t === 1) {
          clearInterval(c)
          this2.send = '发送'
          this2.$refs.Fs.classList.remove('notclick')
        }
      }, 1000)
    },
    // change1 () {
    //   this.a = false
    //   // this.b = true
    //   this.c = false
    // },
    change2 () {
      // this.b = false
      this.a = true
      this.c = false
    },
    zhuce () {
      this.a = false
      // this.b = false
      this.c = true
    },
    yes () {
      this.meg = false
    },
    yes3 () {
      this.meg3 = false
    },
    enter () {
      if (this.$refs.phone.value.length === 0) {
        this.error = '手机号不能为空'
        this.meg = true
      } else if (this.$refs.password.value.length === 0) {
        this.error = '密码不能为空'
        this.meg = true
      } else {
        console.log(this.$refs.phone.value, this.$refs.password.value)
        this.axios.post('api/login',
          this.qs.stringify({
            phone: this.$refs.phone.value,
            password: this.$refs.password.value
          })
        ).then((res) => {
          console.log(res)
          if (res.data !== 'error') {
            this.$store.commit('setToken', { token: res.data })
            this.$router.push('./index')
          } else {
            this.notice = '手机号已存在'
            this.meg = true
          }
        })
      }
      // this.$router.push('./index')
    },
    enter2 () {
      console.log(this.$refs.phone1.value, this.$refs.Fs.value)
    },
    enter3 () {
      if (this.$refs.registerPhone.value.length === 0) {
        this.notice = '手机号不能为空'
        this.meg3 = true
      } else if (this.$refs.registerPassword.value.length === 0) {
        this.notice = '密码不能为空'
        this.meg3 = true
      } else {
        this.axios.post('api/register',
          this.qs.stringify({
            phone: this.$refs.registerPhone.value,
            password: this.$refs.registerPassword.value
          })
        ).then((res) => {
          console.log(res)
          if (res.data === 'ok') {
            this.$router.go(0)
          } else {
            this.meg3 = true
          }
        })
      }
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
    height: 548px;
}
.notclick{
  pointer-events: none;
}
.small{
    position: absolute;
    top: 32%;
    left: 15%;
    width: 5%;
    height: 60px;
}
h1{
    position: absolute;
    top: 20%;
    left: 12%;
    color: #8a3b6c;
}
.time{
    position: absolute;
    color: #536775;
    top: 32%;
    left: 21%;
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
.center,.center2,.center3{
    position: absolute;
    top: 18%;
    right: 18%;
    width: 26%;
    height: 70%;
    border-radius: 5%;
    box-shadow: 10px 10px 4px rgb(167, 98, 140);
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
    top: 30%;
    left: 15%;
    width: 70%;
    height: 40px;
}
.pass{
    position: absolute;
    top: 48%;
    left: 15%;
    width: 70%;
    height: 40px;
}
.pass2{
    position: absolute;
    top: 48%;
    left: 15%;
    width: 70%;
    height: 40px;
}
button{
    position: absolute;
    width: 70%;
    height: 40px;
    background-color: #8a3b6c;
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
.pass2 input{
    width: 66%;
}
.pass2 span{
    float: right;
    width: 34%;
    height: 100%;
    background-color: #aaa;
    color: #333;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
}
.verify{
  width: 30%;
  height: 20px;
  position: absolute;
  right: 15%;
  top: 50%;
  font-size: 12px;
  color: #354762;
  text-align: right;
  line-height: 20px;
  cursor: pointer;
}
.verify:hover{
  color: #8a3b6c;
}
.meg,.meg2,.meg3{
  width: 40%;
  height: 20px;
  /* background-color: rebeccapurple; */
  font-size: 12px;
  color: rgb(216, 40, 40);
  position: absolute;
  top: 50%;
  left: 15%;
  text-align: left;
  line-height: 20px;
}
.zhuce{
  font-size: 12px;
  position: absolute;
  left: 30%;
  top: 20%;
  color: #354762;
}
.zhuce:hover{
  color: #8a3b6c;
  cursor: pointer;
}
</style>
