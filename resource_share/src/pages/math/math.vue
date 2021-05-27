<template>
    <div class="math">
      <naver></naver>
        <div class="left">
            <h1>----Math----</h1>
            <h4>目录</h4>
            <div class="left_main">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
        </div>
        <div class="right">
            <ul>
                <li :class="{'changeColor':videoS}" @click="video">视频</li>
                <li :class="{'changeColor': fileS}" @click=" file">文件</li>
            </ul>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>考研资料共享</el-breadcrumb-item>
              <el-breadcrumb-item>数学</el-breadcrumb-item>
                <el-breadcrumb-item>目录</el-breadcrumb-item>
                <el-breadcrumb-item>{{math_Name}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="right_bottom">
              <div class="right_video" v-show="videoS">
                <videopic v-for="(math,i) in courseMath" v-bind:key="i" :math="math"></videopic>
              </div>
              <div class="right_file" v-show="fileS">
                <div v-for="(f,i) in fileINF" v-bind:key="i">
                  <a href="./../../assets/math/第二部分一元函数微分学.pdf">题目：{{f.mathName}} </a>
                </div>
              </div>
              <!-- <div class="math_pages">
                <el-pagination
                  :page-size="9"
                  :pager-count="9"
                  layout="prev, pager, next"
                  :total="81">
                </el-pagination>
              </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import videopic from './videopic/videopic.vue'
import naver from '../../components/naver/naver.vue'
export default {
  components: {
    videopic,
    naver
  },
  data () {
    return {
      data: [],
      math_Name: '李永乐全程',
      courseMath: '',
      id: 1,
      fileS: false,
      videoS: true,
      fileINF: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.axios.post('api/math',
      this.qs.stringify('')
    ).then((res) => {
      console.log(res.data)
      this.courseMath = res.data.courseMath
      var catalogMath = res.data.catalogMath
      for (let i = 0; i < catalogMath.length; i++) {
        var obj = {}
        obj.label = catalogMath[i].courseName
        obj.id = catalogMath[i].courseId
        this.data.push(obj)
      }
      // console.log(this.data)
    })
  },
  methods: {
    handleNodeClick (data) {
      // console.log(data.label)
      this.math_Name = data.label
      this.id = data.id
    },
    video () {
      this.fileS = false
      this.videoS = true
    },
    file () {
      this.fileS = true
      this.videoS = false
      this.axios.post('api/mathFile',
        this.qs.stringify(
          {
            id: this.id
          }
        )
      ).then((res) => {
        console.log(res.data)
        this.fileINF = res.data
        // for (let i = 0; i < this.fileINF; i++) {
        // }
      })
    }
  }
}
</script>
<style scoped>
.math{
  width: 100%;
  height: 1300px;
  background:url("./../../assets/math/background3.jpg");
}
.left{
    width: 21%;
    margin-top: 100px;
    margin-left: 4%;
    margin-right: 5%;
    float: left;
    /* background-color: rgb(177, 128, 147); */
}
.left_main{
    border: 1px solid #f0f0f0;
    background-color: #f9fafb;
}
.right{
    width: 68%;
    /* height: 1200px; */
    /* background-color: #eee; */
    float: right;
    margin-right: 2%;
    margin-top: 100px;
}
.right>ul{
    margin-left: 0;
    padding-left: 0;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
li{
    width: 60px;
    height: 30px;
    border:1px solid #e1e1e1;
    text-align: center;
    line-height: 30px;
    list-style-type: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
.changeColor{
    background-color: #70709c;
    color: white;
}
.right_video{
    margin-top: 20px;
    width: 100%;
    height: 1020px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.right_file{
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
.right_file>div{
  width: 96%;
  height: 50px;
  margin: 0 2%;
  line-height: 50px;
  border-bottom:1px solid #ccc;
}
.right_file>div:nth-last-child(1){
  border:0;
}
.right_file>div:hover{
  color: #70709c;
}
.right_bottom{
  width: 100%;
  height: 960px;
  margin-bottom: 100px;
  /* background-color: turquoise; */
}
.math_pages{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
