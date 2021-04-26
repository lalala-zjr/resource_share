<template>
    <div class="videopic">
        <p></p>
        <div class="details">2020年数学一真题讲解</div>
        <div class="detail_show">
            <div>
                <img src="./../../assets/videopic/look.png" alt="">
                <span>234</span>
            </div>
            <div>
                <img src="./../../assets/videopic/review.png" alt="">
                <span>234</span>
            </div>
            <div>
                <img src="./../../assets/videopic/like.png" alt="">
                <span>234</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.videopic{
    width: 240px;
    height: 300px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
p{
    width: 240px;
    height: 200px;
    background-color: #ccc;
    margin: 0;
}
.details{
    width: 90%;
    height: 40px;
    /* background-color: thistle; */
    margin-left: 5%;
    font-size: 14px;
    /* border-bottom: 1px solid #666; */
}
.detail_show{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: yellow; */
}
.detail_show>div{
    width: 30%;
    height: 30px;
}
</style>
