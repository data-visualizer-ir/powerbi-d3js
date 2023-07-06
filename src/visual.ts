import * as d3 from 'd3'
import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { VisualFormattingSettingsModel } from "./settings";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

import { textMeasurementService, interfaces } from "powerbi-visuals-utils-formattingutils";
import TextProperties = interfaces.TextProperties;
import { valueFormatter } from "powerbi-visuals-utils-formattingutils";


// -----------------------------------------------------------------
//
// -----------------------------------------------------------------
export class Visual implements IVisual {

    //
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;
    private svg: Selection<SVGElement>;
    private kpiBox: Selection<SVGElement>;
    private labelBox: Selection<SVGElement>;
    private kpiText: Selection<SVGElement>;
    private labelText: Selection<SVGElement>;


    // 
    constructor(options: VisualConstructorOptions) {
        this.formattingSettingsService = new FormattingSettingsService(); 

        // 
        this.svg = d3.select(options.element).append('svg').classed('kpiBox',true);
        this.kpiBox = this.svg.append('rect');
        this.labelBox = this.svg.append('rect');
        this.kpiText = this.svg.append('text');
        this.labelText = this.svg.append('text');

    }

    


    // method 1: update
    public update(options: VisualUpdateOptions) {

        //
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews);
        var {width, height} = options.viewport;

        var dataView = options.dataViews[0]

        // KPI Title
        var kpi_title = dataView.metadata.columns[0].displayName // عنوان ستون
        
        var categorical = dataView.categorical 
        var kpi_val = categorical.categories[0].values[0].toString() // مقدار فیلد اول
        // var kpi_unit = categorical.categories[1].values[0] // اگر دوتا ستون در یک فیلد بود
        var kpi_unit = categorical.values[0].values[0] // مقدار فیلد دوم
        
        var kpi_val =  kpi_val + kpi_unit
 

        //
        this.svg
        .attr('width', width)
        .attr('height', height);

        // 
        // metadata.columns[0] >> displayName, type, format, objects, roles
        

        // 
        this.kpiBox.attr('width', options.viewport.width).attr('height', options.viewport.height).attr('fill','aliceblue');
        this.labelBox.attr('width', options.viewport.width).attr('height',20).attr('fill','pink');
        
        this.labelText.attr('text-anchor','middle')
        .attr('dominant-baseline','middle')
        .attr('x', width/2)
        .attr('y', 10)
        .attr('class','kpiLabel')
        .text('sum of ' + kpi_title )

        // var sum = options.dataViews[0].categorical.categories[0].values.reduce((cur: number, item: number, i) => {
        //     cur = cur + item
        //     return cur;
        // }, 0)

        this.kpiText.attr('text-anchor','middle')
                        .attr('dominant-baseline','middle')
                        .attr('y', ((height-20)/2) + 20)
                        .attr('x', width/2)
                        .attr('class','kpiNumber')
                        .text(kpi_val );

        
    }




}