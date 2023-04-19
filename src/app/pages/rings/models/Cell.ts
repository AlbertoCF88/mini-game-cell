export default class Cell {
    //de vida inicial
    private _vidaCell: number;
    //representacion de la vida en la vista
    private _vidaBarraCell: number;
    //energia maxima
    private _maximaEnergiaCell: number;
    private _acumularCargaCell: number;

    constructor(
        vidaCell: number,
        vidaBarraCell: number,
        maximaEnergiaCell: number,
        acumularCargaCell: number,
    ) {
        this._vidaCell = vidaCell
        this._vidaBarraCell = vidaBarraCell
        this._maximaEnergiaCell = maximaEnergiaCell
        this._acumularCargaCell = acumularCargaCell
    }

    //getters and setters
    public get vidaCell(): number {
        return this._vidaCell;
    }

    public set vidaCell(vidaCell: number) {
        this._vidaCell = vidaCell;
    }

    public get vidaBarraCell(): number {
        return this._vidaBarraCell;
    }

    public set vidaBarraCell(vidaBarraCell: number) {
        this._vidaBarraCell = vidaBarraCell;
    }

    public get maximaEnergiaCell(): number {
        return this._maximaEnergiaCell
    }

    public set maximaEnergiaCell(value: number) {
        this._maximaEnergiaCell = value
    }

    public get acumularCargaCell(): number {
        return this._acumularCargaCell;
    }

    public set acumularCargaCell(acumularCargaCell: number) {
        //no puede ser nunca mayor a su maximo energia
        if (acumularCargaCell > this.maximaEnergiaCell) {
            this._acumularCargaCell = this._maximaEnergiaCell;
        }
        this._acumularCargaCell = acumularCargaCell;
    }

}