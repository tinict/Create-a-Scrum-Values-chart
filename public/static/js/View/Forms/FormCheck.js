"use strict";

export const FormCheck = (Content, NameId) => {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${NameId}">
            <label class="form-check-label" for="${NameId}">
                ${Content}
            </label>
        </div>
    `;
};
