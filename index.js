const wrapper = document.querySelector(".wrapper");
const pescoco = document.querySelector(".neck");
const wowEl = document.querySelector("#wows");

const containerGrandeWow = document.querySelector("#largewowcontainer");
const wowArcoIriEl = document.querySelector("#rainbowwowcontainer");
const carameloPrimordial = document.querySelector("#carameloprimecontainer");
const secretWowContainer = document.querySelector("#secretwowcontainer");
const fibowowcontainer = document.querySelector("#fibowowcontainer");

const largewowEl = document.querySelector("#largewow");
const lengthEl = document.querySelector("#length");
const arcoIrisEl = document.querySelector("#rainbow");
const carameloPrimeEl = document.querySelector("#carameloprime");
const guidoecretoEl = document.querySelector("#secretwow");
const fiboWowEl = document.querySelector("#fibo");
const frases = [
  "#SEXTOU",
  "Pytônico",
  "#Partiu",
  "Guido",
  "Herança do C",
  "Ponteiro",
  "coisa do guido",
];

let guido = 0;
let grandewow = 0;
let rainbowguido = 0;
let secretguido = 0;
let minicaramelos = 0;
const primeguido = [];
const grandewowRequired = 10;

let fibonacciChallengeStarted = false;
let fibonacciChallengeComplete = false;
const fibonacciguido = [];
const fibonacciSecretguido = [];
let carameloPrime = false;

// document.querySelector(".print").addEventListener("click", () => {
//   if (fibonacciChallengeComplete) {
//     document.querySelector(".head").style.display = "none"
//     document.querySelector(".hatted").style.display = "block"
//   }
//   window.print()
// })

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        AdicionaPescoco(entry);
      }
    });
  },
  { rootMargin: "0px 0px 200% 0px" }
);

window.onscroll = function (ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    const lastEl = document.querySelector(".pescoco:last-child");
    AdicionaPescoco({ target: lastEl });
  }
};

function escolherFraseAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  return frases[indiceAleatorio];
}

function AdicionaPescoco(entry) {
  observer.unobserve(entry.target);

  const clonedpescoco = pescoco.cloneNode(true);
  wrapper.appendChild(clonedpescoco);
  observer.observe(clonedpescoco);

  AdicionaWow();
}

function AdicionaWow() {
  guido++;
  wowEl.innerText = guido;
  const corIntensidade = Math.min(Math.floor((guido / 10000) * 255), 255);
  const corIntensidade2 = Math.min(Math.floor((guido / 1000) * 255), 255);
  const novoWow = document.createElement("div");
  novoWow.className = "textwow";
  novoWow.innerText = escolherFraseAleatoria();
  novoWow.style.left = 100 + Math.random() * (window.innerWidth - 300) + "px";
  novoWow.style.top = wrapper.offsetHeight - 200 + "px";
  document.body.appendChild(novoWow);
  const cor = `rgb(${corIntensidade}, ${corIntensidade2}, ${
    255 - corIntensidade
  })`;

  if (guido === 10) {
    lengthEl.innerText = "indexes começarem com 0";
    novoWow.innerText = "HERANÇA DO C";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 50) {
    lengthEl.innerText = "Ada";
    novoWow.innerText = "POWER GUIDO";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 100) {
    lengthEl.innerText = "Erlang";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 150) {
    lengthEl.innerText = "Lua";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    document.body.style.backgroundColor = "rgba(0,0,0)";
    document.body.style.color = "rgba(255,255,255)";
  } else if (guido === 250) {
    lengthEl.innerText = "Elixir";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    pescoco.style.color = "#BFB30C";
  } else if (guido === 500) {
    lengthEl.innerText = "Ponteiro para ponteiro";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 1000) {
    lengthEl.innerText = "Data leak";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 2000) {
    lengthEl.innerText = "Golang";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 3000) {
    lengthEl.innerText = "Python";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 5000) {
    lengthEl.innerText = "Java 8";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
    pescoco.style.color = "rgba(10,20,50)";
  } else if (guido === 10000) {
    lengthEl.innerText = "Web Assembly";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 30000) {
    lengthEl.innerText = "Julia";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 50000) {
    lengthEl.innerText = "MariaDB";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  } else if (guido === 80000) {
    lengthEl.innerText = "de indexes começarem com 0";
    novoWow.innerText = "POWER UP";
    novoWow.style.animation = "fire 0.5s infinite alternate";
  }

  if (guido > 200 && Math.random() > 0.99) {
    injectLargeWow();
  }
}

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
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
`,
  styleSheet.cssRules.length
);

function injectLargeWow() {
  grandewow++;
  largewowEl.innerText = grandewow;

  containerGrandeWow.classList.remove("hidden");

  const novoWow = document.createElement("div");
  novoWow.className = "largewow";
  novoWow.innerText = "WOW";
  novoWow.style.left = "50%";
  novoWow.style.top = wrapper.offsetHeight - 200 + "px";
  document.body.appendChild(novoWow);

  if (grandewow === grandewowRequired) {
    wowArcoIriEl.classList.remove("hidden");
    carameloPrimordial.classList.remove("hidden");
  }
}

function Primo(n) {
  if (n < 2) return false;
  var q = Math.floor(Math.sqrt(n));

  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

function isSquare(n) {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}

function ConfereFibonacci(numberToCheck) {
  return (
    isSquare(5 * numberToCheck * numberToCheck + 4) ||
    isSquare(5 * numberToCheck * numberToCheck - 4)
  );
}

function embaralhaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function setupSecretguido() {
  secretWowContainer.classList.remove("hidden");

  const allpescocos = document.querySelectorAll(".pescoco");
  let allpescocosAsArray = Array.apply(null, allpescocos);
  allpescocosAsArray.shift();

  embaralhaArray(allpescocosAsArray);
  embaralhaArray(allpescocosAsArray);

  let total = 100;

  for (let i = 0; i < total; i++) {
    let pescocoItem = allpescocosAsArray[i];
    let pieces = pescocoItem.innerText.split("\n");
    const pieceIndex = Math.floor(Math.random() * (pieces.length - 1));
    const injectionIndex = 5 + Math.floor(Math.random() * 18);
    pieces[pieceIndex] =
      pieces[pieceIndex].slice(0, injectionIndex) +
      '<span class="secretwow">WOW</span>' +
      pieces[pieceIndex].slice(injectionIndex + 3);
    pescocoItem.innerHTML = pieces.join("\n");
  }

  const allSecretguido = document.querySelectorAll(".secretwow");
  const secretguidoAsArray = Array.apply(null, allSecretguido);
  for (let i = 0; i < secretguidoAsArray.length; i++) {
    if (ConfereFibonacci(i + 1)) {
      fibonacciSecretguido.push(secretguidoAsArray[i]);
    }
  }
}

observer.observe(pescoco);

document.querySelector(".change-hat").addEventListener("click", () => {
  const head = document.querySelector(".head").style.display;

  [
    document.querySelector(".head").style.display,
    document.querySelector(".hatted").style.display,
  ] = head == "none" ? ["block", "none"] : ["none", "block"];
});
