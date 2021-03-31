<template>
  <div class="index">
    <img src="../assets/index/banner.png" alt="哎呀呀" class="banner">
    <div class="indroduce">
      <img src="../assets/index/p1.png" alt="哎呀呀" class="p1">
      <div class="ind_main">
        <img src="../assets/index/learn.png" alt="哎呀呀" class="learn">
        <div class="ind_text">
          <h3>择校</h3>
          <p>{{first_1}}</p>
          <p>{{first_2}}</p>
          <p>{{first_3}}</p>
        </div>
        <div class="ind_text2">
          <h3>公共课</h3>
          <p>{{second_1}}</p>
          <p>{{second_2}}</p>
          <p>{{second_3}}</p>
        </div>
        <div class="ind_text3">
          <h3>专业课</h3>
          <p>{{third}}</p>
        </div>
        <div class="ind_text4">
          <h3>复试</h3>
          <p>{{last}}</p>
        </div>
      </div>
    </div>
    <img src="../assets/index/cen.png" alt="哎呀呀" class="center_pic">
    <div class="book">
      <div class="book1">
        <div class="empty1"></div>
        <div class="word_book">
          <p class="classify"><strong>书籍分类</strong></p>
          <p class="classify">BOOK CLASSIFICATION</p>
          <div class="book_ind">别驻足，梦想要不停追逐;不认输，熬过黑夜是日出;都清楚，成功就在下一步;路很苦，汗水是最美的书;狂欢呼，相约在巅峰共舞!</div>
          <div class="book_pic">
            <div>
              <img src="../assets/index/math.jpg" alt="">
              <ul>
                <li>李永乐系列书籍</li>
                <li>张宇系列书籍</li>
                <li>汤家凤系列书籍</li>
                <p>更多>></p>
              </ul>
            </div>
            <div>
              <img src="../assets/index/zhengzhi.jpg" alt="">
              <ul>
                <li>肖秀荣全程班系列</li>
                <li>徐涛强化系列</li>
                <li>腿姐总结系列</li>
                <p>更多>></p>
              </ul>
            </div>
            <div>
              <img src="../assets/index/english.png" alt="">
              <ul>
                <li>何凯文长难句讲解</li>
                <li>考研真相相关资料</li>
                <li>考研英语真题下载</li>
                <p>更多>></p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="book2">
        <img src="../assets/index/cen_pic.png" alt="">
        <div class="turn">
          <div>一轮</div>
          <div>二轮</div>
          <div>冲刺</div>
        </div>
      </div>
      <div class="book3">
        <div class="empty1"></div>
        <p class="classify"><strong>交流中心</strong></p>
        <p class="classify">COMMUNICATION CENTER</p>
        <div class="book3_inf">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="contact">
      <h2>联系我们</h2>
      <h4>CONTACT US</h4>
      <p>考研·交流中心·数学(李永乐，张宇，汤家凤)·英语(考研真相，英语真题，何凯文系列，新东方全程班等等)·政治(肖秀荣系列，徐涛系列)·下载中心·个人中心</p>
      <footer>
        <div class="left">
          <h4>考研资料交流平台</h4>
          <p>地址:陕西省西安市长安区西安邮电大学</p>
          <p>邮编:710043</p>
          <p>电话:83641409</p>
          <p>手机:18009240559</p>
          <p>QQ号:1365351516</p>
          <p>邮箱:zhangjinrui111@qq.com</p>
        </div>
        <div class="right">
          <input type="text" placeholder="姓名"><br>
          <input type="text" placeholder="邮箱"><br>
          <input type="text" placeholder="电话"><br>
          <input type="text" placeholder="内容">
        </div>
      </footer>
      <div class="bottom">VUE技术支持考研资料共享与交流平台 关于我们 声明版权 售后服务</div>
    </div>
    <div class="empty"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      first_1: '1.与学校联系，确定具体的学校、专业，获得具体的考试信息如果确定了要考研，确定了要报考的大致学校和专业范围后，要和学校联系，获得最新的招生信息，并最后确定下报考的学校和专业；',
      first_2: '2.先期准备获得了充分的专业课信息后，找到了完备的复习资料后，该踏实看书复习；',
      first_3: '3.报名报名时间一般在10月和11月，在校生报名时由学校统一报名。在职人员报名一般在地市一级教委的高招办或者报考的学校，可以异地报名，即因为出差等原因在外地报名和参加考试；',
      second_1: '关于政治：考研政治考试的考查范围主要包括:马克思主义基本原理、毛泽东思想和中国特色社会主义理论体系概论、中国近现代史纲要、思想道德修养与法律基础、形势与政策以及当代世界经济与政治。第一轮，看知识点。刷题。考研机构都会给一套知识点对应的习题。争取在十月中旬刷完3轮。结合知识点上下文理解背诵，做好思维导图。刷模拟题选择题部分。考研机构里会有很多模拟题给你们，要记住只刷选择题，分析题不要刷。最后背分析题。',
      second_2: '关于数学：硕士研究生入学统考数学试卷分为3种:其中针对工科类的为数学一、数学二;针对经济学和管理学类的为数学三(2009年之前管理类为数学三，经济类为数学四，2009年之后大纲将数学三数学四合并)。具体不同专业所使用的试卷种类有具体规定。',
      second_3: '关于英语，英语(一)即原研究生入学统考"英语"，所有学术型硕士研究生(英语专业选考其他语种)(十三大门类，110个一级学科)和部分专业型硕士(法律硕士、临床医学硕士、口腔医学硕士、建筑学硕士、护理硕士、汉语国际教育硕士、公共卫生硕士等)必考英语(一)。英语(二)主要是为高等院校和科研院所招收不考英语(一)的专业学位硕士研究生而设置的具有选拔性质的统考科目。',
      third: '专业课就是根据自己所报的学校中招生简章的考试科目进行复习，每个学校一般有所不同，又分为自主命题和统考。考生主要根据该报考学校招生简章科目进行复习。',
      last: '参加完12月底的研究生初试，到2月底出成绩之后，若到达报考学校分数线，就要准备复试，主要关注该报考学校网站。若复试成功则该生录取。'
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
.indroduce{
  width: 80%;
  height: 940px;
  margin-left: 10%;
  background-color:white;
}
.book{
  width: 80%;
  height: 1600px;
  margin-left: 10%;
  background-color:white;
}
.p1{
  width: 40%;
  height: 80px;
  margin: 60px 0 0 28%;
}

