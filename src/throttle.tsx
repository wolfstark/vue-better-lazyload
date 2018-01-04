// export default function throttle (action: () => void, delay: number) {
//   let timeout: null | number = null
//   let lastRun = 0
//   return function () {
//     if (timeout) {
//       return
//     }
//     const elapsed = Date.now() - lastRun
//     const runCallback = () => {
//       lastRun = Date.now()
//       timeout = null
//       action.apply(this, arguments)
//     }
//     if (elapsed >= delay) {
//       runCallback()
//     } else {
//       timeout = setTimeout(runCallback, delay)
//     }
//   }
// }
