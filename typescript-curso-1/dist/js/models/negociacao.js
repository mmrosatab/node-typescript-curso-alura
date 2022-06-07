export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this.data;
    }
    get quantidade() {
        return this.quantidade;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
