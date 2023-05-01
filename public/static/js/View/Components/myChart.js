'use strict';

import { Config } from "../../Config.js";

export const myChart = {
    Radar: (Answers, myChart) => {
        const ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, Config(Answers).Config_Chart_js);
        return myChart;
    }
};