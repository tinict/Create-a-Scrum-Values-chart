"use strict";

export const Core = {
    Render: (Component, Content, Name) => {
        return Content.map((Value, index) => {
            return Component(Value, `${Name}${index}`);
        }).join('');
    },
};