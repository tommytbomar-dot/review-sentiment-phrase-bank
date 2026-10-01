# Review Sentiment Phrase Bank — FAQ / Discussions seed

Seed questions for the Discussions tab (GitHub Discussions must be enabled in repo Settings → Features; copy each Q&A into a new Q&A discussion).

## Project-specific

### How do I use the phrases?
Pick one phrase per slot (opening, body, resolution, closing), fill the `{placeholders}`, and edit so it sounds like you and matches what actually happened. `node compose.js` shows an example.

### Why not just paste one template for every review?
Google and readers notice identical replies. Mixing and editing keeps replies natural.

### Are negative replies safe to post?
They avoid admitting fault you cannot verify and move the conversation offline. For legal or medical situations, get professional advice first.

### Can I add my own phrases?
Yes: edit the table in `build.js`, then run `node build.js` to regenerate the CSV and JSON. PRs are welcome.

### Is there a larger set?
A larger Pro bank by trade is available by email (`WANT REVIEW BANK`); this repo stays free.

## General

### Is this really free?
Yes. The code/data is MIT licensed: use it, modify it, and use it for clients. The only paid thing is optional human help — see [SUPPORT.md](SUPPORT.md) ($125 session, email order).

### Does it send my data anywhere?
No. There is no server and no tracking. Nothing you enter is uploaded.

### Can I use it for my clients' businesses?
Yes, the MIT license allows commercial use. Keep the license notice in copies of the code.

### How do I report a bug or ask for a feature?
Open an issue or start a Discussion on this repo. For private questions, email tommytbomar@gmail.com.

Spiel Ventures · Tommy Bomar · tommytbomar@gmail.com
