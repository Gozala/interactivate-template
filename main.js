"use strict";

var interactivate = require("interactivate")
var startHost = require("interactivate/host/window")

var persist = require("codemirror-persist")

// Install plugins
interactivate(CodeMirror)

// Install other plugins
persist(CodeMirror)

// Start an interactivate host
startHost()

// Setup editor
var editor = CodeMirror(document.body, {
  value: document.getElementById("intro").textContent.substr(1),
  hashare: true,
  persist: true,
  matchBrackets: true,
  electricChars: true,
  interactivate: true,
  styleActiveLine: true,
  autofocus: true,
  theme: "solarized dark",
  mode: "javascript",
  extraKeys: {
    "Tab": "indentSelection"
  }
})


global.editor = editor