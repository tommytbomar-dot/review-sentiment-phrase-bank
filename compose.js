// Compose a reply: node compose.js positive "Maria" "AC tune-up" "Acme HVAC" "903-555-0100"
const rows = require('./phrases.json');
const [sent = 'positive', name = 'there', service = 'service', business = 'our team', phone = '[phone]', email = '[email]', manager = 'the owner', team_member = 'our technician'] = process.argv.slice(2);
const pick = (slot) => { const c = rows.filter((r) => r.sentiment === sent && r.slot === slot); return c.length ? c[Math.floor(Math.random() * c.length)].phrase : ''; };
const fill = (s) => s.replace(/{name}/g, name).replace(/{service}/g, service).replace(/{business}/g, business).replace(/{phone}/g, phone).replace(/{email}/g, email).replace(/{manager}/g, manager).replace(/{team_member}/g, team_member);
console.log(['opening', 'body', 'resolution', 'closing'].map(pick).filter(Boolean).map(fill).join(' '));
