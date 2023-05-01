'use strict';
import { FormCheck } from "../View/Forms/FormCheck.js";
import { Core } from '../Core.js';
import { Config } from "../Config.js";

const ctx = document.getElementById('myChart');
let myChart = '';

export const ControllerChart = {
    EventCheckedChart: (Answers, Vals) => {
        let btnGroups = document.querySelectorAll('.btn-group');
        for(let i = 0; i < btnGroups.length; i++) {
            btnGroups[i].onclick = () => {
                const btnContent = btnGroups[i].innerText;
                for (let key of Vals) {
                    if (key.NameValue == btnContent) {
                        const ElementCheckPoint = document.querySelector('.check-point');
                        const Questions = [];
                        key.Questions.forEach(element => {
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
                let storeCountAnswer = [
                    ControllerChart.CountChecked(Answers[0]),
                    ControllerChart.CountChecked(Answers[1]),
                    ControllerChart.CountChecked(Answers[2]),
                    ControllerChart.CountChecked(Answers[3]),
                    ControllerChart.CountChecked(Answers[4]),
                ];
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