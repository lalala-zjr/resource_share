<template>
    <div class="com_inf">
      <p @click="enter_inf">题目: {{re.reviewTitle}}</p>
      <div class="inf_word">
        <span>作者：{{re.userName}}</span>
        <span>时间：{{re.reviewTime}}</span>
        <span>浏览量：{{re.reviewSee}}</span>
      </div>
      <div class="inf_contend">{{re.reviewContent}}</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    re: Object
  },
  mounted () {
    // console.log(this.re)
  },
  methods: {
    enter_inf () {
      this.$router.push('./comInformation/' + this.re.reviewId)
    }
  }
}
</script>
<style scoped>
.com_inf{
  box-sizing: border-box;
  width: 90%;
  height: 120px;
  margin: 20px 5% 20px 5%;
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-shadow: 0px 1px 2px #aaa;
}
.com_inf>p{
  font-family:'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 5px 0 0 0;
  padding-left: 2%;
  font-size: 18px;
  /* background-color: tan; */
}
.com_inf>p:hover{
  font-size: 20px;
  color: #7f7fc0;
  cursor: pointer;
}
.inf_word{
  width: 100%;
  height: 18px;
  box-sizing: border-box;
  padding-left: 2%;
  font-size: 12px;
  line-height: 18px;
  margin: 1px 0;
  color: #aaa;
  /* background-color: teal; */
}
.inf_word>span{
  margin-right: 5%;
}
#p{
  width: 100%;
  height: 80px;
  margin: 0;
  margin-bottom: 20px;
}
.inf_contend{
  width: 100%;
  height: 66px;
  box-sizing: border-box;
  padding:0 2%;
  font-size: 14px;
  position: relative;
  line-height: 25px;
  max-height: 50px;
  /*不兼容火狐，IE*/
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;/** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical;/** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2;/** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
