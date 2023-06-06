import {
    scaleLinear,
    min,
    max,
    axisLeft,
    axisRight,
    axisTop,
    axisBottom,
} from 'd3';


export function calibrationPlot() {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let yError;  // [lower CI accessor, upper CI accessor]
  let xLabel;
  let yLabel;
  let title;
  let margin;
  let radius;
  let strokeWidth = 1;
  let markerColor = 'black';
  let fontSize = 15;

  const calibrationPlot = (selection) => {
    const svg = selection
      .selectAll('svg.calibration-plot')
      .data([null])
      .join('svg')
      .attr('class', 'calibration-plot')
      .attr('width', width)
      .attr('height', height)
      .attr('font-family', 'sans-serif')
      .attr('font-size', fontSize);

    let minValue = min(data, d => yError[0](d));
    if (min(data, xValue) < minValue) {
      minValue = min(data, xValue);
    }

    let maxValue = max(data, d => yError[1](d));
    if (max(data, xValue) > maxValue) {
      maxValue = max(data, xValue);
    }

    const x = scaleLinear()
      .domain([minValue, maxValue]).nice()
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain([minValue, maxValue]).nice()
      .range([height - margin.bottom, margin.top]);

    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('cx', (d) => x(xValue(d)))
      .attr('cy', (d) => y(yValue(d)))
      .attr('r', radius)
      .attr('stroke', 'black')
      .attr('stroke-width', strokeWidth)
      .attr('fill', markerColor)
      .append("title")
      .text(d => `${xLabel.replace(/\s*→*\s*$/, '')}: ${xValue(d).toFixed(4)}\n${yLabel.replace(/\s*→*\s*$/, '')}: ${yValue(d).toFixed(4)} [${yError[0](d).toFixed(4)}, ${yError[1](d).toFixed(4)}]`);

    // Draw error bars
    if (yError !== undefined) {
        svg
        .selectAll('.error-bar-lower')
        .data(data)
        .join('line')
        .attr('class', 'error-bar-lower')
        .attr('stroke', 'black')
        .attr('stroke-width', strokeWidth)
        .attr('x1', d => x(xValue(d)))
        .attr('y1', d => y(yError[0](d)))
        .attr('x2', d => x(xValue(d)))
        .attr('y2', d => y(yValue(d)) + radius);

      svg
        .selectAll('.error-bar-upper')
        .data(data)
        .join('line')
        .attr('class', 'error-bar-upper')
        .attr('stroke', 'black')
        .attr('stroke-width', strokeWidth)
        .attr('x1', d => x(xValue(d)))
        .attr('y1', d => y(yValue(d)) - radius)
        .attr('x2', d => x(xValue(d)))
        .attr('y2', d => y(yError[1](d)));

      svg
        .selectAll('.error-bar-lower-cap')
        .data(data)
        .join('line')
        .attr('class', 'error-bar-lower-cap')
        .attr('stroke', 'black')
        .attr('stroke-width', strokeWidth)
        .attr('x1', d => x(xValue(d)) - 5)
        .attr('y1', d => y(yError[0](d)))
        .attr('x2', d => x(xValue(d)) + 5)
        .attr('y2', d => y(yError[0](d)));

      svg
        .selectAll('.error-bar-upper-cap')
        .data(data)
        .join('line')
        .attr('class', 'error-bar-upper-cap')
        .attr('stroke', 'black')
        .attr('stroke-width', strokeWidth)
        .attr('x1', d => x(xValue(d)) - 5)
        .attr('y1', d => y(yError[1](d)))
        .attr('x2', d => x(xValue(d)) + 5)
        .attr('y2', d => y(yError[1](d)));
    }

    svg
      .selectAll('.y-axis-left')
      .data([null])
      .join('g')
      .attr('class', 'y-axis-left')
      .attr('transform', `translate(${margin.left},0)`)
      .call(axisLeft(y));

    svg
      .selectAll('.y-axis-right')
      .data([null])
      .join('g')
      .attr('class', 'y-axis-right')
      .attr('transform', `translate(${width - margin.right},0)`)
      .call(axisRight(y).tickSize(0).tickFormat(''));

    svg
      .selectAll('.y-axis-label')
      .data([null])
      .join('text')
      .attr('class', 'y-axis-label')
      .text(yLabel)
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('x',  - margin.top)
      .attr('y', margin.left / 3)
      .style('font-size', fontSize * (3/4));

    svg
      .selectAll('.x-axis-bottom')
      .data([null])
      .join('g')
      .attr('class', 'x-axis-bottom')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(axisBottom(x));

    svg
      .selectAll('.x-axis-top')
      .data([null])
      .join('g')
      .attr('class', 'x-axis-top')
      .attr('transform', `translate(0,${margin.top})`)
      .call(axisTop(x).tickSize(0).tickFormat(''));

    svg
      .selectAll('.x-axis-label')
      .data([null])
      .join('text')
      .attr('class', 'x-axis-label')
      .attr('text-anchor', 'end')
      .attr('x', width - margin.right)
      .attr('y', height - margin.bottom / 3)
      .text(xLabel)
      .style('font-size', fontSize * (3/4));

    svg
      .selectAll('.title')
      .data([null])
      .join('text')
      .attr('class', 'title')
      .text(title)
      .attr('text-anchor', 'middle')
      .attr('x',  width / 2)
      .attr('y', margin.top / 2);

    svg
      .selectAll('.perfect-calibration-line')
      .data([null])
      .join('line')
      .attr('class', 'perfect-calibration-line')
      .attr('stroke', 'black')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '3,3')
      .attr('x1', x(x.domain()[0]))
      .attr('y1', y(x.domain()[0]))
      .attr('x2', x(x.domain()[1]))
      .attr('y2', y(x.domain()[1]));
  };

  calibrationPlot.width = function (_) {
    return arguments.length ? ((width = +_), calibrationPlot) : width;
  }

    calibrationPlot.height = function (_) {
    return arguments.length ? ((height = +_), calibrationPlot) : height;
  }

  calibrationPlot.data = function (_) {
    return arguments.length ? ((data = _), calibrationPlot) : data;
  }

  calibrationPlot.xValue = function (_) {
    return arguments.length ? ((xValue = _), calibrationPlot) : xValue;
  }

  calibrationPlot.yValue = function (_) {
    return arguments.length ? ((yValue = _), calibrationPlot) : yValue;
  }

  calibrationPlot.yError = function (_) {
    return arguments.length ? ((yError = _), calibrationPlot) : yError;
  }

  calibrationPlot.xLabel = function (_) {
    return arguments.length ? ((xLabel = _), calibrationPlot) : xLabel;
  }

  calibrationPlot.yLabel = function (_) {
    return arguments.length ? ((yLabel = _), calibrationPlot) : yLabel;
  }

  calibrationPlot.title = function (_) {
    return arguments.length ? ((title = _), calibrationPlot) : title;
  }

  calibrationPlot.margin = function (_) {
    return arguments.length ? ((margin = _), calibrationPlot) : margin;
  }

  calibrationPlot.radius = function (_) {
    return arguments.length ? ((radius = +_), calibrationPlot) : radius;
  }

  calibrationPlot.strokeWidth = function (_) {
    return arguments.length ? ((strokeWidth = +_), calibrationPlot) : strokeWidth;
  }

  calibrationPlot.markerColor = function (_) {
    return arguments.length ? ((markerColor = _), calibrationPlot) : markerColor;
  }

  calibrationPlot.fontSize = function (_) {
    return arguments.length ? ((fontSize = +_), calibrationPlot) : fontSize;
  }

  return calibrationPlot;
}
