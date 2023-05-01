'use strict';

export const Model_QA = {
    Question: (Number, Content, Checked = false) => {
        return {
            Number: Number,
            Content: Content,
            Checked: Checked = Checked
        };
    },
    Value: (NameValue, State, TotalQuestion, Questions) => {
        return {
            NameValue: NameValue,
            State: State,
            TotalQuestion: TotalQuestion,
            Questions: Questions
        }
    }
};