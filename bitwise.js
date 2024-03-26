console.log(1|2);
console.log(1&2);

console.log();

//read,write,execte
//00000100
//00000010s
//00000001

const readPermission = 4;
const writePermission = 2;
const executepermission = 1;

let myPermisson = 0;
myPermisson = writePermission | executepermission;

let message = (myPermisson & readPermission) ? 'Yes': 'No';
console.log(message);

