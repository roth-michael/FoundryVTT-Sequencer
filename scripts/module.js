import setupSettings from "./settings.js";
import { registerSocket } from "./sockets.js";
import registerLayer from "./layers.js";
import registerHooks from "./hooks.js";
import Sequence from "./module/sequencer.js";

Hooks.once('init', async function() {
    registerLayer();
});

Hooks.once('ready', async function() {
    setupSettings();
    registerSocket();
    registerHooks();
    window.Sequence = Sequence;
    console.log("Sequencer | Ready to go!")
});