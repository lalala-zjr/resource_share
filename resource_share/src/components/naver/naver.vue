<template>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>数学</li>
            <li>英语</li>
            <li>政治</li>
            <li>交流</li>
            <li>个人</li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
#nav{
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: rgba(fff, fff, fff, 0.5);
    z-index: 5;
    border-bottom: 1px solid #ccc;
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
    /* background-color: thistle; */
}
li:hover{
    border-bottom: 5px solid #ff812a;
    cursor: pointer;
}
</style>
