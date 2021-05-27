<template>
    <div class="videopic">
        <p></p>
        <div class="details">课程：{{math.mathName}}</div>
        <hr>
        <div class="detail_show">
            <div>
                <img src="./../../../assets/videopic/lookM.png" alt="">
                <span class="span1">{{math.mathSee}}</span>
            </div>
            <div>
                <img src="./../../../assets/videopic/reviewmath.png" alt="">
                <span class="span2">{{math.mathReview}}</span>
            </div>
            <div>
                <img src="./../../../assets/videopic/collect.png" alt="">
                <span class="span3">{{math.mathCollect}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    math: Object
  }
}
</script>
<style scoped>
.videopic{
    width: 240px;
    height: 280px;
    margin: 20px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
hr{
    margin: 0;
}
p{
    width: 240px;
    height: 200px;
    background-color: #ccc;
    margin: 0;
}
img{
    position: absolute;
    top: 12px;
    margin-left: 10px;
}
.span1{
    position: absolute;
    left: 35px;
    top: 10px;
}
.span2{
    position: absolute;
    left: 115px;
    top: 10px;
}
.span3{
    position: absolute;
    left: 195px;
    top: 10px;
}
.details{
    width: 90%;
    height: 40px;
    /* background-color: thistle; */
    margin-left: 5%;
    font-size: 14px;
    line-height: 40px;
    /* border-bottom: 1px solid #666; */
}
.details:hover{
    color: #70709c;
    font-size: 16px;
}
.detail_show{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    /* background-color: yellow; */
}
.detail_show>div{
    width: 30%;
    height: 30px;
}
</style>
