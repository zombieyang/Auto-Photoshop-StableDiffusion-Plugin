interface GenerationParam {
    "denoising_strength": number,
    "prompt": "",
    "styles": string[],
    "seed": number,
    "subseed": number,
    "subseed_strength": number,
    "seed_resize_from_h": number,
    "seed_resize_from_w": number,
    "sampler_name": string,
    "batch_size": number,
    "n_iter": number,
    "steps": number,
    "cfg_scale": number,
    "width": number,
    "height": number,
    "restore_faces": boolean,
    "tiling": boolean,
    "do_not_save_samples": boolean,
    "do_not_save_grid": boolean,
    "negative_prompt": string,
    "eta": number,
    "s_min_uncond": number,
    "s_churn": number,
    "s_tmax": number,
    "s_tmin": number,
    "s_noise": number,
    "override_settings": any,
    "override_settings_restore_afterwards": boolean,
    "script_args": string[],
    "sampler_index": string,

}
export interface Img2imgParam extends GenerationParam {
    "init_images": string[],
    "resize_mode": number,
    "image_cfg_scale": number,
    "mask": string,
    "mask_blur": number,
    "inpainting_fill": number,
    "inpaint_full_res": boolean,
    "inpaint_full_res_padding": number,
    "inpainting_mask_invert": number,
    "initial_noise_multiplier": number,

    "include_init_images": boolean,
}
export interface Txt2imgParam {
    "enable_hr": boolean,
    "firstphase_width": number,
    "firstphase_height": number,
    "hr_scale": number,
    "hr_upscaler": string,
    "hr_second_pass_steps": number,
    "hr_resize_x": number,
    "hr_resize_y": number,
    "hr_sampler_name": string,
    "hr_prompt": string,
    "hr_negative_prompt": string,
}
export interface DetectParam {
    "controlnet_module": string,
    "controlnet_input_images": string[],
    "controlnet_processor_res": number,
    "controlnet_threshold_a": number,
    "controlnet_threshold_b": number
}
export interface extraParam {
    "resize_mode": number,
    "show_extras_results": boolean,
    "gfpgan_visibility": number,
    "codeformer_visibility": number,
    "codeformer_weight": number,
    "upscaling_resize": number,
    "upscaling_resize_w": number,
    "upscaling_resize_h": number,
    "upscaling_crop": boolean,
    "upscaler_1": string,
    "upscaler_2": string,
    "extras_upscaler_2_visibility": number,
    "upscale_first": boolean,
    "image": string
}

export class SDApi {
    private baseUrl: string;
    constructor(url: string) {
        this.baseUrl = url
    }
    private async _get(url: string) {
        var myHeaders = new Headers()
        myHeaders.set("Content-Type", "application/json")
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        }
        return (await fetch(this.baseUrl + url, requestOptions)).json()
    }
    private async _post(url: string, param: any) {

        var myHeaders = new Headers()
        myHeaders.set("Content-Type", "application/json")
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: param,
        }
        return (await fetch(this.baseUrl + url, requestOptions)).json()
    }

    public async txt2img(param: Txt2imgParam) {
        const res = await this._post("/sdapi/v1/txt2img", param)

    }
    public async img2img(param: Img2imgParam) {
        const res = await this._post("/sdapi/v1/img2img", param)

    }
    public async progress(param: { skip_current_image: boolean }) {
        const res = await this._get("/sdapi/v1/progress")

    }
    public async sdModels() {
        return await this._get("/sdapi/v1/sd-models")

    }
    public async samplers() {
        return await this._get("/sdapi/v1/samplers")

    }
    public async options() {
        const res = await this._get("/sdapi/v1/options")

    }
    public async interrupt() {
        const res = await this._post("/sdapi/v1/interrupt", {})

    }
    public async extraSingleImage(param: extraParam) {
        const res = await this._post("/sdapi/v1/extra-single-images", param)

    }
    public async upscalers() {
        return await this._get("/sdapi/v1/upscalers")

    }
    public async loras() {
        return await this._get("/sdapi/v1/loras")
    }

    public async controlnetModelList() {
        return await this._get("/controlnet/model_list")
    }
    public async controlnetModuleList() {
        return await this._get("/controlnet/module_list");
    }
    public async controlnetDetect(param: DetectParam) {
        const res = await this._post("/controlnet/detect", param)

    }
}