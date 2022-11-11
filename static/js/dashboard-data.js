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
	if( $('#chart_2').length > 0 ){
		var ctx6 = document.getElementById("chart_2").getContext("2d");
		var data6 = {
			 labels: [
			"Chrome",
			"Opera",
			"Firefox",
			"Other"
		],
		datasets: [
			{
				data: [200,50,250,70],
				backgroundColor: [
					"#0092ee",
					"#22af47",
					"#f83f37",
					"#ffbf36",
				],
				hoverBackgroundColor: [
					"#0092ee",
					"#22af47",
					"#f83f37",
					"#ffbf36",
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'doughnut',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				maintainAspectRatio:false,
				cutoutPercentage: 60,
				legend: {
					display:false
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Roboto'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}
	
	if($('#ct_chart_2').length > 0) {
		// Bar Chart
		var data=[{ y: '2014', a: 50, b: 90, c: 70},
				  { y: '2015', a: 10, b: 30, c: 70},
				  { y: '2016', a: 50, b: 20, c: 70},
				  { y: '2017', a: 40, b: 10, c: 70},
				  { y: '2018', a: 50, b: 90, c: 70},
				  { y: '2019', a: 10, b: 30, c: 70},
				  { y: '2020', a: 50, b: 20, c: 70},
				  { y: '2021', a: 40, b: 10, c: 70},
				  { y: '2022', a: 50, b: 90, c: 70},
				  { y: '2023', a: 10, b: 30, c: 70},
				  { y: '2024', a: 50, b: 20, c: 70},
				  { y: '2025', a: 40, b: 10, c: 70},
				  { y: '2026', a: 50, b: 90, c: 70},
				  { y: '2027', a: 10, b: 30, c: 70},
				  { y: '2028', a: 50, b: 20, c: 70},
				  { y: '2029', a: 40, b: 10, c: 70},
				  { y: '2030', a: 50, b: 90, c: 70},
				  { y: '2031', a: 10, b: 30, c: 70},
				  { y: '2032', a: 50, b: 20, c: 70},
				  { y: '2033', a: 40, b: 10, c: 70},
				  { y: '2034', a: 50, b: 90, c: 70},
				  { y: '2035', a: 10, b: 30, c: 70},
				  { y: '2036', a: 50, b: 20, c: 70},
				  { y: '2037', a: 40, b: 10, c: 70},
				  { y: '2038', a: 50, b: 20, c: 70},
				  { y: '2039', a: 40, b: 10, c: 70},
				  { y: '2040', a: 50, b: 90, c: 70},
				  { y: '2041', a: 10, b: 30, c: 70},
				  { y: '2042', a: 50, b: 20, c: 70},
				  { y: '2043', a: 40, b: 10, c: 70}
				];
		var areaBar = Morris.Bar({
				element: 'ct_chart_2',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b','c'],
				labels: ['Total Income', 'Total Outcome', 'Total Expences'],
				gridLineColor: 'rgba(33,33,33,0.1)',
				stacked: true,
				hideHover: 'auto',
				barColors: ['#00acf0','#d0d962','#d4d4d4'],
				resize: true,
				gridTextColor:'#878787',
				gridTextFamily:"Roboto",
				parseTime: false,
				fillOpacity:0.2
			});	
	}
	
	if( $('#ct_chart_5').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20, c: 40},
				  { y: '200', a: 30, b: 50, c: 70},
				  { y: '300', a: 20, b: 40, c: 50},
				  { y: '400', a: 50, b: 70, c: 90},
				  { y: '500', a: 10, b: 40, c: 100},
				  
				];
		var lineChart = Morris.Line({
				element: 'ct_chart_5',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b', 'c'],
				labels: ['Total Income', 'Total Outcome', 'Total Expences'],
				fillOpacity: 0.6,
				gridLineColor: 'rgba(33,33,33,0.1)',
				hideHover: 'auto',
				behaveLikeLine: true,
				resize: true,
				smooth:false,
				pointSize:3,
				lineWidth:2,
				pointFillColors:['#ffbf36','#22af47','#0092ee'],
				pointStrokeColors: ['#ffbf36','#22af47','#0092ee'],
				lineColors:['#ffbf36','#22af47','#0092ee']
			});	
	}
	
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
	if( $('#ct_chart_7').length > 0 ){
		var eChart_7 = echarts.init(document.getElementById('ct_chart_7'));
		var axisData = ['1','2','3','4','5','6','7'];
		var data = axisData.map(function (item, i) {
			return Math.round(Math.random() * 1000 * (i + 1));
		});
		var links = data.map(function (item, i) {
			return {
				source: i,
				target: i + 1
			};
		});
		links.pop();
		var option = {
			tooltip: {
				trigger: 'axis',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: 'rgba(33,33,33,1)'
					}
				},
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			xAxis: {
				type : 'category',
				boundaryGap : false,
				data : axisData,
				axisLine: {
					show:false
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
			},
			yAxis: {
				type : 'value',
				axisLine: {
					show:false
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(33,33,33,0.1)',
					}
				},
				axisLabel: {
					textStyle: {
						color: '#878787'
					}
				},
			},
			grid:{
				show:false,
				containLabel: false,
			},
			color: ['#f83f37'],
			series: [
				{
					type: 'graph',
					layout: 'none',
					coordinateSystem: 'cartesian2d',
					symbolSize: 20,
					label: {
						normal: {
							show: true
						}
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4,6],
					data: data,
					links: links,
					lineStyle: {
						normal: {
							color: '#0092ee'
						}
					}
				}
			]
		};
		eChart_7.setOption(option);
		eChart_7.resize();
	}
}
/*****E-Charts function end*****/

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
	
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/