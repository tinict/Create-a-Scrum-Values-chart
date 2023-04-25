"use strict";

export const Config = () => {
    return {
        ButtonGroup: {
            className: "form-check",
            tagName: "div",
            subClass: {
                className: "form-check-input",
                tagName: "div",
                'form-check-input': {
                    className: "form-check-input",
                    type: "checkbox",
                    value: "",
                    id: "check_01",
                    tagName: "input",
                },
                'form-check-label': {
                    className: "form-check-input",
                    for: "check_01",
                    tagName: "label",
                }
            }
        },
    };
};

console.log(Config().ButtonGroup);