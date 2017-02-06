/**
        Author: SpringHack - springhack@live.cn
        Last modified: 2017-02-06 11:55:13
        Filename: marked.js
        Description: Created by SpringHack using vim automatically.
**/
import marked from 'marked';

let renderer = new marked.Renderer();

marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

export default marked;
