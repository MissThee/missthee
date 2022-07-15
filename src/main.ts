import './style/index.less'
// import './listGenerator'

let currentUITypeStep = 0
let currentStartTimestamp = 0
const currentSplitTime = 500

const updateUIBehavior = () => {
    if (currentStartTimestamp + currentSplitTime > performance.now() || currentUITypeStep >= 5) {
        return
    }
    currentUITypeStep++
    currentStartTimestamp = performance.now()
    document.getElementById('content')?.classList.add(`content--type-${currentUITypeStep}`)
}

window.onload = () => {
    const infoCardElArr = document.getElementsByClassName('info-card')
    for (let i = 0; i < infoCardElArr.length; i++) {
        infoCardElArr[i]?.addEventListener('mouseenter', updateUIBehavior)
    }
    document.addEventListener('touchstart', updateUIBehavior)
}
export {}