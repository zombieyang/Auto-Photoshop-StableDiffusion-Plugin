
export class SDApi {
    private baseUrl: string;
    constructor(url: string) {
        this.baseUrl = url
    }
    private async _doRequest(url: string) {

    }

    public async txt2img() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/txt2img")
    
    }
    public async img2img() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/img2img")
        
    }
    public async progress() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/progress")
    
    }
    public async sdModels() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/sd-models")
        
    }
    public async samplers() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/samplers")
    
    }
    public async options() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/options")
        
    }
    public async interrupt() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/interrupt")
        
    }
    public async extraSingleImage() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/extra-single-images")

    }
    public async upscalers() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/upscalers")

    }
    public async loras() {
        const res = await this._doRequest(this.baseUrl + "/sdapi/v1/loras")

    }

    public async controlnetModelList() {
        const res = await this._doRequest(this.baseUrl + "/controlnet/model_list")

    }
    public async controlnetModuleList() {

        const res = await this._doRequest(this.baseUrl + "/controlnet/module_list")
    }
    public async controlnetDetect() {
        const res = await this._doRequest(this.baseUrl + "/controlnet/detect")

    }
}