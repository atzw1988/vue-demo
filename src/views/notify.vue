<template>
    <div class="notifyPage">
        <div class="header">
            <span class="imp">重要：</span>
            <span>湖南惠民宝做了突破性创新，为保证被保险人的保险权益在理赔时不受影响，请您仔细阅读并确认以下内容:</span>
        </div>
        <div class="content">
            <div class="text1">*投保人应在所有被保险人健康状况了解的基础上履行如实告知义务。投保人承诺完全知晓所有被保险人健康状况，并如实告知。若被保险人健康与告知内容不符，发生保险事故，本公司不承担给付保险金的责任。</div>
            <div class="list bold">1、本产品的被保险人仅限长沙市社会基本医疗保险参保人(含职工、居民)</div>
            <div class="list">2、被保险人在产品生效前如已确诊恶性肿瘤，并因此导致在保险期间内发生的《湖南惠民宝特定高额药品目录》里的药品费用，<span class="bold">本产品不予支付。</span></div>
            <div class="list">3、被保险人参保前已确诊患有如下严重既往症之一的，并因此既往症及其并发症导致在保险期间内发生的<span class="bold">医疗费用不予赔付</span>，其他疾病或意外产生的医疗费用仍可正常承担。具体严重既往症包括:</div>
            <div class="list"><span class="bold">①肿瘤类：</span>恶性肿瘤、原位癌;</div>
            <div class="list"><span class="bold">②肝肾疾病类：</span>肾功能不全，肝硬化、肝功能不全;</div>
            <div class="list"><span class="bold">③心脑.血管及糖脂代谢疾病类：</span>缺血性心脏病(含冠心病、心肌梗死)、严重心律失常、脑血管疾病(脑梗死、脑出血)，高血压3级(收缩压≥180mmHg或舒张压≥110mmHg)，糖尿病且伴有并发症;慢性心功能不全(心功能三级及以上)、主动脉瘤或主动脉夹层;</div>
            <div class="list"><span class="bold">④肺部疾病类：</span>慢性阻塞性肺病、慢性呼吸衰竭。</div>
        </div>
        <div class="btns">
            <div class="cancel" @click="cancel">不确定，返回确认</div>
            <div class="comfirm" @click="comfirm">已知悉，继续投保</div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    cancel () {
      this.$router.go(-1)
    },
    comfirm () {
      this.$router.push({
        name: 'form'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.notifyPage {
    width: 100%;
    height: calc(100vh - 54px);
    background-color: #FFFFFF;
    font-size: 14px;
    color: #333333;
    text-align: justify;
    overflow-y: auto;
    .header {
        padding: 6px 15px;
        background-color: #F7F7F7;
        font-size: 12px;
        .imp {
            color: #52A8F2;
        }
    }
    .content {
        padding: 10px 15px;
        .text1 {
            font-size: 12px;
            color: #52A8F2;
            margin-bottom: 15px;
        }
        .list {
            line-height: 1.8;
        }
        .bold {
            font-weight: bold;
        }
    }
    .btns {
        width: 100%;
        height: 54px;
        position: fixed;
        left: 0;
        bottom: 0;
        box-shadow: -2px 0 2px #333333;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .cancel, .comfirm {
            width: 44%;
            height: 38px;
            border-radius: 4px;
            text-align: center;
            line-height: 38px;
            color: #FFA028;
            border: 1px solid #FFA028
        }
        .comfirm {
            background-color: #FFA028;
            color: #FFFFFF;
        }
    }
}
</style>
