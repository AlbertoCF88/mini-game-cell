import Gohan from "../Gohan";

export default class GohanF2 extends Gohan {
    //activar acciones en vista, ocultar o mostrar animacion
    private _gohanBase: boolean;
    private _rayaGohan: boolean;
    private _cargaGohan: boolean;
    
    private _golpeGohan1: boolean;
    private _golpeGohan2: boolean;
 
    private _heridaGohan: boolean;
    private _kameGohan: boolean;
    private _gohanPierdeExplosion: boolean;

    //cosntructor con valores por defecto para no activar animaciones
    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        gohanBase: boolean = false,
        rayaGohan: boolean = false,
        golpeGohan1: boolean = false,
        golpeGohan2: boolean = false,
        cargaGohan: boolean = false,
        heridaGohan: boolean = false,
        kameGohan: boolean = false,
        gohanPierdeExplosion: boolean = false,
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)

        this._gohanBase = gohanBase
        this._rayaGohan = rayaGohan
        this._golpeGohan1 = golpeGohan1
        this._golpeGohan2 = golpeGohan2
        this._cargaGohan = cargaGohan
        this._heridaGohan = heridaGohan
        this._kameGohan = kameGohan
        this._gohanPierdeExplosion = gohanPierdeExplosion
    }

    //getter and setters
    public get gohanBase(): boolean {
        return this._gohanBase;
    }

    public set gohanBase(gohanBase: boolean
    ) {
        this._gohanBase = gohanBase;
    }

    public get rayaGohan(): boolean {
        return this._rayaGohan;
    }

    public set rayaGohan(rayaGohan: boolean
    ) {
        this._rayaGohan = rayaGohan;
    }

    public get golpeGohan1(): boolean {
        return this._golpeGohan1;
    }

    public set golpeGohan1(golpeGohan1: boolean
    ) {
        this._golpeGohan1 = golpeGohan1;
    }

    public get golpeGohan2(): boolean {
        return this._golpeGohan2;
    }

    public set golpeGohan2(golpeGohan2: boolean
    ) {
        this._golpeGohan2 = golpeGohan2;
    }

    public get cargaGohan(): boolean {
        return this._cargaGohan;
    }

    public set cargaGohan(cargaGohan: boolean
    ) {
        this._cargaGohan = cargaGohan;
    }

    public get heridaGohan(): boolean {
        return this._heridaGohan;
    }

    public set heridaGohan(heridaGohan: boolean
    ) {
        this._heridaGohan = heridaGohan;
    }

    public get kameGohan(): boolean {
        return this._kameGohan;
    }

    public set kameGohan(kameGohan: boolean
    ) {
        this._kameGohan = kameGohan;
    }

    public get gohanPierdeExplosion(): boolean {
        return this._gohanPierdeExplosion;
    }

    public set gohanPierdeExplosion(gohanPierdeExplosion: boolean) {
        this._gohanPierdeExplosion = gohanPierdeExplosion;
    }



}