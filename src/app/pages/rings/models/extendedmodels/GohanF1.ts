import Gohan from "../Gohan";


export default class GohanF1 extends Gohan {
    //activar acciones en vista, ocultar o mostrar animacion
    private _gohanBase: boolean;
    private _rayaGohan: boolean;
    private _golpeGohan: boolean;
    private _defensaGohan: boolean;
    private _contraGohan: boolean;
    private _cargaGohan: boolean;
    private _kameGohan: boolean;
    private _heridaGohan: boolean;

    private _ganaGohan: boolean;
    private _cansadoGohan: boolean;
    private _heridaKame: boolean;

    private _gohanPierdeCombate: boolean;

    //cosntructor con valores por defecto para no activar animaciones
    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        gohanBase: boolean = false,
        rayaGohan: boolean = false,
        golpeGohan: boolean = false,
        defensaGohan: boolean = false,
        contraGohan: boolean = false,
        cargaGohan: boolean = false,
        kameGohan: boolean = false,
        heridaGohan: boolean = false,
        ganaGohan: boolean = false,
        cansadoGohan: boolean = false,
        heridaKame: boolean = false,
        gohanPierdeCombate: boolean = false,
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)

        this._gohanBase = gohanBase
        this._rayaGohan = rayaGohan
        this._golpeGohan = golpeGohan
        this._defensaGohan = defensaGohan
        this._contraGohan = contraGohan
        this._cargaGohan = cargaGohan
        this._kameGohan = kameGohan
        this._heridaGohan = heridaGohan
        this._ganaGohan = ganaGohan
        this._cansadoGohan = cansadoGohan
        this._heridaKame = heridaKame
        this._gohanPierdeCombate = gohanPierdeCombate
    }


    //getters and setters
    public get gohanBase(): boolean {
        return this._gohanBase;
    }

    public set gohanBase(gohanBase: boolean) {
        this._gohanBase = gohanBase;
    }

    public get rayaGohan(): boolean {
        return this._rayaGohan;
    }

    public set rayaGohan(rayaGohan: boolean) {
        this._rayaGohan = rayaGohan;
    }

    public get golpeGohan(): boolean {
        return this._golpeGohan;
    }

    public set golpeGohan(golpeGohan: boolean) {
        this._golpeGohan = golpeGohan;
    }

    public get defensaGohan(): boolean {
        return this._defensaGohan;
    }

    public set defensaGohan(defensaGohan: boolean) {
        this._defensaGohan = defensaGohan;
    }

    public get contraGohan(): boolean {
        return this._contraGohan;
    }

    public set contraGohan(contraGohan: boolean) {
        this._contraGohan = contraGohan;
    }

    public get cargaGohan(): boolean {
        return this._cargaGohan;
    }

    public set cargaGohan(cargaGohan: boolean) {
        this._cargaGohan = cargaGohan;
    }

    public get kameGohan(): boolean {
        return this._kameGohan;
    }

    public set kameGohan(kameGohan: boolean) {
        this._kameGohan = kameGohan;
    }

    public get heridaGohan(): boolean {
        return this._heridaGohan;
    }

    public set heridaGohan(heridaGohan: boolean) {
        this._heridaGohan = heridaGohan;
    }

    public get ganaGohan(): boolean {
        return this._ganaGohan;
    }

    public set ganaGohan(ganaGohan: boolean) {
        this._ganaGohan = ganaGohan;
    }

    public get cansadoGohan(): boolean {
        return this._cansadoGohan;
    }

    public set cansadoGohan(cansadoGohan: boolean) {
        this._cansadoGohan = cansadoGohan;
    }

    public get heridaKame(): boolean {
        return this._heridaKame;
    }

    public set heridaKame(heridaKame: boolean) {
        this._heridaKame = heridaKame;
    }

    public get gohanPierdeCombate(): boolean {
        return this._gohanPierdeCombate
    }
    public set gohanPierdeCombate(gohanPierdeCombate: boolean) {
        this._gohanPierdeCombate = gohanPierdeCombate
    }
}