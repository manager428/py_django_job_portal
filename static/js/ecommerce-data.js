/*Dashboard2 Init*/
"use strict"; 

/*****Ready function start*****/
$(document).ready(function(){
	if( $('#pie_chart_4').length > 0 ){
		$('#pie_chart_4').easyPieChart({
			barColor : '#0092ee',
			lineWidth: 10,
			animate: 3000,
			size:	165,
			lineCap: 'square',
			trackColor: '#f4f4f4',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	
	if( $('#datable_1').length > 0 )
		$('#datable_1').DataTable({
			"bFilter": false,
			"bLengthChange": false,
			"bPaginate": false,
			"bInfo": false,
		});
	
	if($('#chart_1').length > 0) {
		// Line Chart
		var data=[{
			period: '2010',
			iphone: 150,
		}, {
			period: '2011',
			iphone: 130,
		}, {
			period: '2012',
			iphone: 180,
		}, {
			period: '2013',
			iphone: 170,
		}, {
			period: '2014',
			iphone: 180,
		}, {
			period: '2015',
			iphone: 105,
		},
		 {
			period: '2016',
			iphone: 250,
		},
		{
			period: '2017',
			iphone: 150,
		}, {
			period: '2018',
			iphone: 180,
		}, {
			period: '2019',
			iphone: 140,
		}, {
			period: '2020',
			iphone: 170,
		}, {
			period: '2021',
			iphone: 180,
		}, {
			period: '2022',
			iphone: 105,
		},
		 {
			period: '2023',
			iphone: 250,
		},
		{
			period: '2024',
			iphone: 150,
		}, {
			period: '2025',
			iphone: 130,
		}, {
			period: '2026',
			iphone: 180,
		}, {
			period: '2027',
			iphone: 170,
		}, {
			period: '2028',
			iphone: 180,
		}, {
			period: '2029',
			iphone: 105,
		},
		 {
			period: '2030',
			iphone: 250,
		},
		{
			period: '2031',
			iphone: 100,
		}, {
			period: '2032',
			iphone: 130,
		}, {
			period: '2033',
			iphone: 100,
		}, {
			period: '2034',
			iphone: 170,
		}, {
			period: '2035',
			iphone: 180,
		}];
		var lineChart = Morris.Area({
			element: 'chart_1',
			data: data,
			xkey: 'period',
			ykeys: ['iphone'],
			labels: ['iPhone'],
			pointSize: 4,
			lineWidth: 2,
			pointStrokeColors:['#ffffff'],
			pointFillColors:['#0092ee'],
			behaveLikeLine: true,
			gridLineColor: 'rgba(33,33,33,0.1)',
			smooth: false,
			hideHover: 'auto',
			lineColors: ['#0092ee'],
			resize: true,
			gridTextColor:'#878787',
			gridTextFamily:"Roboto",
			parseTime: false,
			fillOpacity:.1
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
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var data = [{
			value: 5713,
			name: ''
		}, {
			value: 9938,
			name: ''
		}, {
			value: 17623,
			name: ''
		}];
		var option3 = {
			tooltip: {
				show: true,
				trigger: 'item',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				formatter: "{b}: {c} ({d}%)",
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Roboto', sans-serif",
					fontSize: 12
				}	
			},
			series: [{
				type: 'pie',
				selectedMode: 'single',
				radius: ['80%', '30%'],
				color: ['#22af47', '#0092ee', '#f83f37'],
				labelLine: {
					normal: {
						show: false
					}
				},
				data: data
			}]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
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