.empty1{
  width: 100%;
  height: 100px;
}
.ind_main{
  position: relative;
  left: 10%;
  top: 30px;
  width: 80%;
  height: 700px;
  /* background-color: seagreen; */
}
.learn{
  position: absolute;
  width: 50%;
  height: 220px;
  right: 3%;
  top: 40px;
}
.ind_text{
  position: absolute;
  top: 14px;
  width: 40%;
  left: 3%;
  color: #777;
  /* background-color: red; */
}
.ind_text h3,.ind_text2 h3,.ind_text3 h3,.ind_text4 h3{
  border: 0;
  margin: 0;
  margin-bottom: 15px;
  font-size: 18px;
  color: black;
}
.ind_text p,.ind_text2 p,.ind_text3 p,.ind_text4 p{
  border: 0;
  margin: 8px 0 10px 0;
  font-size: 14px;
}
.ind_text2{
  position: absolute;
  top: 260px;
  left: 3%;
  width: 94%;
  color: #777;
  /* background-color:rebeccapurple; */
}
.ind_text3{
  position: absolute;
  top: 520px;
  left: 3%;
  width: 94%;
  color: #777;
  /* background-color:rebeccapurple; */
}
.ind_text4{
  position: absolute;
  top: 610px;
  left: 3%;
  width: 94%;
  color: #777;
  /* background-color:rebeccapurple; */
}
.book1{
  width: 70%;
  height: 620px;
  margin-left: 15%;
  /* background-color: rgb(167, 153, 180); */
}
.word_book{
  width: 100%;
  height: 60px;
}
.classify{
  margin: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align:center;
  /* background-color: rebeccapurple; */
}
.book2{
  width: 100%;
  height: 300px;
  background-color: #f4fafa;
  position: relative;
}
.book2>img{
  position: absolute;
  width: 100%;
  height: 300px;
  opacity: 0.8;
}
.book2>.turn{
  position: absolute;
  width: 70%;
  margin-left: 15%;
  height: 300px;
  z-index: 5;
  color: #f4fafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: #666; */
}
.turn>div{
  width: 100px;
  height: 100px;
  border-radius: 50px;
  text-align: center;
  line-height: 100px;
  background-color: #ff812a;
  opacity: 0.8;
}
.book3{
  width: 100%;
  height: 700px;
  position: relative;
  /* background-color: #f4fafa; */
}
.book_pic{
  width: 80%;
  height: 300px;
  margin-left: 10%;
  /* background-color: rebeccapurple; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.book3_inf{
  width: 80%;
  height: 400px;
  margin-left: 10%;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rebeccapurple;
}
.book3_inf>div{
  width:40%;
  height: 100px;
  background-color: seagreen;
}
.book_pic > div{
  width: 150px;
  height: 280px;
  /* box-sizing: border-box; */
  border: 1px solid #ccc;
  /* background-color: rosybrown; */
}
.book_pic > div > img{
  width: 150px;
  height: 180px;
  display: block;
  border-bottom:1px solid #ccc;
  /* background-color: rosybrown; */
}
ul{
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
  height: 60px;
  font-size: 12px;
  margin-top: 10px;
}
ul>li{
  list-style-type:none;
  width: 90%;
  height: 20px;
  margin-left: 5%;
  box-sizing: border-box;
  border-bottom: 1px dashed #ccc;
  line-height: 20px;
}
li:before{
  content: "·";
  color: #6f90bf;
}
li:hover{
  font-size: 14px;
  color: #6f90bf;
}
ul>p{
  margin: 0;
  width: 90%;
  margin-left: 5%;
  height: 20px;
  font-size: 10px;
  text-align: right;
  line-height: 20px;
  color: #aaa;
  cursor: pointer;
}
.book_ind{
  width: 80%;
  height: 60px;
  margin-top: 20px;
  margin-left: 10%;
  font-size: 12px;
  color: #666;
  /* line-height: 60px; */
  text-align: center;
  /* background-color: seagreen; */
}
.contact{
  width: 80%;
  margin-left: 10%;
  height: 560px;
  background-color: #1d1d1d;
  color: whitesmoke;
  position: relative;
}
.contact>h2,.contact>h4,.book3>h2,.book3>h4{
  margin: 0;
  position: absolute;
  width: 80%;
  top: 50px;
  left: 10%;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.contact>h4,.book3>h4{
  top: 80px;
}
.contact>p{
  position: absolute;
  width: 60%;
  height: 40px;
  margin-left: 20%;
  font-size: 12px;
  /* color:thistle; */
  top: 120px;
  text-align: center;
  line-height: 20px;
}
footer{
  width: 80%;
  height: 360px;
  position: absolute;
  top: 200px;
  left: 10%;
  /* background-color:thistle; */
}
footer>.left{
  color:#ccc;
  width: 40%;
  height: 320px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 4% 0 0 4%;
  /* background-color:teal; */
}
.left>p{
  font-size: 12px;
}
footer>.right{
  width: 60%;
  height: 280px;
  position: absolute;
  top: 40px;
  right: 0;
  /* background-color:yellow; */
}
.bottom{
  position: absolute;
  width: 100%;
  height: 40px;
  font-size: 12px;
  background-color:#ff812a;
  line-height: 40px;
  text-align: center;
  bottom: 0;
  left: 0;
}
.right>input{
  width: 50%;
  height: 20px;
  margin: 15px 25%;
  background-color: #1d1d1d;
  border: 0;
  border-bottom: 1px solid #666;
  color: whitesmoke;
}
input::placeholder{
  color: #ccc;
}
.empty{
  width: 100%;
  height: 60px;
  background-color: #1d2437;
}
</style>
