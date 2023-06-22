import globalStore from "../globalstore"
import zhHans from './zh_Hans.json';


const zhHansForPSPlugin = {
    "The Controlnet Extension is missing from Automatic1111.\nPlease install it to use it through the plugin.": `本地SD中缺少控制网扩展。\n请安装该插件后再使用。`,
    "Set CtrlImg": `设置原始图`,
    "Preview Annotator": `查看标注图`,
}

export default function Locale(key: keyof typeof zhHans | keyof typeof zhHansForPSPlugin): string
{
    const locale = globalStore.Locale;
    //@ts-ignore
    return locale == 'zh_CN' ? (key in zhHans) ? zhHans[key] : zhHansForPSPlugin[key] : key;
}