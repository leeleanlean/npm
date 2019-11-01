import {
  // 11位手机号
  validateMobile,
  // 邮箱
  validateEmail,
  // 身份证
  validateIDCard,
  // url
  validateURL,
  // 中英文字符
  validateCharacters,
  // 正整数
  validateInteger,
  // 是否为整数(包括正负)
  validateInt,
  // 是否是数字
  validateNumber,
  // 匹配由数字和26个英文字母组成的字符串
  validateUpperCaseNumber,
  // 验证金额
  validateMoney,
  // 验证折扣
  validateSales,
  // 验证最多保留两位小数的正数
  validateDecimal,
  // 验证最多保留四位小数的正数
  validateFourDecimal,
  // 验证最多保留两位小数的正数或负数
  validateDecimals,
  // 验证最多保留四位小数的正数
  validateMouseDecimal
} from './validate'

export const check = {
  // 非空校验
  checkNotNull (rule: any, value: any, callback: { (arg0: Error): void;(): void; }) {
    if (String(value).replace(/^\s+|\s+$/gm, '') === '' || (value instanceof Array && value[0] === '') || value === null || value === undefined) {
      callback(new Error('输入内容不能为空!'))
    } else {
      callback()
    }
  },
  // 11位手机号
  checkMobile (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateMobile(value).status) {
        callback(new Error('您输入的手机号不正确!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 邮箱
  checkEmail (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateEmail(value).status) {
        callback(new Error('请输入有效的邮箱!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 身份证号
  checkIdCard (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateIDCard(value).status) {
        callback(new Error('身份证号码不合规!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // url
  checkUrl (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateURL(value).status) {
        callback(new Error('URL不合规!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 中英文字符串或者下划线!
  checkCharacters (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateCharacters(value).status) {
        callback(new Error('中英文字符串或者下划线!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 正整数!
  checkInteger (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateInteger(value).status) {
        callback(new Error('必须为正整数!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 整数(包括正负)
  checkInt (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateInt(value).status) {
        callback(new Error('必须为整数!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 是否是数字!
  checkNumber (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateNumber(value).status) {
        callback(new Error('必须为数字!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 匹配由数字和26个英文字母组成的字符串!
  checkUpperCaseNumber (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateUpperCaseNumber(value).status) {
        callback(new Error('必须为数字和26个英文字母组成的字符串!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证金额!
  checkMoney (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateMoney(value).status) {
        callback(new Error('金额不合规!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证折扣!
  checkSales (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateSales(value).status) {
        callback(new Error('金额不合规!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证最多保留两位小数的正数!
  checkDecimal (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateDecimal(value).status) {
        callback(new Error('最多保留两位正小数!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证最多保留四位小数的正数!
  checkFourDecimal (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateFourDecimal(value).status) {
        callback(new Error('最多保留四位正小数!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证最多保留两位小数的正数或负数!
  checkDecimals (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateDecimals(value).status) {
        callback(new Error('最多保留两位小数!'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证最多保留 this.decimal(传入的参数) 位小数的正数
  checkMouseDecimal (rule: any, value: string, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateMouseDecimal(value, (this as any).decimal).status) {
        callback(new Error(validateMouseDecimal(value, (this as any).decimal).msg))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证介于最小值和最大值直接的数字
  checkMinMaxNumber (rule: any, value: string | number, callback: { (arg0: Error): void;(arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateNumber(value).status) {
        callback(new Error('输入数值介于' + (this as any).minNum + '和' + (this as any).maxNum + '之间！'))
      } else {
        if ((this as any).minNum > value || (this as any).maxNum < value) {
          callback(new Error('输入数值介于' + (this as any).minNum + '和' + (this as any).maxNum + '之间！'))
        } else {
          callback()
        }
      }
    } else {
      callback()
    }
  },
  // 验证不能小于最小值数字
  checkMinNumber (rule: any, value: string | number, callback: { (arg0: Error): void;(arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateNumber(value).status) {
        callback(new Error('输入数值不能小于' + (this as any).minNum))
      } else {
        if ((this as any).minNum > value) {
          callback(new Error('输入数值不能小于' + (this as any).minNum))
        } else {
          callback()
        }
      }
    } else {
      callback()
    }
  },
  // 验证不能大于最大值数字
  checkMaxNumber (rule: any, value: string | number, callback: { (arg0: Error): void;(arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (!validateNumber(value).status) {
        callback(new Error('输入数值不能大于' + (this as any).maxNum))
      } else {
        if ((this as any).maxNum < value) {
          callback(new Error('输入数值不能大于' + (this as any).maxNum))
        } else {
          callback()
        }
      }
    } else {
      callback()
    }
  },
  // 验证不能早于当前时间
  checkNotEarlier (rule: any, value: string | number | Date, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (Date.now() - new Date(value).getTime() > 0) {
        callback(new Error('不能早于当前时间'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  },
  // 验证不能为未来时间
  checkNotFutureTime (rule: any, value: string | number | Date, callback: { (arg0: Error): void;(): void;(): void; }) {
    if (value !== null && value !== '') {
      if (Date.now() - new Date(value).getTime() < 0) {
        callback(new Error('不能为未来时间'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  }
}
