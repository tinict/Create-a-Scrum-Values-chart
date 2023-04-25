"use strict";

const OopValues = {
    Values: [{
        NameValue: 'Courage',
        State: false,
        TotalQuestion: 5,
        Questions: {
            Ques_01: {
                Number: 1,
                Content: "",
                Checked: false
            }
        }
    }]
};

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

const qs1 = Question(1, 'Xin chào các bạn 1', true);
const qs2 = Question(2, 'Xin chào các bạn 2', true);
const arr = [qs1, qs2];
const Values = [Value("Dũng cảm", false, 5, arr)];

console.log(Values);


// Test class

// const btnGroup = document.querySelector('.btn');
// console.log(btnGroup);

// btnGroup.onclick = () => {
//     console.log('Hello');
// };

// console.log(btnGroup);
