# vue-element-validation

This is a user-defined component that can quickly verify the form, which is applicable to the projects built by <u>Vue + element UI</u>.

Some common methods are provided to eliminate the tedious problem that the traditional verification is written to the rules object.

### Install
> npm i vue-element-validation

### Github
<u>[Source Link](https://github.com/leeleanlean/npm/tree/master/vue-element-validation)</u>

### Example

Add parameters to the elements to be verified 
<u>:rules</u> Pass in the <u>vCheck()</u> methods and parameters to verify the form.


```
// Step1: ./src/main.js

import Validation from 'vue-element-validation'
Vue.use(Validation)

// Step2: ./src/pages/index.vue

<el-form :model="form">
  <el-form-item
    label="Name"
    prop="name"
    :rules="vCheck({ required: true, trigger: 'blur' })">
    <el-input type="text" v-model="form.name"></el-input>
  </el-form-item>
</el-form>
```

### TypeScript
This global component supports the Vue project based on typescript.

### Attributes
|   参数   |  说明   |  Desc   |
|  ----   |  ----   |  ----   |
| required  | 是否必填 | Is it necessary to fill in |
| trigger   | 校验触发事件 | Verification trigger event |
| max   | 最大长度 | Maximum length |
| message   | 校验提示信息 | Verification prompt information |
| min   | 最小值 | Minimum value |
| minNum   | 最小数值 | Minimum value |
| max   | 最大值 | Maximum value |
| maxNum   | 最大数值 | Maximum value |
| type='notEarlier'   | 不能早于当前时间 | Cannot be earlier than the current time |
| type='notFutureTime'   | 不能为未来时间 | Not for the future |
| type='number'   | 数字校验 | Digital check |
| type='date'   | 日期时间校验 | Date time verification |
| type='mobile'   | 手机校验 | Mobile phone calibration |
| type='email'   | 邮箱校验 | Mailbox check |
| type='idCard'   | 身份证校验 | Verification of ID card |
| type='url'   | url校验 | URL check |
| type='characters'   | 中英文字符串或者下划线 | Chinese and English strings or underscores |
| type='integer'   | 正整数 | positive integer |
| type='int'   | 整数(包括正负) | Integer (including positive and negative) |
| type='upperCaseNumber'   | 匹配由数字和26个英文字母组成的字符串 | Matches a string of numbers and 26 English letters |
| type='money'   | 验证金额 | Verification amount |
| type='sales'   | 验证折扣 | Verification discount |
| type='decimal'   | 验证最多保留两位小数的正数 | Verify that a positive number of up to two decimal places is retained |
| type='fourdecimal'   | 验证最多保留四位小数的正数 | Verify that a positive number of up to four decimal places is retained |
| type='decimals'   | 最多保留两位小数的正数或负数 | Keep up to two decimal places positive or negative |
| type='mouseDecimal'   | 校验最多为 item.decimal(页面中设置的参数) 位小数的正数或负数 | Verify up to a positive or negative number of decimal places in item.decimal (parameter set in the page) |

### Thanks

Thank you for your support - Lean