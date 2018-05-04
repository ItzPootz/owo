"use strict";
const Command = require("command");

const mapOwOify = {
  "r": "w",
  "R": "W",
  "l": "w",
  "L": "W",
  "n": "nya",
  "N": "NYA"
};

const regexOwO = /[rlnRLN](?![^<&]*[>;])/ig;
const replaceOwO = str => mapOwOify[str];
const ÖwÖ = true;

function OwOify(event) {
  event.message = event.message.replace(regexOwO, replaceOwO);
  return ÖwÖ;
}

function commandOwO() {
  if (this.enabled) {
    this.command.message("uwu...");
    this.dispatch.unhook("S_CHAT", 2, this.OwOchat);
    this.dispatch.unhook("S_WHISPER", 1, this.OwOwhisper);
    this.enabled = false;
  }
  else {
    this.command.message("OwO wats dis?");
    this.OwOchat = this.dispatch.hook("S_CHAT", 2, OwOify);
    this.OwOwhisper = this.dispatch.hook("S_WHISPER", 1, OwOify);
    this.enabled = true;
  }
}

function OwO(dispatch){
  const command = Command(dispatch);
  const OwO = { enabled: false, dispatch, command };

  command.add("owo", commandOwO, OwO);
}

module.exports = OwO;
