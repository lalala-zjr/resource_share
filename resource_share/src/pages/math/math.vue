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
                <li>视频</li>
                <li>文件</li>
            </ul>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>目录</el-breadcrumb-item>
                <el-breadcrumb-item>李永乐系列</el-breadcrumb-item>
                <el-breadcrumb-item>真题</el-breadcrumb-item>
                <el-breadcrumb-item>2020年数学一真题讲解</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="right_bottom">
              <div class="right_video">
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
                <videopic></videopic>
              </div>
              <div class="math_pages">
                <el-pagination
                  :page-size="9"
                  :pager-count="10"
                  layout="prev, pager, next"
                  :total="135">
                </el-pagination>
              </div>
            </div>
            <!-- <div class="right_file"></div> -->
        </div>
    </div>
</template>
<script>
import videopic from '../../components/videopic/videopic.vue'
import naver from '../../components/naver/naver.vue'
export default {
  components: {
    videopic,
    naver
  },
  data () {
    return {
      data: [{
        label: '李永乐系列',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '张宇系列',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '汤家凤系列',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }, {
        label: '李林全程班',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '启航龙腾班',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '文都全程班',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '考虫系列班',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '新东方直通车',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
<style scoped>
.left{
    width: 21%;
    /* height: 600px; */
    /* background-color:seagreen; */
    margin-top: 100px;
    margin-left: 4%;
    margin-right: 5%;
    float: left;
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
}
li:first-child{
    background-color: black;
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
.right_bottom{
  width: 100%;
  height: 1160px;
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
