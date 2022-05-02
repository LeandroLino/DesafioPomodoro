export default function Audios() {

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const buttonPressFlorest = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")
  const buttonPressRain = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")
  const buttonPressCoffeeShop = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")
  const buttonPressFirePlace = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")


  buttonPressFlorest.loop = true
  buttonPressRain.loop = true
  buttonPressCoffeeShop.loop = true
  buttonPressFirePlace.loop = true

  function pressButtonPlay() {
    buttonPressAudio.play()
  }

  function pressButtonStop() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }


  return {
    pressButtonPlay,
    pressButtonStop,
    timeEnd,
    buttonPressRain,
    buttonPressFlorest,
    buttonPressFirePlace,
    buttonPressCoffeeShop,

  }

}
