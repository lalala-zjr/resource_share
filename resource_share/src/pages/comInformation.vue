<template>
    <div class="comInformation">
        <!-- <naver></naver> -->
        <h1>{{data.reviewTitle}}</h1>
        <div class="content">
            <div class="inf_word">
                <span>作者：{{data.userName}}</span>
                <span>时间：{{data.reviewTime}} </span>
                <span>浏览量：{{data.reviewSee}}</span>
            </div>
            <div class="inf_com">{{data.reviewContent}}
            </div>
        </div>
    </div>
</template>
<script>
import naver from './../components/naver/naver.vue'
export default {
  data () {
    return {
      data: ''
    }
  },
  components: {
    naver
  },
  mounted () {
    console.log(this.$route.params.id)
    this.axios.post('api/comID',
      this.qs.stringify({
        id: this.$route.params.id
      })
    ).then((res) => {
      this.data = res.data[0]
    })
  }
}
</script>
<style scoped>
.comInformation{
  width: 100%;
  height: 500px;
  /* background-image: url(../assets/yellow.jpg); */
}
h1{
    width: 100%;
    height: 60px;
    margin-top: 60px;
    color: rebeccapurple;
    text-align: center;
    /* margin-bottom: 0; */
}
.inf_word{
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  padding-left: 2%;
  font-size: 14px;
  line-height: 20px;
  margin: 1px 0;
  color: #666;
  border-bottom: 1px solid #999;
  /* background-color: teal; */
}
.inf_word>span{
  margin-right: 5%;
}
.content{
    width: 66%;
    height: 240px;
    margin-left: 17%;
    /* background-color: salmon; */
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
}
.inf_com{
    width: 90%;
    height: 150px;
    /* background-color: rebeccapurple; */
    /* color: whitesmoke; */
    margin-left: 5%;
    margin-top: 30px;
}
</style>
