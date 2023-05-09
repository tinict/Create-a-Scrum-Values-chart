'use strict';

import { Config } from "../../Config.js";

export const SpiderChart = () => { 
    return `
    <div class='SpiderChart'>
        <div class='header-spider'>
            <h3 class='title-chart'>
                My Chart
            </h3>
            <a class="btn-reset" href="">Reset</a>
        </div>
        <canvas id="myChart"></canvas>
    </div>
    `
};

export const myChart = {
    Radar: (Answers, myChart) => {
        const ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, Config(Answers).Config_Chart_js);
        return myChart;
    }
};