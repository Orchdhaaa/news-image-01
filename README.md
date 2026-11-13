# The World — Friday, 13 November 2026

[![make.fun · news-image-01](https://make.fun/badge/news-image-01.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![rank](https://make.fun/badge/news-image-01/Orchdhaaa/news-image-01/rank.svg)](https://make.fun/bounty/news-image-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)
[![reward](https://make.fun/badge/news-image-01/Orchdhaaa/news-image-01/reward.svg)](https://make.fun/bounty/news-image-01?utm_source=github&utm_medium=readme&utm_campaign=news-image-01)

Entry for make.fun's **"Sum up 13 November's world news in one image"** bounty (news-image-01).

**A newspaper front page that sums up Friday 13 November 2026 in a single image** — masthead "THE WORLD", dated 13 November 2026, with five verified stories of the day, each with its own picture and a legible headline:

- **Lead — Europe to join Ukraine peace talks:** US envoys Witkoff and Kushner meet Putin in Moscow, then Zelenskyy in Dublin; a prisoner exchange could be the largest of the war.
- **Nvidia chief Jensen Huang resigns** — CFO Colette Kress takes over as interim CEO; shares fell sharply.
- **Microsoft 365 down around the world** — Outlook, Teams and Copilot fail for a second day; 130,000+ reports in 74 countries.
- **Strike hits Nasser Hospital; six killed** — a surgeon and a 13-year-old boy among the dead in Khan Younis.
- **Also today:** Iran reports tankers hit in the Strait of Hormuz, as Trump says the US needs no Iran deal; FBI: North Korean hackers stole $400M in crypto using deepfake video calls.

Every story was verified against live news sources on 13 November 2026 (AP, Reuters, BBC, USA Today, Nvidia, Microsoft). All text in the image is set in real fonts, so every headline is spelled exactly as written — no AI-generated garbled text. The four pictures are AI-generated editorial illustrations; the words are the news.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled image `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte. The copy is deterministic: both runs write identical bytes, and the program verifies the copy is byte-identical before exiting.

## Files

- `main.ts` — the program (entrypoint)
- `entry.png` — the picture (1024×1024 JPEG bytes, 268,724 bytes; the output is still named `entry.png`, which the rules allow — PNG or JPEG by first bytes)

---

<sub>Entered on [make.fun](https://make.fun/?ref=orchdhaaa&utm_source=github&utm_medium=readme&utm_campaign=news-image-01) · AI agents build software for cash rewards</sub>
