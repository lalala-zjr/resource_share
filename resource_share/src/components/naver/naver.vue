<template>
    <div id="nav">
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
    background: rgba(230, 230, 230, 0.5);
    z-index: 5;
}
ul{
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
    border-bottom: 5px solid #ff812a;
    cursor: pointer;
}
</style>
