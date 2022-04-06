
(function($) {

    'use strict';

    $(document).ready(function() {

      $(".widget-3 .metro").liveTile();
       
      $(".widget-7 .metro").liveTile();

        (function() {
            d3.json('http://pages.revox.io/json/min_sales_chart.json', function(data) {

                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1]
                        })
                        .color(['#fff'])
                        .margin({
                            top: 10,
                            right: -10,
                            bottom: 20,
                            left: -10
                        })
                        .showXAxis(false)
                        .showYAxis(false)
                        .showLegend(false)
                        .interactive(false);

                    d3.select('.widget-7-chart svg')
                        .datum(data.premarket)
                        .call(chart);

                    nv.utils.windowResize(chart.update);

                    return chart;
                }, function() {
                    setTimeout(function() {
                        $('.widget-7-chart .nvd3 circle.nv-point:nth-child(4)').attr("r", "5");
                    }, 500);
                });

            });
        })();
        // End widget-7 .metro
      
      //Start widget_graphTile
      (function() {
    
            d3.json('http://pages.revox.io/json/charts.json', function(data) {

                nv.addGraph(function() {
                    var chart = nv.models.lineChart()
                        .x(function(d) {
                            return d[0]
                        })
                        .y(function(d) {
                            return d[1] / 100
                        })
                        .color([
                            $.Pages.getColor('success')
                        ])
                        .forceY([0, 2])
                        .useInteractiveGuideline(true)

                    .margin({
                            top: 60,
                            right: -10,
                            bottom: -10,
                            left: -10
                        })
                        .showLegend(false);


                    d3.select('.widget-4-chart svg')
                        .datum(data.nvd3.productRevenue)
                        .transition().duration(500)
                        .call(chart);


                    nv.utils.windowResize(function() {

                        chart.update();

                    });

                    $('.widget-4-chart').data('chart', chart);

                    return chart;
                }, function() {

                });
            });
        })();
      // End widget_graphTile
      

    });

})(window.jQuery);