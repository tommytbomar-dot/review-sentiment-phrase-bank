// Builds phrases.csv / phrases.json from the source table below. Run: node build.js
// Columns: id, sentiment (positive|neutral|negative), slot (opening|body|resolution|closing), phrase
const T = {
positive: {
 opening: ["Thank you for the kind review, {name}!", "{name}, thanks for taking the time to write this.", "We really appreciate you sharing this, {name}.", "Thanks for the five stars, {name}.", "What a nice note to read, {name}. Thank you!", "Thank you, {name}. Reviews like this mean a lot to a small business.", "Hearing this made our day, {name}."],
 body: ["We're glad the {service} went smoothly.", "It's great to hear {team_member} took good care of you.", "Showing up on time and doing it right is what we aim for, so we're glad that came through.", "Comments like yours help other neighbors know what to expect.", "We'll pass your note along to the crew.", "Thank you for mentioning {team_member} by name; that means a lot to them.", "We love hearing that the work was explained clearly.", "Clean, careful work matters to us, so thank you for noticing."],
 resolution: ["If anything comes up with the {service}, call us at {phone} and we'll take care of it.", "Keep our number handy for next time: {phone}.", "We're here if you need anything else.", "Know a neighbor who needs a hand? Send them our way at {phone}."],
 closing: ["Thanks again for choosing {business}.", "See you next time!", "We appreciate your business.", "Take care, {name}.", "Thanks for being part of the {business} community.", "Have a great week!"]
},
neutral: {
 opening: ["Thank you for the feedback, {name}.", "{name}, thanks for letting us know how it went.", "We appreciate you taking the time to review {business}.", "Thanks for your honest review, {name}."],
 body: ["We're glad the {service} got done, and we'd like to hear what would have earned a fifth star.", "It sounds like parts of the visit were good and parts could be better, and we'd like to understand the difference.", "If something was missing, we'd rather hear it directly so we can fix it.", "Your comments on timing are noted, and we're reviewing how we schedule.", "We're happy the result worked out, and we hear you on the communication.", "Thanks for the detail; it helps us see where the visit could have been smoother."],
 resolution: ["Call {phone} or email {email} and ask for {manager}; we'd like to talk it through.", "If you're open to it, tell us what we could have done better at {email}.", "Reply to this review or call {phone} and we'll follow up."],
 closing: ["Thanks again for the honest feedback.", "We appreciate you giving us the chance to improve.", "We hope to earn that fifth star next time."]
},
negative: {
 opening: ["{name}, we're sorry your experience fell short.", "Thank you for telling us about this, {name}, and we apologize.", "This isn't the standard we hold ourselves to, {name}, and we're sorry.", "We take this seriously, {name}."],
 body: ["We're looking into what happened with the {service}.", "You should not have had to wait that long, and we're sorry you did.", "We've shared your comments with {manager} so we can look at what went wrong.", "We can't confirm the details from a review alone, so we'd like to hear more from you directly.", "We would like the chance to make this right.", "We don't see a record under this name, so please contact us so we can look into it.", "Communication slipped here, and that's on us."],
 resolution: ["Please call {phone} and ask for {manager}, or email {email}, so we can sort this out.", "Reach out at {email} with your job date and we'll review it right away.", "We'd like to come back and fix the {service} if the work was ours.", "If we got something wrong, we'll correct it."],
 closing: ["Thank you for giving us the chance to respond.", "We hope to hear from you.", "We appreciate you letting us know.", "We will follow up as soon as we hear from you."]
}};
const rows = []; let n = 1;
for (const s of Object.keys(T)) for (const slot of Object.keys(T[s])) for (const p of T[s][slot]) rows.push({ id: 'P' + String(n++).padStart(3, '0'), sentiment: s, slot, phrase: p });
const esc = (v) => '"' + String(v).replace(/"/g, '""') + '"';
const fs = require('fs');
fs.writeFileSync(__dirname + '/phrases.csv', 'id,sentiment,slot,phrase\n' + rows.map((r) => [r.id, r.sentiment, r.slot, esc(r.phrase)].join(',')).join('\n') + '\n');
fs.writeFileSync(__dirname + '/phrases.json', '[\n' + rows.map((r) => '  ' + JSON.stringify(r)).join(',\n') + '\n]\n');
console.log(rows.length + ' phrases');
