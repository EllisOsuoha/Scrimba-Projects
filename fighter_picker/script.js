let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {

  let fighter_1 = fighters[Math.floor(Math.random() * fighters.length)]
  let fighter_2 = fighters[Math.floor(Math.random() * fighters.length)]
  return (stageEl.textContent = `${fighter_1} Vs ${fighter_2}`)

}
)