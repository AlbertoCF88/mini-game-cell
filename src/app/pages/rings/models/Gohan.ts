export default class Gohan {
    //vida inicial
    private _vidaGohan: number;
    //representacion de la vida en la vista
    private _vidaBarraGohan: number;
    //energia maxima
    private _maximaEnergiaGohan: number;
    private _acumularCargaGohan: number;

    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,
    ) {
        this._vidaGohan = vidaGohan
        this._vidaBarraGohan = vidaBarraGohan
        this._maximaEnergiaGohan = maximaEnergiaGohan
        this._acumularCargaGohan = acumularCargaGohan
    }

    //getters and setters
    public get vidaGohan(): number {
        return this._vidaGohan;
    }

    public set vidaGohan(vidaGohan: number) {
        this._vidaGohan = vidaGohan;
    }

    public get vidaBarraGohan(): number {
        return this._vidaBarraGohan;
    }

    public set vidaBarraGohan(vidaBarraGohan: number) {
        this._vidaBarraGohan = vidaBarraGohan;
    }

    public get maximaEnergiaGohan(): number {
        return this._maximaEnergiaGohan
    }

    public set maximaEnergiaGohan(value: number) {
        this._maximaEnergiaGohan = value
    }

    public get acumularCargaGohan(): number {
        return this._acumularCargaGohan;
    }

    public set acumularCargaGohan(acumularCargaGohan: number) {
        //no puede ser nunca mayor a su maximo energia
        if (acumularCargaGohan > this.maximaEnergiaGohan) {
            this._acumularCargaGohan = this._maximaEnergiaGohan;
        }
        this._acumularCargaGohan = acumularCargaGohan;
    }

}
