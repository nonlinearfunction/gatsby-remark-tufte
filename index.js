"use strict";

const sidenotes = require("./src/remark-sidenotes-transformer")();

module.exports = ({ markdownAST }, pluginOptions = {}) => {
    try {
        sidenotes(markdownAST);
    } catch (error) {
        console.error("Error applying sidenotes: ", error);
    }
    return markdownAST;
};
