// export default (str) => {
//   // 字符串以空格分隔开
//   let arr = str.split(' ')
//   let result = arr.map(item => {
//     // 对数组中每个元素进行反转
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// export default (str) => {
//   // 字符串以空格分隔开
//   return str.split(' ').map(item => {
//     // 对数组中每个元素进行反转
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   // 字符串以空格分隔开 正则
//   return str.split(/\s/g).map(item => {
//     // 对数组中每个元素进行反转
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  // 字符串以空格分隔开 match 识别 所有单词
  return str.match(/[\w']+/g).map(item => {
    // 对数组中每个元素进行反转
    return item.split('').reverse().join('')
  }).join(' ')
}
