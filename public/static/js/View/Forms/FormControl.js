'use strict';
import { ButtonGroup } from '../Components/ButtonGroup.js';
import { Core } from '../../Core.js';
import { SpiderChart } from '../Components/myChart.js';

const Content = ['Commitment', 'Openness', 'Respect', 'Focus', 'Courage'];

export const FormControl = () => {
    return `
    <div class="form-control">
        ${Core.Render(ButtonGroup, Content)}
        <div class="check-point"></div>
    </div>
    ${SpiderChart()}
    `
};