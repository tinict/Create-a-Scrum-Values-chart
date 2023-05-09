'use strict';
import { FormCheck } from "../View/Forms/FormCheck.js";
import { Core } from '../Core.js';
import { Config } from "../Config.js";

const ctx = document.getElementById('myChart'); 
let myChart = '';
let storeCountAnswer = [];

export const ControllerChart = {
    ShowQuestionValue: (ValueName, Answers, Vals) => {
        let ctx = document.getElementById('myChart');
        myChart = new Chart(ctx, Config(storeCountAnswer).Config_Chart_js);
        for (let key of Vals) {
            if (key.NameValue == ValueName) {
                let Temp = Object.values(key.Questions);
                console.log(Temp);
                const ElementCheckPoint = document.querySelector('.check-point');
                const Questions = [];
                Temp.forEach(element => {
                    Questions.push(element.Content);
                });
                console.log(Questions);
                ElementCheckPoint.innerHTML = Core.Render(FormCheck, Questions, 'Check_');
                let checkeds =  document.querySelectorAll('.form-check-input');
                for (let j = 0; j < Answers[0].length; j++) {
                    if(Answers[0][j] == true) {
                        let ElementCheck =  document.getElementById('Check_' + j);
                        ElementCheck.checked = true;
                    }
                }
                ControllerChart.storeAnswer(checkeds, Answers, 0);
            }
        }
    },
    EventCheckedChart: (Answers, Vals) => {
        let btnGroups = document.querySelectorAll('.btn-group');
        let ElementbtnOutlinePrimary = document.querySelectorAll('.btn-outline-primary');
        for(let i = 0; i < btnGroups.length; i++) {
            btnGroups[i].onclick = () => {
                const btnContent = btnGroups[i].innerText;
                ElementbtnOutlinePrimary[i].classList.add('active');
                for (let t = 0; t < ElementbtnOutlinePrimary.length; t++) {
                    if (t != i)
                        ElementbtnOutlinePrimary[t].classList.remove('active');
                }
                console.log(btnContent);
                for (let key of Vals) {
                    if (key.NameValue == btnContent) {
                        let Temp = Object.values(key.Questions);
                        const ElementCheckPoint = document.querySelector('.check-point');
                        const Questions = [];
                        Temp.forEach(element => {
                            Questions.push(element.Content);
                        });
                        ElementCheckPoint.innerHTML = Core.Render(FormCheck, Questions, 'Check_');
                        let checkeds =  document.querySelectorAll('.form-check-input');
                        for (let j = 0; j < Answers[i].length; j++) {
                            if(Answers[i][j] == true) {
                                let ElementCheck =  document.getElementById('Check_' + j);
                                ElementCheck.checked = true;
                            }
                        }
                        ControllerChart.storeAnswer(checkeds, Answers, i);
                    }
                }
            }
        }
    },
    storeAnswer: (ElementCheckeds, Answers, index) => {
        var len = ElementCheckeds.length;
        for (let j = 0; j < len; j++) {
            ElementCheckeds[j].onclick = () => {
                let Checked = ElementCheckeds[j].checked;
                Answers[index][j] = Checked;
                let ctx = document.getElementById('myChart');
                if (myChart != '')
                    myChart.destroy();
                storeCountAnswer = [];
                Answers.forEach(val => {
                    storeCountAnswer.push(ControllerChart.CountChecked(val));
                });
                myChart = new Chart(ctx, Config(storeCountAnswer).Config_Chart_js);
            };
        }
    },
    CountChecked: (array) => {
        let len = array.length;
        let count = 0;
        for (let i = 0; i < len; i++)
            if (array[i] == true)
                count++;
        return count;
    }
}