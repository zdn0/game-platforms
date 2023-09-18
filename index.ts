/**
 * 平台类
 * @author zdn0
 * 实现大部分平台代码对接
 */

class Platform {

    _sdk: any = null;

    /**
     * 获取当前平台类
     * 如：微信则为wx对象 字节为tt对象 原生则为window对象
     */
    public getInstance(): any {
        return this._sdk;
    }

    /**
     * 播放激励视频
     * @param {function} cb 回调函数 0 成功并完成播放 1 未完成播放 -1 不支持该函数 -2 缺少ID -3 失败调用
     * @param {object} setting 预留参数
     */
    public showRewardAds(cb: (code: number) => void, setting: object = {}): void {

        // 检查平台是否支持该方法
        return this._sdk.showRewardAds(cb, setting);
    }

    /**
     * 显示插屏
     * @param {function} cb 回调函数 0 成功并完成播放 1 未完成播放 -1 不支持该函数 -2 缺少ID  -3 失败调用
     * @param {object} setting 预留参数
     */
    public showInsert(cb: (code: number) => void, setting: object = {}): void {
        // 检查平台是否支持该方法
        return this._sdk.showInsert(cb, setting);
    }

    /**
     * 显示Banner
     * @param {function} cb 回调函数 0 展示成功 1 展示失败 -1 不支持该函数 -2 缺少ID  -3 失败调用
     * @param {object} setting 预留参数
     */
    public showBanner(cb: (code: number) => void, setting: object = {}): void {
        // 检查平台是否支持该方法
        return this._sdk.showBanner(cb, setting);
    }

    /**
     * 隐藏Banner
     * @param {function} cb 回调函数 0 隐藏成功 1 隐藏失败 -1 不支持该函数 -2 缺少ID  -3 失败调用
     * @param {object} setting 预留参数
     */
    public hideBanner(cb: (code: number) => void, setting: object = {}): void {
        // 检查平台是否支持该方法
        return this._sdk.hideBanner();
    }

    /** 显示游戏盒子 */
    /** 显示原生插屏 */
    /** 显示原生Banner */
}