import {
    extent,
    scaleLinear,
    mean,
    line,
    curveBasis,
    transition,
    axisLeft,
    axisBottom,
} from 'd3';


export function densityPlot() {
    let width;
    let height;
    let margin;
    let data;
    let xMin;
    let xMax;
    let xLabel;
    let title;
    let yMax;
    let vLines;
    let vLineColor = 'red';
    let numBins = 40;
    let bandwidth;
    let color = 'rgb(122, 255, 248, 0.7)';
    let opacity = 1.0;
    let cutoffs;
    let cutoffColors;
    let fontSize = 15;

    const epanechnikov = (bandwidth) => {
        return x => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
    };

    const kde = (kernel, thresholds, data) => {
        return thresholds.map(t => [t, mean(data, d => kernel(t - d))]);
    };

    const densityPlot = (selection) => {
        const svg = selection
            .selectAll('svg.density-plot')
            .data([null])
            .join('svg')
            .attr('class', 'density-plot')
            .attr('width', width)
            .attr('height', height)
            .attr('font-family', 'sans-serif')
            .attr('font-size', fontSize);

        let xRange = extent(data);
        xRange[0] = xMin ?? xRange[0];
        xRange[1] = xMax ?? xRange[1];

        const x = scaleLinear()
            .domain(xRange)
            .range([margin.left, width - margin.right]);

        const thresholds = x.ticks(numBins);
        const density = kde(epanechnikov(bandwidth), thresholds, data);
        const yMaxValue = yMax ?? Math.max(...density.map(d => d[1]));

        const y = scaleLinear()
            .domain([0, yMaxValue])
            .range([height - margin.bottom, margin.top]);

        // close the curve at the x-axis (y=0) so color fill is complete.
        if (density[0][1] !== 0) {
            density.unshift([density[0][0], 0]);
        }
        if (density[density.length - 1][1] !== 0) {
            density.push([density[density.length - 1][0], 0]);
        }

        const lineFunction = line()
            .curve(curveBasis)
            .x(d => x(d[0]))
            .y(d => y(d[1]));

        const t = transition().duration(1000);

        let colorGradient = svg
            .selectAll('defs')
            .data([null])
            .join('defs')
            .append('linearGradient')
            .attr('id', 'color-gradient');

        if (cutoffs && cutoffColors && cutoffColors.length === cutoffs.length + 1) {
            colorGradient
                .append('stop')
                .attr('offset', '0%')
                .attr('stop-color', cutoffColors[0]);

            for (let i = 0; i < cutoffs.length; i++) {
                let cutoffPercentage = (((cutoffs[i] - xRange[0]) / (xRange[1] - xRange[0])) * 100.0)
                    .toFixed(1);

                if (cutoffPercentage < 0) {
                    cutoffPercentage = 0.0;
                }

                if (cutoffPercentage > 100) {
                    cutoffPercentage = 100.0;
                }

                colorGradient
                    .append('stop')
                    .attr('offset', `${cutoffPercentage}%`)
                    .attr('stop-color', cutoffColors[i]);

                colorGradient
                    .append('stop')
                    .attr('offset', `${cutoffPercentage}%`)
                    .attr('stop-color', cutoffColors[i + 1]);
            }

            colorGradient
                .append('stop')
                .attr('offset', '100%')
                .attr('stop-color', cutoffColors[cutoffColors.length - 1]);
        } else {
            colorGradient
                .append('stop')
                .attr('offset', '100%')
                .attr('stop-color', color);
        }

        svg
            .selectAll('path')
            .data([null])
            .join(
                (enter) =>
                    enter
                        .append('path')
                        .attr('stroke', 'black')
                        .attr('stroke-width', 1.5)
                        .attr('stroke-linejoin', 'round')
                        .attr('opacity', opacity)
                        .attr('d', lineFunction(density))
                        .style('fill', 'url(#color-gradient)'),
                (update) =>
                    update.call((update) =>
                        update
                            .transition(t)
                            .attr('d', lineFunction(density))
                    ),
                (exit) => exit.remove()
            );

        svg
            .selectAll('.y-axis')
            .data([null])
            .join('g')
            .attr('class', 'y-axis')
            .attr('transform', `translate(${margin.left},0)`)
            .call(axisLeft(y));

        svg
            .selectAll('.y-axis-label')
            .data([null])
            .join('text')
            .attr('class', 'y-axis-label')
            .text('Density →')
            .attr('text-anchor', 'end')
            .attr('transform', 'rotate(-90)')
            .attr('x', -margin.top)
            .attr('y', margin.left / 3)
            .style('font-size', fontSize * (3 / 4));

        svg
            .selectAll('.x-axis')
            .data([null])
            .join('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height - margin.bottom})`)
            .call(axisBottom(x));

        svg
            .selectAll('.x-axis-label')
            .data([null])
            .join('text')
            .attr('class', 'x-axis-label')
            .attr('text-anchor', 'end')
            .attr('x', width)
            .attr('y', height - margin.bottom / 3)
            .text(xLabel)
            .style('font-size', fontSize * (3 / 4));

        if (vLines !== undefined) {
            svg
                .selectAll('.vLines')
                .data(vLines)
                .join('line')
                .attr('class', 'vLines')
                .attr('x1', d => x(d))
                .attr('y1', y(0))
                .attr('x2', d => x(d))
                .attr('y2', y(yMaxValue))
                .attr('stroke', vLineColor)
                .attr('stroke-width', 1.5)
                .attr('stroke-linejoin', 'round')
                .attr('opacity', opacity);
        }

        svg
            .selectAll('.title')
            .data([null])
            .join('text')
            .attr('class', 'title')
            .text(title)
            .attr('text-anchor', 'middle')
            .attr('x', width / 2)
            .attr('y', margin.top / 2);
    }

    densityPlot.width = function (_) {
        return arguments.length ? ((width = +_), densityPlot) : width;
    }

    densityPlot.height = function (_) {
        return arguments.length ? ((height = +_), densityPlot) : height;
    }

    densityPlot.margin = function (_) {
        return arguments.length ? ((margin = _), densityPlot) : margin;
    }

    densityPlot.data = function (_) {
        return arguments.length ? ((data = _), densityPlot) : data;
    }

    densityPlot.xMin = function (_) {
        return arguments.length ? ((xMin = +_), densityPlot) : xMin;
    }

    densityPlot.xMax = function (_) {
        return arguments.length ? ((xMax = +_), densityPlot) : xMax;
    }

    densityPlot.xLabel = function (_) {
        return arguments.length ? ((xLabel = _), densityPlot) : xLabel;
    }

    densityPlot.title = function (_) {
        return arguments.length ? ((title = _), densityPlot) : title;
    }

    densityPlot.yMax = function (_) {
        return arguments.length ? ((yMax = +_), densityPlot) : yMax;
    }

    densityPlot.vLines = function (_) {
        return arguments.length ? ((vLines = _), densityPlot) : vLines;
    }

    densityPlot.vLineColor = function (_) {
        return arguments.length ? ((vLineColor = _), densityPlot) : vLineColor;
    }

    densityPlot.numBins = function (_) {
        return arguments.length ? ((numBins = +_), densityPlot) : numBins;
    }

    densityPlot.bandwidth = function (_) {
        return arguments.length ? ((bandwidth = +_), densityPlot) : bandwidth;
    }

    densityPlot.color = function (_) {
        return arguments.length ? ((color = _), densityPlot) : color;
    }

    densityPlot.opacity = function (_) {
        return arguments.length ? ((opacity = +_), densityPlot) : opacity;
    }

    densityPlot.cutoffs = function (_) {
        return arguments.length ? ((cutoffs = _), densityPlot) : cutoffs;
    }

    densityPlot.cutoffColors = function (_) {
        return arguments.length ? ((cutoffColors = _), densityPlot) : cutoffColors;
    }

    densityPlot.fontSize = function (_) {
        return arguments.length ? ((fontSize = +_), densityPlot) : fontSize;
    }

    return densityPlot;
}


export function getBandwidthValues(numBandwidths, data) {
    const bandwidthValues = [];
    const bandwidthMin = 0.001 * (Math.max(...data) - Math.min(...data));
    const bandwidthMax = Math.max(...data) - Math.min(...data);

    for (let i = 0; i < numBandwidths; i++) {
        const logBandwidth = Math.log10(bandwidthMin) + ((Math.log10(bandwidthMax) - Math.log10(bandwidthMin)) * i) / (numBandwidths - 1);
        bandwidthValues.push(Math.pow(10, logBandwidth));
    }

    return bandwidthValues;
}