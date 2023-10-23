
function debounce(fun, wait = 500) {
  let timeout = null
  return function() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      fun()
    }, wait)
  }
}
function throttle(fun, wait = 500) {
  let startTime = Date.now()
  return function() {
    const currtime = Date.now()
    if (currtime - startTime >= wait) {
      fun()
      startTime = currtime
    }
  }
}
export default {
  debounce,
  throttle
} // 导出防抖函数和节流函数
