"use strict";

var interactivate = require("interactivate")
var startHost = require("interactivate/host/window")

var hashare = require("codemirror-hashare")
var persist = require("codemirror-persist")
var activine = require("codemirror-activine")

// Install plugins
interactivate(CodeMirror)

// Install other plugins
activine(CodeMirror)
hashare(CodeMirror)
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
  activeLine: true,
  autofocus: true,
  theme: "solarized dark",
  mode: "javascript",
  extraKeys: {
    "Tab": "indentSelection"
  }
})


global.editor = editor