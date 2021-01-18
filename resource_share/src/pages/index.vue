<template>
  <div class="index">
    <img src="../assets/banner.png" alt="哎呀呀" class="banner">
    <div class="indroduce">
      <img src="../assets/p1.png" alt="哎呀呀" class="p1">
      <div class="ind_main">
        <img src="../assets/learn.png" alt="哎呀呀" class="learn">
      </div>
    </div>
    <img src="../assets/center.png" alt="哎呀呀" class="center_pic">
    <div class="book"></div>
    <div class="contact"></div>
    <div class="empty"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.index{
  background-color: #1d2437;
}
.banner,.center_pic{
  width: 80%;
  margin-left: 10%;
}
.indroduce,.book{
  width: 80%;
  height: 600px;
  margin-left: 10%;
  background-color:white;
}
.p1{
  width: 40%;
  height: 80px;
  margin: 40px 0 0 28%;
}
.empty{
  width: 100%;
  height: 60px;
  background-color: #1d2437;;
}
.contact{
  width: 80%;
  margin-left: 10%;
  height: 400px;
  background-color: #1d1d1d;
}
.ind_main{
  position: relative;
  left: 20%;
  top: 20px;
  width: 60%;
  height: 300px;
  /* background-color: teal; */
  /* border: 1px solid black; */
}
.learn{
  position: absolute;
  width: 260px;
  height: 220px;
  right: 0;
  top: 0;
}
</style>
