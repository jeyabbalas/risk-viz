import {
    ascending,
    extent,
    scaleLinear,
    max,
    line as d3Line,
    curveBasis,
    curveLinear,
    axisLeft,
    axisBottom,
} from 'd3';


export function linePlot() {
    let width;
    let height;
    let data;
    let xValue;
    let yValues;
    let colors;
    let labels;
    let fitCurve = false;
    let xLabel;
    let yLabel;
    let title;
    let strokeWidth = 1;
    let margin;
    let fontSize = 15;

    const linePlot = (selection) => {
        const svg = selection
            .selectAll('svg.line-plot')
            .data([null])
            .join('svg')
            .attr('class', 'line-plot')
            .attr('width', width)
            .attr('height', height)
            .attr('font-family', 'sans-serif')
            .attr('font-size', fontSize);

        data.sort((a, b) => ascending(xValue(a), xValue(b)));

        const x = scaleLinear()
            .domain(extent(data, xValue)).nice()
            .range([margin.left, width - margin.right]);

        const y = scaleLinear()
            .domain([0, max(data, d => max(yValues, yValue => yValue(d)))]).nice()
            .range([height - margin.bottom, margin.top]);

        yValues.forEach((yValue, i) => {
            const line = d3Line()
                .defined(d => yValue(d) !== null)
                .curve(fitCurve ? curveBasis : curveLinear)
                .x(d => x(xValue(d)))
                .y(d => y(yValue(d)));

            svg
                .selectAll(`.line-path-${i}`)
                .data([data])
                .join('path')
                .attr('class', `line-path-${i}`)
                .attr('fill', 'none')
                .attr('stroke', colors[i])
                .attr('stroke-width', 1.5)
                .attr('d', line);

            svg.append('g')
                .attr('transform', `translate(${margin.left + 20},${margin.top + i * 20})`)
                .call(g => g.append('rect')
                    .attr('width', 10)
                    .attr('height', 10)
                    .style('fill', colors[i]))
                .call(g => g.append('text')
                    .attr('x', 15)
                    .attr('y', 10)
                    .text(labels[i]));
        });

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

        svg
            .selectAll('.title')
            .data([null])
            .join('text')
            .attr('class', 'title')
            .text(title)
            .attr('text-anchor', 'middle')
            .attr('x', width / 2)
            .attr('y', margin.top / 2);
    };

    linePlot.width = function (_) {
        return arguments.length ? ((width = +_), linePlot) : width;
    }

    linePlot.height = function (_) {
        return arguments.length ? ((height = +_), linePlot) : height;
    }

    linePlot.data = function (_) {
        return arguments.length ? ((data = _), linePlot) : data;
    }

    linePlot.xValue = function (_) {
        return arguments.length ? ((xValue = _), linePlot) : xValue;
    }

    linePlot.yValues = function (_) {
        return arguments.length ? ((yValues = _), linePlot) : yValues;
    }

    linePlot.colors = function (_) {
        return arguments.length ? ((colors = _), linePlot) : colors;
    }

    linePlot.labels = function (_) {
        return arguments.length ? ((labels = _), linePlot) : labels;
    }

    linePlot.fitCurve = function (_) {
        return arguments.length ? ((fitCurve = !!_), linePlot) : fitCurve;
    }

    linePlot.xLabel = function (_) {
        return arguments.length ? ((xLabel = _), linePlot) : xLabel;
    }

    linePlot.yLabel = function (_) {
        return arguments.length ? ((yLabel = _), linePlot) : yLabel;
    }

    linePlot.title = function (_) {
        return arguments.length ? ((title = _), linePlot) : title;
    }

    linePlot.strokeWidth = function (_) {
        return arguments.length ? ((strokeWidth = +_), linePlot) : strokeWidth;
    }

    linePlot.margin = function (_) {
        return arguments.length ? ((margin = _), linePlot) : margin;
    }

    linePlot.fontSize = function (_) {
        return arguments.length ? ((fontSize = +_), linePlot) : fontSize;
    }

    return linePlot;
}