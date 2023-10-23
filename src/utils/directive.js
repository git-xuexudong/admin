const debounce = {
  bind: (el, binding) => {
    let throttleTime = binding.value
    if (!throttleTime) { throttleTime = 500 }
    let timer
    let disable = false
    el.addEventListener('click', event => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!disable) {
        disable = true
      } else {
        event && event.stopImmediatePropagation()
      }
      timer = setTimeout(() => {
        timer = null
        disable = false
      }, throttleTime)
    }, true)
  }
}
export default {
  debounce
}
