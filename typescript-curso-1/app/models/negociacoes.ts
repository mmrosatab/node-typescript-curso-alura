import { Negociacao } from "./negociacao.js";

export class Negociacoes{
  private negociacoes: Array<Negociacao> = [];
  // private negociacoes: Negociacao[] = []; same thing

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao>{
    return [...this.negociacoes];
  }

  // lista(): readonly Negociacao[] {
  //   return [...this.negociacoes];
  // }
}