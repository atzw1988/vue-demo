<template>
  <div class="home">
    <img v-for="(item, index) in list" :key="index" class="img" :src="item" alt="" srcset="">
    <!-- <img class="img" src="../assets/home2.png" alt="" srcset="">
    <img class="img" src="../assets/home3.png" alt="" srcset="">
    <img class="img" src="../assets/home4.png" alt="" srcset=""> -->
    <div class="btns">
      <div class="left">
        <div class="price">价格<span class="number">¥<span>69</span></span>/人</div>
      </div>
      <div class="buyNow" @click="buyNow">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: [
        `https://tupian.yhulian.cn/group1/M00/00/34/wKgBDF9XRA6ATnneAATxNDAbC3g179.png?${Math.random()}`,
        `https://tupian.yhulian.cn/group1/M00/00/34/wKgBDF9XRA-Acxz6AAPwvXYHCTw489.png?${Math.random()}`,
        `https://tupian.yhulian.cn/group1/M00/00/34/wKgBDF9XRBGADS13AAOrTJDIevA769.png?${Math.random()}`,
        `https://tupian.yhulian.cn/group1/M00/00/34/wKgBDF9XRBOAEM-lAARCA1yytfI705.png?${Math.random()}`
      ]
    }
  },
  methods: {
    buyNow () {
      console.log('buy')
      this.$router.push({
        name: 'notify'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: auto;
  font-size: 12px;
  .img {
    width: 100%;
    margin: 0;
    display: block;
    height: auto;
  }
  .btns {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    .left {
      color: #333333;
      width: 50%;
      display: flex;
      align-items: center;
      background-color: #F7F7F7;
      height: 100%;
      .price {
        margin-left: 15px;
        .number {
          color: #D81E07;
          span {
            font-size: 22px;
          }
        }
      }
    }
    .buyNow {
      background-color: #FFA028;
      color: #FFFFFF;
      text-align: center;
      height: 100%;
      width: 50%;
      line-height: 50px;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
