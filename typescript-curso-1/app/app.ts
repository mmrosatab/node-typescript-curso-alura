import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  controller.adiciona();
});
