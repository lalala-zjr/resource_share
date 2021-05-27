<template>
    <div id="nav">
        <b><p>KY·<span class="color">考研之家</span></p></b>
        <ul>
            <li v-on:click="jump1">{{index}}</li>
            <li v-on:click="jump2">{{math}}</li>
            <li v-on:click="jump3">{{english}}</li>
            <li v-on:click="jump4">{{policy}}</li>
            <li v-on:click="jump5">{{communicate}}</li>
            <li v-on:click="jump6">{{person}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      index: '首页',
      math: '数学',
      english: '英语',
      policy: '政治',
      communicate: '交流',
      person: '个人'
    }
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
    background: rgba(133, 77, 77, 0.1);
    /* background: rgba(133, 77, 77, 0.5); */
    z-index: 5;
}
.color{
  color: rgb(96, 96, 145);
  /* color: #b18093; */
}
p{
  margin: 0;
  padding: 0;
  position: absolute;
  left: 10%;
  top: 10px;
  width: 20%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 28px;
  border-radius: 30px;
}
ul{
    margin: 0;
    padding: 0;
    width: 40%;
    height: 100%;
    /* background-color: teal; */
    position: absolute;
    right: 13%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
li{
    width: 50px;
    height: 40px;
    list-style: none;
    text-align: center;
    line-height: 40px;
    border-radius: 20%;
    /* background-color: thistle; */
}
li:hover{
    border-bottom: 5px solid #8484b4;
    /* b18093 */
    cursor: pointer;
}
</style>
