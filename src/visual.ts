import * as d3 from 'd3'
import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { VisualFormattingSettingsModel } from "./settings";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;


// -----------------------------------------------------------------
//
// -----------------------------------------------------------------
export class Visual implements IVisual {

    //
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    private svg: Selection<SVGElement>;


    // 
    constructor(options: VisualConstructorOptions) {
        this.formattingSettingsService = new FormattingSettingsService(); 

        // 
        this.svg = d3.select(options.element).append('svg').classed('kpiBox',true);


    }


    // method 1: update
    public update(options: VisualUpdateOptions) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews);

        var {width, height} = options.viewport;

        this.svg
        .attr('width', width)
        .attr('height', height);
        
    }




}