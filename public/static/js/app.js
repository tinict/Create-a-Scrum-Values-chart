"use strict";

import { ButtonGroup } from './View/Components/ButtonGroup.js';
import { FormCheck } from './View/Forms/FormCheck.js';
import { Core } from './Core.js';

const root = document.getElementById("root");

const Content = ['Courage', 'Commitment', 'Focus', 'Openness', 'Respect'];
const Values = ['Hello', "Hello Guide"];

const Question = (Number, Content, Checked) => {
    return {
        Number: Number,
        Content: Content,
        Checked: Checked
    };
};

const Value = (NameValue, State, TotalQuestion, Questions) => {
    return {
        NameValue: NameValue,
        State: State,
        TotalQuestion: TotalQuestion,
        Questions: Questions
    };
}

// DataTest
const arr1 = [Question(1, 'A1', false), Question(2, 'B1', false), Question(3, 'C1', false), Question(4, 'D1', false), Question(5, 'E1', false)];
const arr2 = [Question(1, 'A2', false), Question(2, 'B2', false), Question(3, 'C2', false), Question(4, 'D2', false), Question(5, 'E2', false)];
const arr3 = [Question(1, 'A3', false), Question(2, 'B3', false), Question(3, 'C3', false), Question(4, 'D3', false), Question(5, 'E3', false)];
const arr4 = [Question(1, 'A4', false), Question(2, 'B4', false), Question(3, 'C4', false), Question(4, 'D4', false), Question(5, 'E4', false)];
const arr5 = [Question(1, 'A5', false), Question(2, 'B5', false), Question(3, 'C5', false), Question(4, 'D5', false), Question(5, 'E5', false)];

const Vals = [
                Value("Courage", false, 5, arr1), 
                Value("Commitment", false, 5, arr2),
                Value("Focus", false, 5, arr3),
                Value("Openness", false, 5, arr4),
                Value("Respect", false, 5, arr5)
            ];

const app = () => {
    return `
        <div class="container">
            <div class="form-control">
                ${Core.Render(ButtonGroup, Content)}
                <div class="check-point">
                    ${Core.Render(FormCheck, Values, 'Check_')}
                </div>
                <div class="btnGroup-directional">
                    <button type="button" class="btn btn-primary">Back</button>
                    <button type="button" class="btn btn-primary">Next</button>
                </div>
            </div>
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </div>
    `
};

root.innerHTML = app();

let btnGroups = document.querySelectorAll('.btn-group');
let Answers = [0, 0, 0, 0, 0];
console.log(Answers);

const data = {
    labels: [
      'Commitment',
      'Openness',
      'Respect',
      'Focus',
      'Courage'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: Answers,
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, 
    {
      label: 'My Second Dataset',
      data: [0, 1, 2, 3, 5],
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgb(0, 0, 0, 0)',
    }]
  };
  
const config = {
      type: 'radar',
      data: data,
      options: {
          plugins: {
              tooltip: {
                  enabled: false,
              },
              decimation: {
                  enabled: false,
              },
              legend: {
                  display: false,
                  title: {
                      display: false,
                  }
              },
              subtitle: {
                  display: false,
              },
              title: {
                  display: false,
              },
          },
          hover: {
              mode: 'circles',
              intersect: false
          },
          interaction: {
              display: false
          },
          scale: {
              r: {
                  ticks: {
                      stepSize: 1,
                      display: false
                  }
              }
          },
          elements: {
              line: {
                  borderWidth: 3
              }
          }
      }
};

const ctx = document.getElementById('myChart');
var mychart = new Chart(ctx, config);

for(let i = 0; i < btnGroups.length; i++) {
    btnGroups[i].onclick = () => {
        const btnContent = btnGroups[i].innerText;
        let totalChecked = 0;
        console.log(totalChecked);
        console.log(btnContent);
        for (let key of Vals) {
            if (key.NameValue == btnContent) {
                const ElementCheckPoint = document.querySelector('.check-point');
                const Questions = [];
                key.Questions.forEach(element => {
                    Questions.push(element.Content);
                });
                ElementCheckPoint.innerHTML = Core.Render(FormCheck, Questions, 'Check_');
                let checkeds =  document.querySelectorAll('.form-check-input');
                console.log(checkeds);
                
                for(let j = 0; j < checkeds.length; j++) {
                    checkeds[j].onclick = () => {
                        let Checked = checkeds[j].checked;
                        console.log(checkeds[j].checked);
                        if (Checked == true) 
                            totalChecked += 1;
                        else 
                            totalChecked -= 1;
                        Answers[i] = totalChecked; 
                        console.log(Answers);
                        console.log(totalChecked);
                        const ctx = document.getElementById('myChart');
                        console.log(ctx)
                        mychart.destroy();
                        mychart = new Chart(ctx, config);
                        console.log(data.datasets[0].data)
                    }
                }
            }
        }
    }
}


//View
// let checkeds =  document.querySelectorAll('.form-check-input');
// console.log(checkeds);

// for(let i = 0; i < checkeds.length; i++) {
//     checkeds[i].onclick = () => {
//         console.log(checkeds[i].checked);
//     }
// }