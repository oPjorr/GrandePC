const wrapper = document.querySelector(".wrapper")
const pescoco = document.querySelector(".neck")
const wowEl = document.querySelector("#wows")

const containerGrandeWow = document.querySelector("#largewowcontainer")
const wowArcoIriEl = document.querySelector("#rainbowwowcontainer")
const carameloPrimordial = document.querySelector("#carameloprimecontainer")
const secretWowContainer = document.querySelector("#secretwowcontainer")
const fibowowcontainer = document.querySelector("#fibowowcontainer")

const largewowEl = document.querySelector("#largewow")
const lengthEl = document.querySelector("#length")
const arcoIrisEl= document.querySelector("#rainbow")
const carameloPrimeEl = document.querySelector("#carameloprime")
const wowSecretoEl = document.querySelector("#secretwow")
const fiboWowEl = document.querySelector("#fibo")

let wows = 0
let grandewow = 0
let rainbowwows = 0
let secretwows = 0
let minicaramelos = 0
const primeWows = []
const grandewowRequired = 10

let fibonacciChallengeStarted = false
let fibonacciChallengeComplete = false
const fibonacciWows = []
const fibonacciSecretWows = []
let carameloPrime = false

document.querySelector(".print").addEventListener("click", () => {
  if (fibonacciChallengeComplete) {
    document.querySelector(".head").style.display = "none"
    document.querySelector(".hatted").style.display = "block"
  }
  window.print()
})

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        AdicionaPescoco(entry)
      }
    })
  },
  { rootMargin: "0px 0px 200% 0px" }
)

document.addEventListener("click", onClick)

window.onscroll = function(ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".pescoco:last-child")
    AdicionaPescoco({ target: lastEl })
  }
}

function AdicionaPescoco(entry) {
  observer.unobserve(entry.target)

  const clonedpescoco = pescoco.cloneNode(true)
  wrapper.appendChild(clonedpescoco)
  observer.observe(clonedpescoco)

  AdicionaWow()
}

