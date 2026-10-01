# Review Sentiment Phrase Bank

Open dataset (MIT) of reusable phrase building blocks for replying to Google reviews, tagged by sentiment (positive / neutral / negative) and slot (opening / body / resolution / closing). Placeholders: `{name} {service} {business} {phone} {email} {manager} {team_member}`.

- `phrases.csv`, `phrases.json` — the data (regenerate with `node build.js`)
- `compose.js` — tiny example: `node compose.js negative Sam "AC repair" "Acme HVAC" 903-555-0100`
- `npm test` / `node --test test`

Rules baked in: no promises of refunds or guarantees, no admission of fault you can't verify, always move the conversation offline. Always edit to sound like you and to match what actually happened.

This is the free sample. A larger Pro bank (100+ replies for specific trades and clinics) is available — email tommytbomar@gmail.com with subject `WANT REVIEW BANK`.

See [SUPPORT.md](SUPPORT.md) for the optional $125 support session. License: MIT.
