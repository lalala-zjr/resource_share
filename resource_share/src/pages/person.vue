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
                <p class="username">嘟嘟嘟</p>
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
            <header>
                <div class="header_div1">
                    <img src="./../assets/person/summy.png" alt="" title="写总结">
                </div>
                <div class="header_div2">
                    <img src="./../assets/person/neww.png" alt="" title="消息">
                </div>
                <p class="data_day">{{timer}}</p>
            </header>
        </div>
        <div class="div3">
            <!-- 学习时间 -->
            <div class="person_learnTime">
                <div class="data_time">
                    <div class="person_math">
                        <div class="math_word">32.6</div>
                        <div class="math_name">数学时长</div>
                        <img src="./../assets/person/dui.png" alt="" class="dui">
                    </div>
                    <div class="person_math">
                        <div class="math_word">2.4</div>
                        <div class="math_name">英语时长</div>
                        <img src="./../assets/person/dui.png" alt="" class="dui">
                    </div>
                    <div class="person_math">
                        <div class="math_word">5</div>
                        <div class="math_name">政治时长</div>
                        <img src="./../assets/person/dui.png" alt="" class="dui">
                    </div>
                    <div class="person_math">
                        <div class="math_word">40</div>
                        <div class="math_name">总时长</div>
                        <img src="./../assets/person/dui.png" alt="" class="dui">
                    </div>
                </div>
                <div class="echarts" v-show="isActive1">
                    <div class="brokenLine" ref="chart1"></div>
                    <div class="radius" ref="chart2"></div>
                </div>
            </div>
            <!-- 个人信息 -->
            <div class="person_information" v-show="isActive2"></div>
            <div class="person_review" v-show="isActive3"></div>
            <div class="person_collect" v-show="isActive4"></div>
            <div class="person_set" v-show="isActive5"></div>
            <div class="person_quit" v-show="isActive6"></div>
        </div>
    </div>
</template>
<script src="./js/person1.js"></script>
<script>
import naver from '../components/naver/naver.vue'
export default {
  data () {
    return {
      timer: 'Sep 15th',
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
  mounted () {
    this.initCharts()
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
    },
    initCharts () {
      let myChart1 = this.$echarts.init(this.$refs.chart1)
      let myChart2 = this.$echarts.init(this.$refs.chart2)
    //   console.log(this.$refs.chart1)
      // 绘制图表
      myChart1.setOption({
        title: {
          text: '每周学习时间分布',
          x:'center',
          y:'16',
          textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#bababa',
            fontSize: 14
          },
        },
        tooltip: {},
        legend: {
          data:['数学','英语','政治'],
          orient: 'vertical',  //垂直显示
          right: 10,
          top: 5,
          textStyle:{
            color: '#ccc',
            fontSize: 12
          }
        },
        xAxis: {
          data: ['周一','周二','周三','周四','周五','周六','周日'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#bababa'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#bababa', // 颜色
              type: 'dotted',
            }
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: '#bababa'
            }
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          }
        },
        series: [{
          name: '数学',
          type: 'line',
          symbolSize: 4,
          data: [2,5,4,3,1,0.5,1.6],
          smooth: true,
          color: '#a8adff',
        },{
          name: '英语',
          type: 'line',
          data: [5,1,0.2,3,1,4,2],
          smooth: true,
          color: '#759aa0',
        },{
          name: '政治',
          type: 'line',
          data: [1,0.3,0.4,1.5,2.8,1.9,4],
          smooth: true,
          color: '#e69d87',
        }]
      })
      //    第二个图表
      myChart2.setOption({
        title: {
          text: '今日学习时间分布图',
          x:'center',
          y:'16',
          textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#bababa',
            fontSize: 14
          },
        },
        legend: {
          data:['数学','英语','政治'],
          orient: 'vertical',  //垂直显示
          right: 10,
          top: 10,
          textStyle:{
            color: '#ccc',
            fontSize: 12
          }
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '55%'],
            // roseType: 'angle',
            data:[
                {
                  value:5,
                  name:'数学',
                  itemStyle: {
                    normal: {
                        color: '#a8adff'
                    }
                  }
                },{
                  value:2,
                  name:'英语',
                  itemStyle: {
                    normal: {
                        color: '#759aa0'
                    }
                  }
                },{
                  value:4,
                  name:'政治',
                  itemStyle: {
                    normal: {
                        color: '#e69d87'
                    }
                  }
                }
            ]
          }
        ]
      })
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
    height: 50px;
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
    z-index: 5;
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
.username{
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
    width: 88%;
    height: 50px;
    left: 12%;
    background-color: #5d5d6d;
    position: relative;
    line-height: 50px;
}
.change{
    color: white !important;
}
header>div{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header_div1{
    right: 0;
    border-left: 1px solid whitesmoke;
}
.header_div2{
    right: 50px;
}
.div3{
    position: absolute;
    left: 12%;
    width: 88%;
    /* height: 1000px; */
    background-color: #363649;
    color: white;
    padding-bottom: 40px;
}
.data_time{
    width: 92%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 4%;
}
.data_time>div{
    width: 23%;
    height: 60px;
    background-color: #4a4a5c;
}
.math_word{
    position: absolute;
    left: 10%;
    top: 0;
    width: 30%;
    height: 46px;
    line-height: 46px;
    font-size: 26px;
}
.math_name{
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 30%;
    height: 14px;
    line-height: 0px;
    font-size: 12px;
    color: #999;
}
.dui{
    position: absolute;
    width: 46px;
    height: 16px;
    top: 22px;
    right: 5%;
}
.person_math{
    /* width: 60%; */
    /* height: 60px; */
    position: relative;
}
.data_day{
    position: absolute;
    width: 10%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: white;
    right: 100px;
}
.echarts{
    width: 92%;
    height: 300px;
    margin-left: 4%;
    position: relative;
}
.brokenLine{
    width: 60%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #4a4a5c;
    color: whitesmoke;
}
.radius{
    width: 37%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: #4a4a5c;
}
</style>
