import {
  buttonPlay,
  buttonStop,
  buttonIncrementTime,
  buttonDecrementTime,
  buttonFlorest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,

} from './elements.js'



export default function ({ timer, sound }) {

  let soundOn = false



  function PlayFlorest() {
    if (soundOn == false) {
      soundOn = true
      buttonFlorest.classList.add('selected')
      sound.buttonPressFlorest.play()
    } else {
      soundOn = false
      buttonFlorest.classList.remove('selected')
      sound.buttonPressFlorest.pause()
    }
  }

  function PlayRain() {
    if (soundOn == false) {
      soundOn = true
      buttonRain.classList.add('selected')
      sound.buttonPressRain.play()
    } else {
      soundOn = false
      buttonRain.classList.remove('selected')
      sound.buttonPressRain.pause()
    }
  }

  function PlayCoffe() {
    if (soundOn == false) {
      soundOn = true
      buttonCoffeeShop.classList.add('selected')
      sound.buttonPressCoffeeShop.play()
    } else {
      soundOn = false
      buttonCoffeeShop.classList.remove('selected')
      sound.buttonPressCoffeeShop.pause()
    }
  }

  function PlayFire() {
    if (soundOn == false) {
      soundOn = true
      buttonFirePlace.classList.add('selected')
      sound.buttonPressFirePlace.play()
    } else {
      soundOn = false
      buttonFirePlace.classList.remove('selected')
      sound.buttonPressFirePlace.pause()
    }
  }

  buttonPlay.addEventListener('click', function () {
    timer.countDown()
    sound.pressButtonPlay()

  })

  buttonStop.addEventListener('click', function () {
    sound.pressButtonStop()
    timer.reset()

  })

  buttonIncrementTime.addEventListener('click', function () {
    sound.pressButtonPlay()
    timer.MoreTime()
  })

  buttonDecrementTime.addEventListener('click', function () {
    sound.pressButtonPlay()
    timer.LessTime()
  })

  buttonFlorest.addEventListener('click', function () {
    PlayFlorest()
  })

  buttonRain.addEventListener('click', function () {
    PlayRain()
  })

  buttonFirePlace.addEventListener('click', function () {
    PlayFire()
  })

  buttonCoffeeShop.addEventListener('click', function () {
    PlayCoffe()
  })
}