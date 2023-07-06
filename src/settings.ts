
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;


// 
export class CircleSettings extends FormattingSettingsCard{


    // 
    public circleColor = new formattingSettings.ColorPicker({
        name: "circleColor",
        displayName: "رنگ",
        value: { value: "#aaaaaa" }
    });


    // label Font-size
    public labelFontsize = new formattingSettings.NumUpDown({
        name: "labelFontsize",
        displayName: "اندازه فونت لیبل",
        value: 12
    });


    // kpi Font-size
    public kpiFontsize = new formattingSettings.NumUpDown({
        name: "kpiFontsize",
        displayName: "اندازه فونت لیبل",
        value: 12
    });


    // 
    public name: string = "circle";
    public displayName: string = "تنظیمات باکس شاخص";
    
    // 
    public slices: FormattingSettingsSlice[] = [
        this.circleColor, 
        this.labelFontsize, 
        this.kpiFontsize
    ]


}


// 
export class VisualSettings extends FormattingSettingsModel {
    public circle: CircleSettings = new CircleSettings();
    public cards: FormattingSettingsCard[] = [this.circle];
}