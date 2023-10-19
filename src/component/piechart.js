
import React, { Component } from 'react'
import './piechart.css'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Piechart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			subtitles: [{
				text: "65% new customers",
				verticalAlign: "center",
				fontSize: 10,
				// dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				// showInLegend: true,
				indexLabel: "{y}",
				// yValueFormatString: "#,###'%'",
				dataPoints: [
					// { name: "Unsatisfied", y: 5 },
					// { name: "Very Unsatisfied", y: 31 },
					// {  y: 40 },
					{ y: 17 },
					{  y: 7 }
				]
			}]
		}

  return (
    <div className='canvas'> 
    <CanvasJSChart options = {options}
        onRef={ref => this.chart = ref} 
    />
    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
</div>
);
}};

export default Piechart;      