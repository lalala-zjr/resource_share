<template>
  <div class="course">
    <div></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    enter () {
      if (this.$refs.phone.value.length === 0) {
        this.error = '手机号不能为空'
        this.meg = true
      } else if (this.$refs.password.value.length === 0) {
        this.error = '密码不能为空'
        this.meg = true
      } else {
        console.log(this.$refs.phone.value, this.$refs.password.value)
        this.axios.post('api/login',
          this.qs.stringify({
            phone: this.$refs.phone.value,
            password: this.$refs.password.value
          })
        ).then((res) => {
          console.log(res)
          if (res.data !== 'error') {
            this.$store.commit('setToken', { token: res.data })
            this.$router.push('./index')
          } else {
            this.notice = '手机号已存在'
            this.meg = true
          }
        })
      }
    }
  },
  created: function () {
  }
}
</script>
<style scoped>
</style>
