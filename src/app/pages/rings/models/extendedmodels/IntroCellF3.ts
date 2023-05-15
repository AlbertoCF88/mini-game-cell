import Cell from "../Cell";

export default class IntroCellF3 extends Cell {
    private _base: boolean;
    private _carga: boolean;
    private _atacaMini: boolean;
    private _gifOstias: boolean;

    private _bocadillo1: boolean;
    private _bocadillo2: boolean;
    private _bocadillo3: boolean;
    private _bocadillo4: boolean;

    constructor(
        vidaCell: number,
        vidaBarraCell: number,
        maximaEnergiaCell: number,
        acumularCargaCell: number,

        base: boolean = false,
        carga: boolean = false,
        atacaMini: boolean = false,
        gifOstias: boolean = false,
        bocadillo1: boolean = false,
        bocadillo2: boolean = false,
        bocadillo3: boolean = false,
        bocadillo4: boolean = false
    ) {
        super(vidaCell, vidaBarraCell, maximaEnergiaCell, acumularCargaCell)
        this._base = base;
        this._carga = carga;
        this._atacaMini = atacaMini;
        this._gifOstias = gifOstias;
        this._bocadillo1 = bocadillo1;
        this._bocadillo2 = bocadillo2;
        this._bocadillo3 = bocadillo3;
        this._bocadillo4 = bocadillo4;
    }

    public get base(): boolean {
        return this._base;
    }

    public set base(base: boolean) {
        this._base = base;
    }

    public get carga(): boolean {
        return this._carga;
    }

    public set carga(carga: boolean) {
        this._carga = carga;
    }

    public get atacaMini(): boolean {
        return this._atacaMini;
    }

    public set atacaMini(atacaMini: boolean) {
        this._atacaMini = atacaMini;
    }

    public get gifOstias(): boolean {
        return this._gifOstias;
    }

    public set gifOstias(gifOstias: boolean) {
        this._gifOstias = gifOstias;
    }

    public get bocadillo1(): boolean {
        return this._bocadillo1;
    }

    public set bocadillo1(bocadillo1: boolean) {
        this._bocadillo1 = bocadillo1;
    }

    public get bocadillo2(): boolean {
        return this._bocadillo2;
    }

    public set bocadillo2(bocadillo2: boolean) {
        this._bocadillo2 = bocadillo2;
    }

    public get bocadillo3(): boolean {
        return this._bocadillo3;
    }

    public set bocadillo3(bocadillo3: boolean) {
        this._bocadillo3 = bocadillo3;
    }

    public get bocadillo4(): boolean {
        return this._bocadillo4;
    }

    public set bocadillo4(bocadillo4: boolean) {
        this._bocadillo4 = bocadillo4;
    }

}