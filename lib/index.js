import makeWASocket from './Socket/index.js';
const chalk = require("chalk");
const gradient = require("gradient-string");
const { version } = require("../package.json");

console.log("\x1Bc\x1B[3J");
console.log();

console.clear();

/*
Don't Change the Console below, Because you don't have the right!!
*/

const art = `
⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⢀⡴⠂
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⠛⠛⠛⠻⣿⠟⠉⠀⠀⣠⣾⠏⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⣀⣴⣿⡿⠃⠀⠀⠀NAME: DavaXbail
⠀⠀⠀⢀⣾⣿⣿⣿⠁⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⠃⠀⠀⠀⠀VERSION: ${version}
⠀⠀⢀⣾⣿⣿⣿⠃⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀LICENSE: MIT
⠀⢀⣾⣿⡿⠛⠁⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⢀⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`;

console.log(gradient.passion.multiline(art));
console.log(`\x1b[45m\x1b[32m © 2026-2028 \x1b[0m`);

setTimeout(() => {
    process.stdout.write("\x1Bc\x1B[3J");
}, 3500);
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
export * as MessageBuilder from './Socket/MessageBuilder.js';
export { default as MB } from './Socket/MessageBuilder.js';