function AdicionaWow() {
  wows++
  wowEl.innerText = wows
  const corIntensidade = Math.min(Math.floor(wows / 10000 * 255), 255);
  const novoWow = document.createElement("div")
  novoWow.className = "textwow"
  novoWow.innerText = "WOW"
  novoWow.style.left = 100 + Math.random() * (window.innerWidth - 300) + "px"
  novoWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(novoWow)
  const cor = `rgb(${corIntensidade}, 0, ${255 - corIntensidade})`;

  if (wows === 10) {
    lengthEl.innerText = "Double wow";
    lengthEl.style.color = `rgb(0, ${corIntensidade}, 0)`;
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 50) {
    lengthEl.innerText = "Triple wow";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate"; 
    pescoco.style.color = 'rgba(230,124,4)'
  } else if (wows === 100) {
    lengthEl.innerText = "Quadra wow";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 150) {
    lengthEl.innerText = "Penta wow";
    lengthEl.style.color = cor;
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate"; 
  } else if (wows === 250) {
    lengthEl.innerText = "Wow isso é Wow";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    pescoco.style.color = 'rgba(0,250,3)'
  } else if (wows === 500) {
    lengthEl.innerText = "Incrível wow";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";

  } else if (wows === 1000) {
    lengthEl.innerText = "Muitos wows";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    pescoco.style.color = 'rgba(100,200,50)'
  } else if (wows === 2000) {
    lengthEl.innerText = "Muitos wows mesmo";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 3000) {
    lengthEl.innerText = "Ultra Wow";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 5000) {
    lengthEl.innerText = "UWU";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    pescoco.style.color = 'rgba(10,20,50)'
  } else if (wows === 10000) {
    lengthEl.innerText = "Giga WOW";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 30000) {
    lengthEl.innerText = "WowowoW";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 50000) {
    lengthEl.innerText = "oWo";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (wows === 80000) {
    lengthEl.innerText = "OWOWOWOWOWOWOOWOWOWOWOO";
    lengthEl.style.color = cor; 
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  }

  if (wows > 200 && Math.random() > 0.99) {
    injectLargeWow()
  }
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fire {
    from {
      color: #FF5722;
      text-shadow: 0 0 10px #FF5722, 0 0 20px #FF5722, 0 0 40px #FF5722, 0 0 80px #FF5722, 0 0 160px #FF5722;
      background-color: orange
    }
    to {
      color: #FFA000;
      text-shadow: 0 0 10px #FFA000, 0 0 20px #FFA000, 0 0 40px #FFA000, 0 0 80px #FFA000, 0 0 160px #FFA000;
      background-color: red
    }
  }
`, styleSheet.cssRules.length);

function injectLargeWow() {
  grandewow++
  largewowEl.innerText = grandewow

  containerGrandeWow.classList.remove("hidden")

  const novoWow = document.createElement("div")
  novoWow.className = "largewow"
  novoWow.innerText = "WOW"
  novoWow.style.left = "50%"
  novoWow.style.top = wrapper.offsetHeight - 200 + "px"
  document.body.appendChild(novoWow)

  if(grandewow === grandewowRequired) {
    wowArcoIriEl.classList.remove("hidden")
    carameloPrimordial.classList.remove("hidden")
  }
}

function Primo(n) {
  if (n < 2) return false
  var q = Math.floor(Math.sqrt(n))

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false
    }
  }

  return true
}

function isSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0
}

function ConfereFibonacci(numberToCheck) {
  return (
    isSquare(5 * numberToCheck * numberToCheck + 4) ||
    isSquare(5 * numberToCheck * numberToCheck - 4)
  )
}

function embaralhaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function onClick(e) {
  if (e.target.className === "textwow" && grandewow >= grandewowRequired) {
    rainbowwows++
    e.target.classList.add("rainbow")

    a.innerText = rainbowwows

    let count = 0
    let Primo = primeWows.every((wowEl) => {
      count++
      return wowEl.classList.contains("rainbow")
    })

    if (carameloPrime === false && Primo === true) {
      carameloPrime = true
      carameloPrimeEl.innerText = "ACTIVE"
      setupSecretWows()
    } else if (count !== primeWows.length) {
      carameloPrimeEl.innerText = "INACTIVE (" + count + '/' + primeWows.length + ")"
    }
  }

  if (e.target.className === "secretwow") {
    e.target.classList.add("found")
    secretwows++
    wowSecretoEl.innerText = secretwows

    if (secretwows === 100) {
      fibonacciChallengeStarted = true
      fibowowcontainer.classList.remove("hidden")
    }
  }

  if (fibonacciChallengeStarted) {
    if (
      e.target.classList.contains("textwow") ||
      e.target.classList.contains("secretwow")
    ) {
      if (e.target.classList.contains("spinLeft")) {
        e.target.classList.remove("spinLeft")
        e.target.classList.add("spinRight")
      } else if (e.target.classList.contains("spinRight")) {
        e.target.classList.remove("spinRight")
        e.target.classList.add("spinLeft")
      } else {
        e.target.classList.add("spinLeft")
      }

      checkAllFiboWows()
    }
  }
}

function checkAllFiboWows() {
  let successConfirmed = true
  let innerText = 'INACTIVE '

  let right = true
  let chainOfLengthRegular = 0
  for (let i = 0; i < fibonacciWows.length; i++) {
    if (fibonacciWows[i].classList.contains(right ? "spinRight" : "spinLeft")) {
      right = !right
      chainOfLengthRegular++
    } else {
      successConfirmed = false
      break
    }
  }

  innerText += "\n (" + chainOfLengthRegular + '/' + fibonacciWows.length + ') Regular (LRL) \n'

  right = false
  let chainofLengthSecret = 0
  for (let i = 0; i < fibonacciSecretWows.length; i++) {
    if (
      fibonacciSecretWows[i].classList.contains(
        right ? "spinRight" : "spinLeft"
      )
    ) {
      chainofLengthSecret++
      right = !right
    } else {
      successConfirmed = false
      break
    }
  }

  innerText += "(" + chainofLengthSecret + '/' + fibonacciSecretWows.length + ') Secret (RLR)'

  if (successConfirmed) {
    fibonacciChallengeComplete = true
    fibo.innerText = "COMPLETE (NOW PRINT!)"
  } else {
    fibonacciChallengeComplete = false
    fibo.innerText = innerText
  }
}

function setupSecretWows() {
  secretWowContainer.classList.remove("hidden")

  const allpescocos = document.querySelectorAll(".pescoco")
  let allpescocosAsArray = Array.apply(null, allpescocos)
  allpescocosAsArray.shift() 

  embaralhaArray(allpescocosAsArray)
  embaralhaArray(allpescocosAsArray)

  let total = 100

  for (let i = 0; i < total; i++) {
    let pescocoItem = allpescocosAsArray[i]
    let pieces = pescocoItem.innerText.split("\n")
    const pieceIndex = Math.floor(Math.random() * (pieces.length - 1))
    const injectionIndex = 5 + Math.floor(Math.random() * 18)
    pieces[pieceIndex] =
      pieces[pieceIndex].slice(0, injectionIndex) +
      '<span class="secretwow">WOW</span>' +
      pieces[pieceIndex].slice(injectionIndex + 3)
    pescocoItem.innerHTML = pieces.join("\n")
  }

  const allSecretwows = document.querySelectorAll(".secretwow")
  const secretWowsAsArray = Array.apply(null, allSecretwows)
  for (let i = 0; i < secretWowsAsArray.length; i++) {
    if (ConfereFibonacci(i + 1)) {
      fibonacciSecretWows.push(secretWowsAsArray[i])
    }
  }
}

observer.observe(pescoco)
