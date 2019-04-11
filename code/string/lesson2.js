export default (str) => {
  // 建立数据结构堆栈，用来保存数据
  let arr = []
  // 给定任意子输入都返回一个符合条件的第一个数据
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    // 取反
    let k = (j[0] ^ 1).toString().repeat(j.length)
    // 正则对象 动态规则
    let reg = new RegExp(`^(${j}${k})`)
    if (reg.test(str)) {
      // RegExp.$1：RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0; i < (str.length - 1); i++) {
    let sub = match(str.slice(i))
    if (sub) {
      arr.push(sub)
    }
  }
  return arr
}
