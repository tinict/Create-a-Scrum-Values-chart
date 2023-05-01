"use strict";

import { ButtonGroup } from './View/Components/ButtonGroup.js';
import { FormCheck } from './View/Forms/FormCheck.js';
import { Core } from './Core.js';
import { Model_QA } from './Models/Model_QA.js';
import { ControllerChart } from './Controllers/ControllerChart.js';
import { Navbar } from './View/Components/Navbar.js'


const root = document.getElementById("root");

const Content = ['Courage', 'Commitment', 'Focus', 'Openness', 'Respect'];
// const Values = ['Hello', "Hello Guide"];

// DataTest
const arr1 = [Model_QA.Question(1, 'A1', false), Model_QA.Question(2, 'B1', false), Model_QA.Question(3, 'C1', false), Model_QA.Question(4, 'D1', false), Model_QA.Question(5, 'E1', false)];
const arr2 = [Model_QA.Question(1, 'A2', false), Model_QA.Question(2, 'B2', false), Model_QA.Question(3, 'C2', false), Model_QA.Question(4, 'D2', false), Model_QA.Question(5, 'E2', false)];
const arr3 = [Model_QA.Question(1, 'A3', false), Model_QA.Question(2, 'B3', false), Model_QA.Question(3, 'C3', false), Model_QA.Question(4, 'D3', false), Model_QA.Question(5, 'E3', false)];
const arr4 = [Model_QA.Question(1, 'A4', false), Model_QA.Question(2, 'B4', false), Model_QA.Question(3, 'C4', false), Model_QA.Question(4, 'D4', false), Model_QA.Question(5, 'E4', false)];
const arr5 = [Model_QA.Question(1, 'A5', false), Model_QA.Question(2, 'B5', false), Model_QA.Question(3, 'C5', false), Model_QA.Question(4, 'D5', false), Model_QA.Question(5, 'E5', false)];

const Vals = [
    Model_QA.Value("Courage", false, 5, arr1), 
    Model_QA.Value("Commitment", false, 5, arr2),
    Model_QA.Value("Focus", false, 5, arr3),
    Model_QA.Value("Openness", false, 5, arr4),  
    Model_QA.Value("Respect", false, 5, arr5)
];

var Temp = [];
for (let i = 0; i < arr1.length; i++) {
    Temp.push(arr1[i].Content); 
}    

console.log(Temp);

export let Answers = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];

const app = () => {
    return `
        <div class="container">
            <header class="bg-light">
                ${Navbar()}
            </header>
            <div class="form-control">
                ${Core.Render(ButtonGroup, Content)}
                <div class="check-point">
                    ${Core.Render(FormCheck, Temp, 'Check_')}
                </div>
                <div class="btnGroup-directional">
                    <button type="button" class="btn btn-primary">Back</button>
                    <button type="button" class="btn btn-primary">Next</button>
                </div>
                <div class='bg-CreateChart'>
                    <button type="button" class="btn btn-primary btn-sm btn-createChart">Create My Chart Scrum</button>
                </div>
            </div>
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </div>
    `
};

root.innerHTML = app();

window.onload = () => {
    let ElementButtonTopForm = document.querySelector('.check-point');
    ElementButtonTopForm.innerHTML = `${Core.Render(FormCheck, Temp, 'Check_')}`;
    ControllerChart.EventCheckedChart(Answers, Vals);
};

const ElementNavbarUser = document.querySelector('.navbar-user');
const ElementSubNav = document.querySelector('.sub-nav');
const ElementbtnCreateChart = document.querySelector('.btn-createChart');
const ElementgbCreateChart = document.querySelector('.bg-CreateChart');

ElementNavbarUser.onclick = () => {
    ElementSubNav.classList.toggle('display');
};

ElementbtnCreateChart.onclick = () => {
    ElementgbCreateChart.classList.toggle('none');
};
