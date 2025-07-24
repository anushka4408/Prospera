import Plot from "react-plotly.js";
import {useEffect, useState} from "react";
import regression from 'regression';

export const CumuPlot = ({yData}) => {
    const [predictedSpend, setPredictedSpend] = useState(null)

    // Check if yData exists and has data
    if (!yData || yData.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
                Loading cumulative data...
            </div>
        );
    }

    function cumulativeArray(arr) {
        let cumulativeArr = [];
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i][1]);
            cumulativeArr.push(sum);
        }

        return cumulativeArr;
    }

    useEffect(() => {
        if (yData && yData.length > 0) {
            setPredictedSpend(regression.linear(cumulativeArray(yData).map((item, i) => [i+1, item])).predict(31)[1]);
        }
    }, [yData])

    return (
            <Plot data={[
                {
                    x: Array.from({length: 31}, (v, i) => i + 1),
                    y: cumulativeArray(yData),
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'black' },
                    name: "September"
                }
            ]}
                layout={{
                width: "900",
                height: "450",
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: "rgba(0,0,0,0)",
                title: "Estimated Monthly Spending: $<b>" + predictedSpend + "</b>",
                xaxis: {
                    title: 'Date',
                    tickvals: Array.from({length: 31}, (v, i) => i + 1),
                },
              yaxis: {
                  title: 'Net Spending',
              },
              dragmode: 'select',
              }}
              config={{
                  displayModeBar: false,
              }}>

            </Plot>
    )
}