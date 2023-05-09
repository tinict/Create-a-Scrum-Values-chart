"use strict";
import { ControllerChart } from './Controllers/ControllerChart.js';
import { Navbar } from './View/Components/Navbar.js'
import { StoreValue } from './Controllers/Controller.js';
import { Category } from './View/Components/Category.js';
import { FormControl } from './View/Forms/FormControl.js';
import { Overview } from './View/Components/Overview.js';
import { Config } from './Config.js';

export let Answers = [[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];

const app = () => {
    return `
        <div class="container">
            <header class="bg-light container-header">
                ${Navbar()}
            </header>
            <div class='content'>
                <div class="container-content">
                    ${Category()}
                    <div class='box-content'></div>
                </div>
            </div>
        </div>
    `
};

const root = document.getElementById("root");
root.innerHTML = app();

const ElementNewChart = document.querySelectorAll('.item-header-content');
const ElementBoxContent = document.querySelector('.box-content');


const ElementCategory = document.querySelectorAll('.Category li');

window.onload = () => {
    ElementCategory[1].classList.remove('active-category');
    ElementCategory[0].classList.add('active-category');
    ElementBoxContent.innerHTML = `${Overview()}`;
}

// Test button Overview và New Chart
ElementNewChart[0].onclick = () => {
    ElementCategory[1].classList.remove('active-category');
    ElementCategory[0].classList.add('active-category');
    ElementBoxContent.innerHTML = `${Overview()}`;
}

ElementNewChart[1].addEventListener('click', () => {
    ElementCategory[0].classList.remove('active-category');
    ElementCategory[1].classList.add('active-category');
    ElementBoxContent.innerHTML = `${FormControl()}`;
    ControllerChart.EventCheckedChart(Answers, StoreValue);
    ControllerChart.ShowQuestionValue('Courage', Answers, StoreValue);
    let ElementbtnOutlinePrimary = document.querySelectorAll('.btn-outline-primary');
    ElementbtnOutlinePrimary[0].classList.add('active');
})


const ElementNavbarUser = document.querySelector('.navbar-user');
const ElementSubNav = document.querySelector('.sub-nav');

ElementNavbarUser.onclick = () => {
    ElementSubNav.classList.toggle('display');
};
