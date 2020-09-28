function init() {
  // * Elements
  const btns = document.querySelectorAll('#player > div')
  const audio = document.querySelector('#audio')

  // * Executions/Functions

  function playSound(e) {
    const filepath = `./sounds/${e.target.dataset.id}.wav`
    audio.src = filepath
    audio.play()
  }

  // * Event listeners
  btns.forEach(btn => {
    btn.addEventListener('click', playSound)
  })
}

window.addEventListener('DOMContentLoaded', init)
