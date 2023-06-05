import {dispatch} from 'd3';

export function slider() {
    let id;
    let labelText;
    let min;
    let max;
    let step;
    let value;
    const listeners = dispatch('change');

    const slider = (selection) => {
        selection
            .attr('class', 'accent-slate-600 py-2 sm:py-4');

        selection
            .selectAll('label')
            .data([null])
            .join('label')
            .attr('for', id)
            .attr('class', 'pr-2')
            .text(labelText);

        selection
            .selectAll('input')
            .data([null])
            .join('input')
            .attr('type', 'range')
            .attr('id', id)
            .attr('min', min)
            .attr('max', max)
            .attr('value', value)
            .on('change', (event) => {
                selection
                    .selectAll('output')
                    .data([null])
                    .join('output')
                    .attr('id', id)
                    .text(event.target.value);

                listeners.call('change', null, event.target.value);
            });

        selection
            .selectAll('output')
            .data([null])
            .join('output')
            .attr('id', id)
            .attr('class', 'pl-2 sm:pl-4')
            .text(value);
    };

    slider.id = function (_) {
        return arguments.length ? ((id = _), slider) : id;
    }

    slider.labelText = function (_) {
        return arguments.length ? ((labelText = _), slider) : labelText;
    }

    slider.min = function (_) {
        return arguments.length ? ((min = +_), slider) : min;
    }

    slider.max = function (_) {
        return arguments.length ? ((max = +_), slider) : max;
    }

    slider.step = function (_) {
        return arguments.length ? ((step = +_), slider) : step;
    }

    slider.value = function (_) {
        return arguments.length ? ((value = +_), slider) : value;
    }

    slider.on = function () {
        let value = listeners.on.apply(listeners, arguments);
        return value === listeners ? slider : value;
    };

    return slider;
}
