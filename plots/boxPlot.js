import {
    extent,
    scaleLinear,
    quantile,
    min as d3Min,
    max as d3Max,
    pointer,
    axisBottom,
} from 'd3';


export function boxPlot() {
    let width;
    let height;
    let margin;
    let data;
    let xMin;
    let xMax;
    let vLines;
    let vLineColor = 'red';
    let xLabel;
    let title;
    let boxWidth;
    let color = 'rgb(122, 255, 248, 0.7)';
    let strokeWidth = 1.5;
    let opacity = 1.0;
    let radius;
    let fontSize = 15;
    let hoverOffsetX = 0;
    let hoverOffsetY = 0;
    let removeAxis = false;

    const boxPlot = (selection) => {
        const svg = selection
            .selectAll('svg.box-plot')
            .data([null])
            .join('svg')
            .attr('class', 'box-plot')
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

        const q1 = quantile(data, 0.25);
        const q2 = quantile(data, 0.5);
        const q3 = quantile(data, 0.75);
        const iqr = q3 - q1;
        let min = q1 - iqr * 1.5;
        const dataMin = d3Min(data);
        min = dataMin > min ? dataMin : min;
        let max = q3 + iqr * 1.5;
        const dataMax = d3Max(data);
        max = dataMax < max ? dataMax : max;
        const outliers = data.filter(d => (d < min) || (d > max));
        const mean = data.reduce((a, b) => a + b, 0) / data.length;

        const tooltip = selection.selectAll('div.tooltip')
            .data([null])
            .join('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('opacity', 0);

        svg
            .on('mouseover', function (event) {
                const precision = 5;
                const message = `
        Minimum: ${min.toFixed(precision)}<br>
        25th percentile: ${q1.toFixed(precision)}<br>
        Median: ${q2.toFixed(precision)}<br>
        75th percentile: ${q3.toFixed(precision)}<br>
        Maximum: ${max.toFixed(precision)}<br>
        Inter-quartile range: ${iqr.toFixed(precision)}<br>
        Mean: ${mean.toFixed(precision)}
        `;
                tooltip
                    .style('opacity', 1)
                    .style('border-color', color)
                    .html(message);
            })
            .on('mouseout', () => {
                tooltip
                    .style('opacity', 0);
            })
            .on('mousemove', function (event) {
                const [x, y] = pointer(event, this);
                tooltip
                    .style('left', (x + hoverOffsetX) + 'px')
                    .style('top', (y + hoverOffsetY) + 'px');
            });

        const outliersWithinXLimits = outliers.filter(d => (d < xRange[1]) && (d > xRange[0]));

        svg
            .selectAll('circle')
            .data(outliersWithinXLimits)
            .join('circle')
            .attr('cx', (d) => x(d))
            .attr('cy', () => (height / 2 + (Math.random() * (boxWidth / 2) - (boxWidth / 4))))
            .attr('r', radius)
            .attr('fill', color)
            .attr('opacity', opacity)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        svg
            .selectAll('rect')
            .data([null])
            .join('rect')
            .attr('x', x(q1))
            .attr('y', height / 2 - boxWidth / 2)
            .attr('width', x(q3) - x(q1))
            .attr('height', boxWidth)
            .attr('fill', color)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        svg
            .selectAll('#median')
            .data([null])
            .join('line')
            .attr('id', 'median')
            .attr('x1', x(q2))
            .attr('y1', height / 2 - boxWidth / 2)
            .attr('x2', x(q2))
            .attr('y2', height / 2 + boxWidth / 2)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth * 2);

        svg
            .selectAll('#lower-whisker')
            .data([null])
            .join('line')
            .attr('id', 'lower-whisker')
            .attr('x1', x(min))
            .attr('y1', height / 2)
            .attr('x2', x(q1))
            .attr('y2', height / 2)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        svg
            .selectAll('#lower-whisker-edge')
            .data([null])
            .join('line')
            .attr('id', 'lower-whisker-edge')
            .attr('x1', x(min))
            .attr('y1', height / 2 - boxWidth / 4)
            .attr('x2', x(min))
            .attr('y2', height / 2 + boxWidth / 4)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        svg
            .selectAll('#upper-whisker')
            .data([null])
            .join('line')
            .attr('id', 'upper-whisker')
            .attr('x1', x(q3))
            .attr('y1', height / 2)
            .attr('x2', x(max))
            .attr('y2', height / 2)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        svg
            .selectAll('#upper-whisker-edge')
            .data([null])
            .join('line')
            .attr('id', 'upper-whisker-edge')
            .attr('x1', x(max))
            .attr('y1', height / 2 - boxWidth / 4)
            .attr('x2', x(max))
            .attr('y2', height / 2 + boxWidth / 4)
            .attr('stroke', 'black')
            .attr('stroke-width', strokeWidth);

        if (!removeAxis) {
            svg
                .selectAll('.x-axis')
                .data([null])
                .join('g')
                .attr('class', 'x-axis')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(axisBottom(x));

            if (xLabel) {
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
            }
        }

        if (vLines !== undefined) {
            svg
                .selectAll('.vLines')
                .data(vLines)
                .join('line')
                .attr('class', 'vLines')
                .attr('x1', d => x(d))
                .attr('y1', height / 2 - boxWidth / 2)
                .attr('x2', d => x(d))
                .attr('y2', height / 2 + boxWidth / 2)
                .attr('stroke', vLineColor)
                .attr('stroke-width', 1.5);
        }

        if (title) {
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
    }

    boxPlot.width = function (_) {
        return arguments.length ? ((width = +_), boxPlot) : width;
    }

    boxPlot.height = function (_) {
        return arguments.length ? ((height = +_), boxPlot) : height;
    }

    boxPlot.margin = function (_) {
        return arguments.length ? ((margin = _), boxPlot) : margin;
    }

    boxPlot.data = function (_) {
        return arguments.length ? ((data = _), boxPlot) : data;
    }

    boxPlot.xMin = function (_) {
        return arguments.length ? ((xMin = +_), boxPlot) : xMin;
    }

    boxPlot.xMax = function (_) {
        return arguments.length ? ((xMax = +_), boxPlot) : xMax;
    }

    boxPlot.vLines = function (_) {
        return arguments.length ? ((vLines = _), boxPlot) : vLines;
    }

    boxPlot.vLineColor = function (_) {
        return arguments.length ? ((vLineColor = _), boxPlot) : vLineColor;
    }

    boxPlot.xLabel = function (_) {
        return arguments.length ? ((xLabel = _), boxPlot) : xLabel;
    }

    boxPlot.title = function (_) {
        return arguments.length ? ((title = _), boxPlot) : title;
    }

    boxPlot.boxWidth = function (_) {
        return arguments.length ? ((boxWidth = +_), boxPlot) : boxWidth;
    }

    boxPlot.color = function (_) {
        return arguments.length ? ((color = _), boxPlot) : color;
    }

    boxPlot.strokeWidth = function (_) {
        return arguments.length ? ((strokeWidth = +_), boxPlot) : strokeWidth;
    }

    boxPlot.opacity = function (_) {
        return arguments.length ? ((opacity = +_), boxPlot) : opacity;
    }

    boxPlot.radius = function (_) {
        return arguments.length ? ((radius = +_), boxPlot) : radius;
    }

    boxPlot.fontSize = function (_) {
        return arguments.length ? ((fontSize = +_), boxPlot) : fontSize;
    }

    boxPlot.hoverOffsetX = function (_) {
        return arguments.length ? ((hoverOffsetX = +_), boxPlot) : hoverOffsetX;
    }

    boxPlot.hoverOffsetY = function (_) {
        return arguments.length ? ((hoverOffsetY = +_), boxPlot) : hoverOffsetY;
    }

    boxPlot.removeAxis = function (_) {
        return arguments.length ? ((removeAxis = _), boxPlot) : removeAxis;
    }

    return boxPlot;
}
