<template>
  <div class="index">
    <img src="../assets/banner.png" alt="哎呀呀" class="banner">
    <div class="indroduce">
      <img src="../assets/p1.png" alt="哎呀呀" class="p1">
      <div class="ind_main">
        <img src="../assets/learn.png" alt="哎呀呀" class="learn">
        <div class="ind_text">
          <h3>首先</h3>
          <p>{{first_1}}</p>
          <p>{{first_2}}</p>
          <p>{{first_3}}</p>
      </div>
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
    return {
      first_1: '1.与学校联系，确定具体的学校、专业，获得具体的考试信息如果确定了要考研，确定了要报考的大致学校和专业范围后，要和学校联系，获得最新的招生信息，并最后确定下报考的学校和专业；',
      first_2: '2.先期准备获得了充分的专业课信息后，找到了完备的复习资料后，该踏实看书复习；',
      first_3: '3.报名报名时间一般在10月和11月，在校生报名时由学校统一报名。在职人员报名一般在地市一级教委的高招办或者报考的学校，可以异地报名，即因为出差等原因在外地报名和参加考试；'
    }
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
  margin: 60px 0 0 28%;
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
  left: 10%;
  top: 30px;
  width: 80%;
  height: 300px;
}
.learn{
  position: absolute;
  width: 48%;
  height: 220px;
  right: 0;
  top: 0;
}
.ind_text{
  position: absolute;
  top: 20px;
  width: 46%;
  left: 2%;
  font-size: 13px;
  color: #777;
}
.ind_text h3{
  border: 0;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: black;
}
.ind_text p{
  border: 0;
  margin: 8px 0 8px 0;
}
</style>
