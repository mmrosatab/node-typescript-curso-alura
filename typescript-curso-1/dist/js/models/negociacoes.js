export class Negociacoes {
    constructor() {
        this.negociacoes = [];
        // lista(): readonly Negociacao[] {
        //   return [...this.negociacoes];
        // }
    }
    // private negociacoes: Negociacao[] = []; same thing
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
