import React from 'react'

import ReactApexChart from 'react-apexcharts';

export default function SalesAgingWise() {
	const series = [
		{
		  name: "High - 2013",
		  data: [28, 29, 33, 36, 32, 32, 33]
		}
	  ]
	const options = {
		chart: {
		  height: 350,
		  type: 'line',
		  
		  dropShadow: {
			enabled: true,
			color: '#000',
			top: 18,
			left: 7,
			blur: 10,
			opacity: 0.2
		  },
		  toolbar: {
			show: false
		  }
		},
		colors: ['#77B6EA', '#545454'],
		dataLabels: {
		  enabled: true,
		},
		stroke: {
		  curve: 'smooth'
		},
		title: {
		  text: '',
		  align: 'left'
		},
		grid: {
		  borderColor: '#e7e7e7',
		  row: {
			colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		  },
		},
		markers: {
		  size: 1
		},
		xaxis: {
		  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		  title: {
			text: 'Month'
		  }
		},
		yaxis: {
		  title: {
			text: ''
		  },
		  min: 5,
		  max: 40
		},
		legend: {
		  position: 'top',
		  horizontalAlign: 'right',
		  floating: true,
		  offsetY: -25,
		  offsetX: -5
		}
	  }
  return (
    <div class="col-lg-4 col-md-6 col-12">
								<div class="graph-card">
									<a href="#" target="_self" class="card-title-graph">
										<p><i class="fas fa-chart-line"></i>
											Sales Aging Wise</p>
										<i class="fas fa-external-link-alt"></i>
									</a>
									<div class="crancy-progress-card card-contain-graph">
									<ReactApexChart options={options} series={series} type="line" height={390} />
									</div>
								</div>
							</div>
  )
}
