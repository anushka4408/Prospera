import Plot from "react-plotly.js";

export const SpendChart = ({yVals}) => {
    const xValues = Array.from({ length: 31}).map((_, i) => i + 1);

    // Check if yVals exists and has data
    if (!yVals || yVals.length === 0) {
        return (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
                Loading spending data...
            </div>
        );
    }

    return (
        <Plot
            data={[
                {
                    x: xValues,
                    y: yVals[yVals.length - 1]?.map(item => item[1]) || [],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'black' },
                    name: "September"
                },
                {
                    x: xValues,
                    y: yVals[yVals.length - 2]?.map(item => item[1]) || [], // Second line
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'lightblue' }, // Change color as needed
                    name: 'August',
                    visible: "legendonly"
                }
            ]}
            layout={{
                width: "1100",
                height: "500",
                paper_bgcolor: 'rgba(0,0,0,0)',
                plot_bgcolor: "rgba(0,0,0,0)",
                xaxis: {
                    title: 'Date',
                    tickvals: xValues,
                },
                yaxis: {
                    title: 'Spending',
                },
                dragmode: 'select',
            }}
            config={{
                displayModeBar: false,
            }}
        />
    )
}