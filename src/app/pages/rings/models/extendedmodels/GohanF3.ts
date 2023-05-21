import Gohan from "../Gohan";

export default class GohanF3 extends Gohan {

    private _base: boolean;

    private _raya: boolean;
    private _rayaContra1: boolean;
    private _rayaContra2: boolean;

    private _carga: boolean;
    private _defensa: boolean;

    private _gancho: boolean;
    //contra
    private _patada1: boolean;
    private _patada2: boolean;

    private _rafaga: boolean;
    private _cargaKame: boolean;//sin usar
    private _kame: boolean;
    private _kamePadreHijo: boolean;

    private _herida: boolean;
    private _heridaContra1: boolean;
    private _heridaContra2: boolean;

    private _pierde: boolean;
    private _activarVideo: boolean;

    private _videoFinal: boolean;
    private _videoWin: boolean;

    constructor(
        vidaGohan: number,
        vidaBarraGohan: number,
        maximaEnergiaGohan: number,
        acumularCargaGohan: number,

        base: boolean = false,
        raya: boolean = false,
        rayaContra1: boolean = false,
        rayaContra2: boolean = false,
        carga: boolean = false,
        defensa: boolean = false,
        gancho: boolean = false,
        patada1: boolean = false,
        patada2: boolean = false,
        rafaga: boolean = false,
        cargaKame: boolean = false,
        kame: boolean = false,
        kamePadreHijo: boolean = false,
        herida: boolean = false,
        heridaContra1: boolean = false,
        heridaContra2: boolean = false,
        pierde: boolean = false,
        activarVideo: boolean = false,
        videoFinal: boolean = false,
        videoWin: boolean = false,
    ) {
        super(vidaGohan, vidaBarraGohan, maximaEnergiaGohan, acumularCargaGohan)

        this._base = base;
        this._raya = raya;
        this._rayaContra1 = rayaContra1;
        this._rayaContra2 = rayaContra2;
        this._carga = carga;
        this._defensa = defensa;
        this._gancho = gancho;
        this._patada1 = patada1;
        this._patada2 = patada2;
        this._rafaga = rafaga;
        this._cargaKame = cargaKame;
        this._kame = kame;
        this._kamePadreHijo = kamePadreHijo;
        this._herida = herida;
        this._heridaContra1 = heridaContra1
        this._heridaContra2 = heridaContra2;
        this._pierde = pierde;
        this._activarVideo = activarVideo;
        this._videoFinal = videoFinal;
        this._videoWin = videoWin;
    }

    public get base(): boolean {
        return this._base;
    }

    public set base(base: boolean
    ) {
        this._base = base;
    }

    public get raya(): boolean {
        return this._raya;
    }

    public set raya(raya: boolean) {
        this._raya = raya;
    }

    public get rayaContra1(): boolean {
        return this._rayaContra1;
    }

    public set rayaContra1(rayaContra1: boolean) {
        this._rayaContra1 = rayaContra1;
    }

    public get rayaContra2(): boolean {
        return this._rayaContra2;
    }

    public set rayaContra2(rayaContra2: boolean) {
        this._rayaContra2 = rayaContra2;
    }

    public get carga(): boolean {
        return this._carga;
    }

    public set carga(carga: boolean
    ) {
        this._carga = carga;
    }

    public get defensa(): boolean {
        return this._defensa;
    }

    public set defensa(defensa: boolean) {
        this._defensa = defensa;
    }

    public get gancho(): boolean {
        return this._gancho;
    }

    public set gancho(gancho: boolean) {
        this._gancho = gancho;
    }

    public get patada1(): boolean {
        return this._patada1;
    }

    public set patada1(patada1: boolean) {
        this._patada1 = patada1;
    }

    public get patada2(): boolean {
        return this._patada2;
    }

    public set patada2(patada2: boolean) {
        this._patada2 = patada2;
    }

    public get rafaga(): boolean {
        return this._rafaga;
    }

    public set rafaga(rafaga: boolean) {
        this._rafaga = rafaga;
    }

    public get cargaKame(): boolean {
        return this._cargaKame;
    }

    public set cargaKame(cargaKame: boolean) {
        this._cargaKame = cargaKame;
    }

    public get kame(): boolean {
        return this._kame;
    }

    public set kame(kame: boolean) {
        this._kame = kame;
    }

    public get kamePadreHijo(): boolean {
        return this._kamePadreHijo;
    }

    public set kamePadreHijo(kamePadreHijo: boolean) {
        this._kamePadreHijo = kamePadreHijo;
    }

    public get herida(): boolean {
        return this._herida;
    }

    public set herida(herida: boolean) {
        this._herida = herida;
    }

    public get heridaContra1(): boolean {
        return this._heridaContra1;
    }

    public set heridaContra1(heridaContra1: boolean) {
        this._heridaContra1 = heridaContra1;
    }

    public get heridaContra2(): boolean {
        return this._heridaContra2;
    }

    public set heridaContra2(heridaContra2: boolean) {
        this._heridaContra2 = heridaContra2;
    }
    public get pierde(): boolean {
        return this._pierde;
    }

    public set pierde(pierde: boolean) {
        this._pierde = pierde;
    }


    public get activarVideo(): boolean {
        return this._activarVideo;
    }

    public set activarVideo(activarVideo: boolean) {
        this._activarVideo = activarVideo;
    }

    public get videoFinal(): boolean {
        return this._videoFinal;
    }

    public set videoFinal(videoFinal: boolean) {
        this._videoFinal = videoFinal;
    }

    public get videoWin(): boolean {
        return this._videoWin;
    }

    public set videoWin(videoWin: boolean) {
        this._videoWin = videoWin;
    }
}