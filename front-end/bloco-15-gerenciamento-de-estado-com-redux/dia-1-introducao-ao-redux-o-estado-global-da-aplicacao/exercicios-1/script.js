const BUTTON_NEXT = document.getElementById("next");
const BUTTON_PREVIOUS = document.getElementById("previous");
const BUTTON_RANDOM = document.getElementById("random");

const ESTADO_INICIAL = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const NEXT_COLOR = (state) => {
  return state.index < ESTADO_INICIAL.colors.length - 1
    ? state.index + 1
    : state.index;
};

const PREVIOUS_COLOR = (state) => {
  return state.index > 0 ? state.index - 1 : state.index;
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

BUTTON_NEXT.addEventListener("click", () => {
  store.dispatch({
    type: "NEXT_COLOR",
  });
});

BUTTON_PREVIOUS.addEventListener("click", () => {
  store.dispatch({
    type: "PREVIOUS_COLOR",
  });
});

BUTTON_RANDOM.addEventListener("click", () => {
  store.dispatch({
    type: "RANDOM_COLOR",
  });
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById("value").innerHTML = colors[index];
  document.getElementById("container").style.backgroundColor = colors[index];
  console.log(colors);
});

function criarCor() {
  const oneChar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let cor = "#";
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}
