const fs = require('fs');
const path = require('path');

const target = process.argv[2];
const b64 = process.argv[3];
if (!target || !b64) {
  console.error('Usage: node scripts/writer.js <path> <base64>');
  process.exit(1);
}

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, Buffer.from(b64, 'base64').toString('utf8'), 'utf8');
console.log('Successfully wrote', target);
