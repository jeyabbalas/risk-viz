

export function populationPrevalencePlot() {
  let width;
  let height;
  let prevalence;
  let colorCase;
  let colorControl;
  let labelCase;
  let labelControl;
  let fontSize;
  let margin;

  const populationPrevalencePlot = (selection) => {
    const gridSize = 10;
    const legendWidth = width / 3.1;
    const plotWidth = width - legendWidth;
    const cellSize = (plotWidth - margin.left - margin.right) / gridSize;
    const legendRectSize = cellSize / 2;
    const offset = 2
    const legendOffset = 15;
    const numColored = Math.floor(gridSize * gridSize * (prevalence / 100));
    const fractionalPrevalence = gridSize * gridSize * (prevalence / 100) - numColored;
    const personData = Array.from({length: gridSize * gridSize}, (_, i) => {
      return {index: i, color: i < numColored ? colorCase : colorControl};
    });

    const personPath = 'm62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z';

    const svg = selection
      .selectAll('svg#population-prevalence-plot')
      .data([null])
      .join('svg')
      .attr('id', 'population-prevalence-plot')
      .attr('width', width)
      .attr('height', height)
      .attr("viewBox",`0 0 ${width} ${plotWidth}`)
      .attr('font-family', 'sans-serif');

    svg
      .selectAll('.population-border')
      .data([null])
      .join('rect')
      .attr('class', 'population-border')
      .attr('width', plotWidth)
      .attr('height', plotWidth)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 3)
      .attr('transform', `translate(${offset}, ${offset})`);

    let colorGradient = svg
      .selectAll('defs')
      .data([null])
      .join('defs')
      .append('linearGradient')
      .attr('id', 'color-gradient-fraction')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');

    colorGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', colorCase);

    colorGradient
      .append('stop')
      .attr('offset', `${fractionalPrevalence * 100}%`)
      .attr('stop-color', colorCase);

    colorGradient
      .append('stop')
      .attr('offset', `${fractionalPrevalence * 100}%`)
      .attr('stop-color', colorControl);

    colorGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorControl);

    const person = svg
      .selectAll('g.person')
      .data(personData);

    const personEnter = person
      .enter()
      .append('g')
      .attr('class', 'person');

    const personUpdate = personEnter
      .merge(person)
      .attr('transform', (d, i) => `translate(${margin.left + (i % gridSize) * cellSize + offset}, ${margin.top + Math.floor(i / gridSize) * cellSize + offset}) scale(${cellSize / 124.19})`);

    personUpdate
      .selectAll('path')
      .data(d => [d])
      .join('path')
      .attr('d', personPath)
      .attr('fill', (d) => {
        if (d.index === numColored && fractionalPrevalence > 0) {
          return 'url(#color-gradient-fraction)';
        }
        return d.color;
      });

    person
      .exit()
      .remove();

    const legend = svg
      .selectAll('g.population-legend')
      .data([null])
      .join('g')
      .attr('class', 'color-legend')
      .attr('transform', `translate(${plotWidth + legendOffset}, ${margin.top + legendOffset})`);

    legend
      .selectAll('rect.population-legend-border')
      .data([null])
      .join('rect')
      .attr('class', 'population-legend-border')
      .attr('width', legendWidth - 20)
      .attr('height', legendRectSize * 4)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2);

    legend
      .selectAll('rect.population-legend-case-color')
      .data([null])
      .join('rect')
      .attr('class', 'population-legend-case-color')
      .attr('x', legendRectSize / 2)
      .attr('y', legendRectSize / 2)
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .attr('fill', colorCase)
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

    legend
      .selectAll('rect.population-legend-case-labal')
      .data([null])
      .join('text')
      .attr('class', 'population-legend-case-labal')
      .attr('x', legendRectSize * 2)
      .attr('y', cellSize / 2)
      .attr('dy', '.35em')
      .text(labelCase ?? 'Case')
      .style('font-size', `${fontSize ?? (legendRectSize / 1.25)}px`).style();

    legend
      .selectAll('rect.population-legend-control-color')
      .data([null])
      .join('rect')
      .attr('class', 'population-legend-control-color')
      .attr('x', legendRectSize / 2)
      .attr('y', (legendRectSize * 4) / 2 + legendRectSize / 2)
      .attr('width', legendRectSize)
      .attr('height', legendRectSize)
      .attr('fill', colorControl)
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

    legend
      .selectAll('rect.population-legend-control-labal')
      .data([null])
      .join('text')
      .attr('class', 'population-legend-control-labal')
      .attr('x', legendRectSize * 2)
      .attr('y', cellSize + cellSize / 2)
      .attr('dy', '.35em')
      .text(labelControl ?? 'Control')
      .style('font-size', `${fontSize ?? (legendRectSize / 1.25)}px`);
  };

  populationPrevalencePlot.width = function (_) {
    return arguments.length ? ((width = +_), populationPrevalencePlot) : width;
  }

  populationPrevalencePlot.height = function (_) {
    return arguments.length ? ((height = +_), populationPrevalencePlot) : height;
  }

  populationPrevalencePlot.prevalence = function (_) {
    return arguments.length ? ((prevalence = +_), populationPrevalencePlot) : prevalence;
  }

  populationPrevalencePlot.colorCase = function (_) {
    return arguments.length ? ((colorCase = _), populationPrevalencePlot) : colorCase;
  }

  populationPrevalencePlot.colorControl = function (_) {
    return arguments.length ? ((colorControl = _), populationPrevalencePlot) : colorControl;
  }

  populationPrevalencePlot.labelCase = function (_) {
    return arguments.length ? ((labelCase = _), populationPrevalencePlot) : labelCase;
  }

  populationPrevalencePlot.labelControl = function (_) {
    return arguments.length ? ((labelControl = _), populationPrevalencePlot) : labelControl;
  }

  populationPrevalencePlot.fontSize = function (_) {
    return arguments.length ? ((fontSize = +_), populationPrevalencePlot) : fontSize;
  }

  populationPrevalencePlot.margin = function (_) {
    return arguments.length ? ((margin = _), populationPrevalencePlot) : margin;
  }

  return populationPrevalencePlot;
}
