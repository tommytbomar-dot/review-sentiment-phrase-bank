const test = require('node:test'); const assert = require('node:assert'); const rows = require('../phrases.json');
test('dataset shape', () => {
  assert.ok(rows.length >= 60);
  const ids = new Set(rows.map(r => r.id)); assert.equal(ids.size, rows.length);
  for (const r of rows) { assert.ok(['positive', 'neutral', 'negative'].includes(r.sentiment)); assert.ok(['opening', 'body', 'resolution', 'closing'].includes(r.slot)); assert.ok(r.phrase.length > 10); }
});
test('every sentiment has every slot', () => {
  for (const s of ['positive', 'neutral', 'negative']) for (const slot of ['opening', 'body', 'resolution', 'closing']) assert.ok(rows.some(r => r.sentiment === s && r.slot === slot), s + slot);
});
test('no fake claims', () => { for (const r of rows) assert.ok(!/guarantee|refund|\b100%\b/i.test(r.phrase), r.phrase); });
