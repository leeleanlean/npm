// 校验方法
import { check } from './check'

// 非空判断
export const isNotEmpty = (value: string) => {
  return value !== undefined && value !== '' && value !== null
}
// 导出模块
const install = (Vue: { prototype: { vCheck: (item: any) => any[]; }; }) => {
  Vue.prototype.vCheck = (item) => {
    let rules = []
    let _trigger = item.trigger || 'blur'
    // required
    if (item.required) {
      rules.push({
        required: true,
        validator: check.checkNotNull,
        trigger: _trigger
      })
    }
    // maxLength => 最大字符串
    if (isNotEmpty(item.maxLength)) {
      rules.push({
        min: 1,
        max: item.maxLength,
        message: '最多输入' + item.maxLength + '个字符!',
        trigger: _trigger
      })
    }
    // min&&max => 字符串介于最小值和最大值之间
    if (isNotEmpty(item.min) && isNotEmpty(item.max)) {
      rules.push({
        required: true,
        min: item.min,
        max: item.max,
        message: '字符长度在' + item.min + '至' + item.max + '之间!',
        trigger: _trigger
      })
    }
    if (item.type) {
      let type = item.type
      switch (type) {
        // 不能早于当前时间
        case 'notEarlier':
          rules.push({
            required: true,
            validator: check.checkNotEarlier
          })
          break
        // 不能为未来时间
        case 'notFutureTime':
          rules.push({
            required: true,
            validator: check.checkNotFutureTime
          })
          break
        // 是否数字
        case 'number':
          rules.push({
            validator: check.checkNumber,
            trigger: _trigger
          })
          break
        // 是否日期时间
        case 'date':
          rules.push({
            type: 'date',
            message: '必须为日期时间格式!',
            trigger: 'change'
          })
          break
        // 手机校验
        case 'mobile':
          rules.push({
            required: true,
            validator: check.checkMobile,
            trigger: _trigger
          })
          break
        // 邮箱校验
        case 'email':
          rules.push({
            required: true,
            validator: check.checkEmail,
            trigger: _trigger
          })
          break
        // 身份证校验
        case 'idCard':
          rules.push({
            required: true,
            validator: check.checkIdCard,
            trigger: _trigger
          })
          break
        // url校验
        case 'url':
          rules.push({
            required: true,
            validator: check.checkUrl,
            trigger: _trigger
          })
          break
        // 中英文字符串或者下划线
        case 'characters':
          rules.push({
            required: true,
            validator: check.checkCharacters,
            trigger: _trigger
          })
          break
        // 正整数
        case 'integer':
          rules.push({
            validator: check.checkInteger,
            trigger: _trigger
          })
          break
        // 整数(包括正负)
        case 'int':
          rules.push({
            validator: check.checkInt,
            trigger: _trigger
          })
          break
        // 匹配由数字和26个英文字母组成的字符串
        case 'upperCaseNumber':
          rules.push({
            required: true,
            validator: check.checkUpperCaseNumber,
            trigger: _trigger
          })
          break
        // 验证金额
        case 'money':
          rules.push({
            required: true,
            validator: check.checkMoney,
            trigger: _trigger
          })
          break
        // 验证折扣
        case 'sales':
          rules.push({
            required: true,
            validator: check.checkSales,
            trigger: _trigger
          })
          break
        // 验证最多保留两位小数的正数
        case 'decimal':
          rules.push({
            required: true,
            validator: check.checkDecimal,
            trigger: _trigger
          })
          break
        // 验证最多保留四位小数的正数
        case 'fourdecimal':
          rules.push({
            required: true,
            validator: check.checkFourDecimal,
            trigger: _trigger
          })
          break
        // 最多保留两位小数的正数或负数
        case 'decimals':
          rules.push({
            required: true,
            validator: check.checkDecimals,
            trigger: _trigger
          })
          break
        // 校验最多为 item.decimal(页面中设置的参数) 位小数的正数或负数
        case 'mouseDecimal':
          rules.push({
            required: true,
            validator: check.checkMouseDecimal.bind(item),
            trigger: _trigger
          })
          break
        default:
          rules.push({})
          break
      }
    }
    // minNum&&maxNum => 校验 介于最小值与最大值的数字
    if (isNotEmpty(item.minNum) && isNotEmpty(item.maxNum)) {
      rules.push({
        required: true,
        validator: check.checkMinMaxNumber.bind(item),
        trigger: _trigger
      })
    }
    // minNum => 校验 不能小于最小值
    if (isNotEmpty(item.minNum)) {
      rules.push({
        required: true,
        validator: check.checkMinNumber.bind(item),
        trigger: _trigger
      })
    }
    // maxNum => 校验 不能大于最大值
    if (isNotEmpty(item.maxNum)) {
      rules.push({
        required: true,
        validator: check.checkMaxNumber.bind(item),
        trigger: _trigger
      })
    }
    return rules
  }
}
export default install
