

import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

// styles
import { VisualSettings } from "./settings";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";

// d3 
import * as d3 from 'd3'
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;

// 
import { textMeasurementService, interfaces } from "powerbi-visuals-utils-formattingutils";
import TextProperties = interfaces.TextProperties;
import { valueFormatter } from "powerbi-visuals-utils-formattingutils";


// -----------------------------------------------------------------
//
// -----------------------------------------------------------------
export class Visual implements IVisual {

    // styles
    private visualSettings: VisualSettings;
    private formattingSettingsService: FormattingSettingsService;

    // d3
    private svg: Selection<SVGElement>;
    private kpiBox: Selection<SVGElement>;
    private labelBox: Selection<SVGElement>;
    private coverBox: Selection<SVGElement>;
    private kpiText: Selection<SVGElement>;
    private labelText: Selection<SVGElement>;


    // 
    constructor(options: VisualConstructorOptions) {

        // styles
        this.formattingSettingsService = new FormattingSettingsService();
        
        // d3
        this.svg = d3.select(options.element).append('svg').classed('kpiBox',true);
        this.kpiBox = this.svg.append('rect');
        this.labelBox = this.svg.append('rect');
        this.coverBox = this.svg.append('rect');
        this.kpiText = this.svg.append('text');
        this.labelText = this.svg.append('text');

    }

    


    // update
    public update(options: VisualUpdateOptions) {

        // ------------------------------------------------------
        // d3 
        // ------------------------------------------------------

        //
        var {width, height} = options.viewport;
        
        //
        this.svg
        .attr('width', width)
        .attr('height', height);
        
        // 
        var dataView = options.dataViews[0]


        // KPI Title
        var kpi_title = dataView.metadata.columns[0].displayName // عنوان ستون
        
        //
        var categorical = dataView.categorical 
        
        // مقدار فیلد اول
        var kpi_val = categorical.categories[0].values[0].toString() 
        
        // اگر دوتا ستون در یک فیلد بود
        // var kpi_unit = categorical.categories[1].values[0] 
        
        // مقدار فیلد دوم
        var kpi_unit = categorical.values[0].values[0] 
        var kpi_val =  kpi_val + kpi_unit
 



        // 
        
        // ------------------------------------------------------
        // styles
        // ------------------------------------------------------
        this.visualSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualSettings, options.dataViews);
        
        // set limitation:  0 < circlethickness < 100
        this.visualSettings.circle.labelFontsize.value = Math.max(0, this.visualSettings.circle.labelFontsize.value);
        this.visualSettings.circle.labelFontsize.value = Math.min(100, this.visualSettings.circle.labelFontsize.value);

        // get formating fields
        var fields = this.visualSettings.circle
        var fill_color = fields.circleColor.value.value;
        var labelText_fontsize = fields.labelFontsize.value
        var kpiText_fontsize = fields.kpiFontsize.value
        

        // 
        var labelBox_height = 50

        
        // label box
        this.labelBox.attr('width', options.viewport.width)
        .attr('height', labelBox_height)
        .attr('fill', fill_color)
        .attr('opacity', 1)

        // cover box
        this.coverBox.attr('width', options.viewport.width)
        .attr('height', labelBox_height)
        .attr('fill', 'gray')
        .attr('opacity', .5)
        
        // label text
        this.labelText.attr('text-anchor','middle')
        .attr('dominant-baseline','middle')
        .attr('x', width/2)
        .attr('y', labelBox_height/2)
        .style('font-size', labelText_fontsize)
        .style('font-family', 'IRANSansWeb')
        .text(kpi_title )

        // kpi box
        this.kpiBox.attr('width', options.viewport.width)
        .attr('height', options.viewport.height)
        .attr('fill', fill_color)
        .attr('opacity', 1)

        // kpi text value
        // var sum = options.dataViews[0].categorical.categories[0].values.reduce((cur: number, item: number, i) => {
        //     cur = cur + item
        //     return cur;
        // }, 0)

        // kpi text
        this.kpiText.attr('text-anchor','middle')
        .attr('dominant-baseline','middle')
        .attr('y', ((height-labelBox_height)/2) + labelBox_height)
        .attr('x', width/2)
        .style('font-size', kpiText_fontsize)
        .attr('dir', 'rtl')
        .style('direction', 'rtl')
        .style('font-family', 'IRANSansWeb')
        .text(kpi_val )

        
    }



    // styles
    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.visualSettings);
    }



}