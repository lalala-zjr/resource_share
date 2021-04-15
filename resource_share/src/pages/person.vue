<template>
    <div id="person">
        <div id="nav">
            <ul id="ul">
                <div id="li" @click="jump1">首页</div>
                <div id="li" @click="jump2">数学</div>
                <div id="li" @click="jump3">英语</div>
                <div id="li" @click="jump4">政治</div>
                <div id="li" @click="jump5">交流</div>
                <div id="li" @click="jump6">个人</div>
            </ul>
        </div>
        <div class="div1">
            <div class="img">
                <img src="./../assets/person/qq.jpg" alt="" class="userImg">
                <p>嘟嘟嘟</p>
                <ul class="classify">
                    <li ref="change1" :class="{'change':isActive1}"  @click="chang1">
                        <img src="./../assets/person/时间.png" alt="">
                        <span>学习时间</span>
                    </li>
                    <li ref="change2" :class="{'change':isActive2}"  @click="chang2">
                        <img src="./../assets/person/person.png" alt="">
                        <span>个人信息</span>
                    </li>
                    <li ref="change3" :class="{'change':isActive3}"  @click="chang3">
                        <img src="./../assets/person/review.png" alt="">
                        <span>评论</span>
                    </li>
                    <li ref="change4" :class="{'change':isActive4}"  @click="chang4">
                        <img src="./../assets/person/collect.png" alt="">
                        <span>收藏</span>
                    </li>
                    <li  ref="change5" :class="{'change':isActive5}"  @click="chang5">
                        <img src="./../assets/person/set.png" alt="">
                        <span>设置中心</span>
                    </li>
                    <li  ref="change6" :class="{'change':isActive6}" @click="chang6">
                        <img src="./../assets/person/go.png" alt="">
                        <span>退出登录</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="div2">
            <header></header>
        </div>
    </div>
</template>
<script>
import naver from '../components/naver/naver.vue'
export default {
  data () {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false
    }
  },
  components: {
    naver
  },
  methods: {
    jump1 () {
      this.$router.push('./index')
    },
    jump2 () {
      this.$router.push('./math')
    },
    jump3 () {
      this.$router.push('./english')
    },
    jump4 () {
      this.$router.push('./policy')
    },
    jump5 () {
      this.$router.push('./communicate')
    },
    jump6 () {
      this.$router.push('./person')
    },
    chang1 () {
        this.isActive1 = true
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = false
        this.isActive6 = false
    },
    chang2 () {
        this.isActive1 = false
        this.isActive2 = true
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = false
        this.isActive6 = false
    },
    chang3 () {
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = true
        this.isActive4 = false
        this.isActive5 = false
        this.isActive6 = false
    },
    chang4 () {
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = true
        this.isActive5 = false
        this.isActive6 = false
    },
    chang5 () {
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = true
        this.isActive6 = false
    },
    chang6 () {
        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = false
        this.isActive6 = true
    }
  }
}
</script>
<style scoped>
#nav{
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.8);
    z-index: 5;
    color: whitesmoke;
}
#ul{
    margin: 0;
    padding: 0;
    width: 40%;
    height: 100%;
    /* background-color: teal; */
    position: absolute;
    right: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
#ul>div{
    width: 50px;
    height: 40px;
    list-style: none;
    text-align: center;
    line-height: 40px;
    border-radius: 20%;
    font-size: 14px;
}
#ul>div:hover{
    border-bottom: 5px solid #ff812a;
    cursor: pointer;
}
#person{
    margin-top: 80px;
}
.div1{
    width: 12%;
    height: 500px;
    background-color: #4a4a5c;
    position: fixed;
}
.img{
    width: 100%;
}
.userImg{
    width: 40%;
    height: 60px;
    margin-left: 30%;
    margin-top: 50px;
    border-radius: 30px;
}
p{
    width: 100%;
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
    color: white;
}
.classify{
    width: 60%;
    height: 300px;
    /* background-color: teal; */
    margin: 0;
    padding: 0;
    margin-left: 20%;
    margin-top: 30px;
}
.classify>li{
    list-style: none;
    width: 100%;
    height: 40px;
    position: relative;
    cursor: pointer;
    color: #a1a1aa;
}
li>img{
    position: absolute;
    width: 16px;
    height: 16px;
    top: 12px;
}
li>span{
    position: absolute;
    width: 100%;
    height: 40px;
    font-size: 12px;
    left: 20px;
    line-height: 40px;
}
header{
    width: 100%;
    height: 50px;
    background-color: #5d5d6d;
}
.change{
    color: white !important; 
}
</style>
