<template>
  <div class="formPage">
        <div class="my">
            <div class="title">购买人</div>
            <van-field
                v-model="form.name"
                name="姓名"
                label="姓名"
                placeholder="请输入姓名"
                label-align="left"
                :rules="[{ required: true, message: '请输入姓名' }]"
            />
            <van-field
                readonly
                clickable
                is-link
                name="picker"
                :value="form.cardType"
                label="证件类型"
                placeholder="点击选择证件类型"
                @click="showPickerM = true"
                />
                <van-popup v-model="showPickerM" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirmM"
                    @cancel="showPickerM = false"
                />
                </van-popup>
            <van-field
                v-model="form.cardNo"
                name="证件号"
                label="证件号"
                placeholder="请输入证件号"
                :rules="[{ required: true, message: '请输入证件号' }]"
            />
            <van-field
                v-model="form.phone"
                name="手机号"
                label="手机号"
                type="tel"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '请输入手机号' }]"
            />
            <van-field
                v-model="code"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
                >
                <template #button>
                    <span class="code" :class="{disable: disable}" @click="getCode">{{codeText}}</span>
                </template>
            </van-field>
            <div class="bind">信息绑定</div>
        </div>
        <div class="other">
            <div class="title">参保人</div>
            <div class="item" v-for="(item, index) in list" :key="index">
                <div class="header">
                    <div class="index">
                        <div class="no">{{index + 1}}</div>
                        <div>参保人{{index + 1}}</div>
                    </div>
                    <img @click="deletePerson(index)" class="delete" src="../assets/delete.png" alt="" srcset="">
                </div>
                <div class="rel">
                    <div
                        v-for="(ele, no) in rel"
                        :key="no"
                        @click="relaChange(index, no)"
                        :class="{active: no == item.rela}"
                        class="icon">{{ele}}</div>
                </div>
                <van-field
                    v-model="item.name"
                    name="姓名"
                    label="姓名"
                    placeholder="请输入姓名"
                    label-align="left"
                    :rules="[{ required: true, message: '请输入姓名' }]"
                />
                <van-field
                    readonly
                    clickable
                    is-link
                    name="picker"
                    :value="item.cardType"
                    label="证件类型"
                    placeholder="点击选择证件类型"
                    @click="showpick(index)"
                    />
                    <van-popup v-model="showPicker" position="bottom">
                    <van-picker
                        show-toolbar
                        :columns="columns"
                        @confirm="onConfirmP"
                        @cancel="showPicker = false"
                    />
                    </van-popup>
                <van-field
                    v-model="item.cardNo"
                    name="证件号"
                    label="证件号"
                    placeholder="请输入证件号"
                    :rules="[{ required: true, message: '请输入证件号' }]"
                />
                <van-field
                    v-model="item.phone"
                    name="手机号"
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请输入手机号' }]"
                />
            </div>
            <div class="add" @click="addPerson">
                <img class="addIcon" src="../assets/add.png" alt="" srcset="">
                <div>新增参保人</div>
            </div>
        </div>
        <div class="notice">
            <van-checkbox icon-size="17" v-model="checked">
                <span class="text">已阅读并同意<span class="list">《责任免除》、《产品详情》、《投保须知》、《被保险人声明》、《客户告知书》、《保险条款》、《保险经纪委托合同》</span></span>
            </van-checkbox>
        </div>
        <div class="btns">
            <div class="left">
                <div class="price">价格<span class="number">¥<span>69</span></span>/人</div>
            </div>
            <div class="buyNow" @click="buyNow">立即投保</div>
        </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { setInterval, clearInterval } from 'timers'
const item = {
  name: '',
  cardType: '身份证',
  cardNo: '',
  phone: '',
  rela: 0
}
export default {
  data () {
    return {
      rel: ['本人', '配偶', '父母', '子女'],
      list: [],
      form: {
        cardType: '身份证'
      },
      code: '',
      showPickerM: false,
      showPicker: false,
      columns: ['身份证', '台胞证', '港澳通行证'],
      checked: false,
      index: 0,
      codeText: '获取验证码',
      timer: null,
      disable: false
    }
  },
  beforeMount () {
    this.list.push(JSON.parse(JSON.stringify(item)))
  },
  methods: {
    // 获取手机验证码
    getCode () {
      const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
      if (!reg.test(this.form.phone)) return Toast.fail('请输入正确的手机号码')
      if (!this.disable) this.codeTiming()
    },
    // 验证码倒计时
    codeTiming () {
      let no = 60
      this.disable = true
      this.codeText = `${no}秒后过期`
      this.timer = setInterval(() => {
        if (no > 1) {
          no--
          this.codeText = `${no}秒后过期`
        } else {
          this.codeText = '重新获取验证码'
          this.disable = false
          clearInterval(this.timer)
        }
      }, 1000)
    },
    // 投保人选择证件类型
    onConfirmM (e) {
      console.log(e)
      this.form.cardType = e
      this.showPickerM = false
    },
    showpick (index) {
      this.index = index
      this.showPicker = true
    },
    // 参保人选择证件类型
    onConfirmP (e) {
      console.log(e)
      this.list[this.index].cardType = e
      this.showPicker = false
    },
    // 删除参保人
    deletePerson (index) {
      if (this.list.length <= 1) return Toast.fail('参保人最少为一位')
      this.list.splice(index, 1)
    },
    // 参保人选择关系
    relaChange (index, no) {
      this.list[index].rela = no
    },
    // 新增参保人
    addPerson () {
      const params = JSON.parse(JSON.stringify(item))
      this.list.push(params)
    },
    buyNow () {
      console.log('提交')
    }
  }
}
</script>

<style lang="less" scoped>
.formPage {
    width: 100%;
    height: calc(100vh - 50px);
    overflow-y: auto;
    font-size: 14px;
    .my, .other {
        padding-top: 15px;
        .title {
            font-size: 18px;
            font-weight: bold;
            margin-left: 15px;
        }
        .code {
            color: #F3AB42;
        }
        .disable {
            color: #999999;
        }
        .bind {
            width: 92%;
            height: 44px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            line-height: 44px;
            background-color: #F3AB42;
            border-radius: 4px;
            margin: 20px auto 40px;
        }
        .item {
            .header {
                padding: 10px 15px 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .index {
                    display: flex;
                    align-items: center;
                    .no {
                        width: 17px;
                        height: 17px;
                        background-color: #52A8F2;
                        text-align: center;
                        line-height: 17px;
                        border-radius: 3px;
                        color: #FFFFFF;
                        margin-right: 8px;
                    }
                }
                .delete {
                    width: 15px;
                    height: 16px;
                }
            }
            .rel {
                padding: 0 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 0;
                .icon {
                    width: 68px;
                    height: 28px;
                    border-radius: 4px;
                    text-align: center;
                    line-height: 28px;
                    border: 1px solid #EEEEEE;
                }
                .active {
                    border-color: #F3AB42;
                    color: #F3AB42;
                }
            }
        }
        .add {
            width: 92%;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: #F3AB42;
            font-weight: bold;
            background-color: #FAFAFA;
            margin: 20px auto 0;
            .addIcon {
                width: 11px;
                height: 11px;
                display: block;
                margin-right: 7px;
            }
        }
    }
    .notice {
        padding: 0 15px;
        font-size: 12px;
        margin: 50px 0 30px;
        .list {
            color: #52A8F2;
        }
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
                        font-weight: bold;
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
