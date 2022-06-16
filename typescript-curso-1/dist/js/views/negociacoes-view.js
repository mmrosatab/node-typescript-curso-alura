import { View } from "./view.js";
export class NegociacaoView extends View {
    template(model) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map(negociacao => {
            return `
            <tr>
              <td>${negociacao.quantidade}</td>
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
              <td>${negociacao.valor}</td>
            </tr>
            `;
        }).join('')}
        </tbody>
      </table> 
    `;
    }
}
