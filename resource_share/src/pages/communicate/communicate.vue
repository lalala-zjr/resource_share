<template>
    <div class="communicate">
        <naver></naver>
        <p id="p1"></p>
        <div class="all" :style="{height: scrollerHeight}">
          <div class="com">
            <com v-for="(re,i) in review" v-bind:key="i" :re="re"></com>
          </div>
          <div class="hot">
            <p>当前最热</p>
            <ul>
              <li @click="inf0">
                <img src="./../../assets/communicate/11.png" alt="">
                <div>{{hot[0].reviewTitle}}</div>
              </li>
              <li @click="inf1">
                <img src="./../../assets/communicate/22.png" alt="">
                <div>{{hot[1].reviewTitle}}</div>
              </li>
              <li @click="inf2">
                <img src="./../../assets/communicate/33.png" alt="">
                <div>{{hot[2].reviewTitle}}</div>
              </li>
              <li @click="inf3">
                <img src="./../../assets/communicate/44.png" alt="">
                <div>{{hot[3].reviewTitle}}</div>
              </li>
              <li @click="inf4">
                <img src="./../../assets/communicate/55.png" alt="">
                <div>{{hot[4].reviewTitle}}</div>
              </li>
            </ul>
          </div>
        </div>
        <p id="p2"></p>
    </div>
</template>
<script>
import naver from '../../components/naver/naver.vue'
import com from './com/com.vue'
export default {
  data () {
    return {
      hot: '',
      review: '',
      scrollerHeight: ''
    }
  },
  components: {
    naver,
    com
  },
  methods: {
    inf0 () {
      this.$router.push('./comInformation/' + this.hot[0].reviewId)
    },
    inf1 () {
      this.$router.push('./comInformation/' + this.hot[1].reviewId)
    },
    inf2 () {
      this.$router.push('./comInformation/' + this.hot[2].reviewId)
    },
    inf3 () {
      this.$router.push('./comInformation/' + this.hot[3].reviewId)
    },
    inf4 () {
      this.$router.push('./comInformation/' + this.hot[4].reviewId)
    }
  },
  mounted () {
    this.axios.post('api/communicate',
      this.qs.stringify('')
    ).then((res) => {
      console.log(res)
      this.hot = res.data.hot
      this.review = res.data.review
      this.scrollerHeight = this.review.length * 140 + 'px'
    })
  }
}
</script>
<style scoped>
.communicate{
  width: 100%;
  /* height: 1500px; */
  background:url("./../../assets/communicate/big.jpg");
}
.all{
  width: 100%;
  height: auto;
}
.com{
  width: 65%;
  position: absolute;
  left: 5%;
}
#p1{
  width: 100%;
  height: 80px;
  margin: 0;
  margin-bottom: 20px;
}
#p2{
  width: 100%;
  height: 80px;
  margin: 0;
}
.hot{
  margin-top: 20px;
  width: 25%;
  height: 400px;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-shadow: 0px 1px 2px #aaa;
  position: absolute;
  right: 5%;
  cursor: pointer;
}
.hot>p{
  position: absolute;
  margin: 20px 0 0 0;
  width: 100%;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  /* background-color:chartreuse; */
}
.hot>ul{
  position: absolute;
  top: 60px;
  margin: 0;
  padding: 0;
  margin-left: 10%;
  width: 80%;
  height: 300px;
  /* background-color: cornflowerblue; */
}
li{
  position: relative;
  width: 100%;
  height: 50px;
  list-style:none;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  /* background-color: chocolate; */
}
li>img{
  position: absolute;
  width: 10%;
  height: 20px;
  top: 15px;
  left: 2%;
  /* background-color: cornflowerblue; */
}
li>div{
  position: absolute;
  width: 80%;
  height: 30px;
  top: 10px;
  right: 0;
  font-size: 16px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
