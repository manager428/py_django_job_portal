/*Dashboard Init*/
 
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	$('#statement').DataTable({
		"bFilter": false,
		"bLengthChange": false,
		"bPaginate": false,
		"bInfo": false,
	});
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).on("load",function(){
	window.setTimeout(function(){
		$.toast({
			heading: 'Welcome to Splasher',
			text: 'Use the predefined ones, or specify a custom position object.',
			position: 'bottom-right',
			loaderBg:'#e8af48',
			icon: 'warning',
			hideAfter: 3500, 
			stack: 6
		});
	}, 3000);
});
/*****Load function* end*****/

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('chart_1'));
		var base = +new Date(1968, 9, 3);
		var oneDay = 24 * 3600 * 1000;
		var date = [];

		var data = [Math.random() * 300];

		for (var i = 1; i < 20000; i++) {
			var now = new Date(base += oneDay);
			date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
			data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
		}

		var option = {
			tooltip: {
				show: true,
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: date,
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				}
			},
			yAxis: {
				type: 'value',
				boundaryGap: [0, '100%'],
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(33,33,33,0.1)',
					}
				}
			},
		   
			series: [
				{
					name:'1',
					type:'line',
					smooth:true,
					symbol: 'none',
					sampling: 'average',
					itemStyle: {
						normal: {
							color: '#f83f37'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#f83f37'
							}, {
								offset: 1,
								color: '#ab26aa'
							}])
						}
					},
					data: data
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
}
/* Switchery Init*/
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
$('#echart_switch').each(function() {
	new Switchery($(this)[0], $(this).data());
});
var swichEchart = function() {
	if($("#echart_switch").is(":checked")) {
		echartsConfig();
	} else {
		echartsConfig();
	}
}
swichEchart();	
$(document).on('change', '#echart_switch', function () {
	swichEchart();
});	
/*****E-Charts function end*****/

/*****Sparkline function start*****/
var sparklineLogin = function() { 
	if( $('#sparkline_6').length > 0 ){
		$("#sparkline_6").sparkline([9,7,7,8,8,9,8,9,6], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#22af47',
			fillColor: 'rgba(34,175,71,0.2)',
			minSpotColor: '#22af47',
			maxSpotColor: '#22af47',
			spotColor: '#22af47',
			highlightLineColor: '#22af47',
			highlightSpotColor: '#22af47'
		});
	}
if( $('#sparkline_7').length > 0 ){
		$("#sparkline_7").sparkline([1,5,3,4,2,9,8,4,1], {
			type: 'line',
			width: '100%',
			height: '90',
			lineColor: '#0092ee',
			fillColor: 'rgba(0,146,238,0.2)',
			minSpotColor: '#0092ee',
			maxSpotColor: '#0092ee',
			spotColor: '#0092ee',
			highlightLineColor: '#0092ee',
			highlightSpotColor: '#0092ee'
		});
	}		
}
/*****Sparkline function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
sparklineLogin();
echartsConfig();
/*****Function Call end*****/