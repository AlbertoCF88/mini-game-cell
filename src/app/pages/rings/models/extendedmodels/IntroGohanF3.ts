import Gohan from "../Gohan";

export default class IntroGohanF3 extends Gohan {
    private _baseSS1: boolean;
    private _defensaSS1: boolean;
    private _cargaSS2: boolean;
    private _baseSS2: boolean;

    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        baseSs1: boolean = false,
        defensaSS1: boolean = false,
        cargaSS2: boolean = false,
        baseSS2: boolean = false
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)
        this._baseSS1 = baseSs1;
        this._defensaSS1 = defensaSS1;
        this._cargaSS2 = cargaSS2;
        this._baseSS2 = baseSS2;
    }

    public get baseSS1(): boolean {
        return this._baseSS1;
    }

    public set baseSS1(baseSS1: boolean) {
        this._baseSS1 = baseSS1;
    }

    public get defensaSS1(): boolean {
        return this._defensaSS1;
    }

    public set defensaSS1(defensaSS1: boolean) {
        this._defensaSS1 = defensaSS1;
    }

    public get cargaSS2(): boolean {
        return this._cargaSS2;
    }

    public set cargaSS2(cargaSS2: boolean) {
        this._cargaSS2 = cargaSS2;
    }

    public get baseSS2(): boolean {
        return this._baseSS2;
    }

    public set baseSS2(baseSS2: boolean) {
        this._baseSS2 = baseSS2;
    }

}