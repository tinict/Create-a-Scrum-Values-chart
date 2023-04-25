"use strict";

export const ButtonGroup = (Content) => {
    return `
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary">${Content}</button>
        </div>
    `;
};
