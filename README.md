# The World — Friday, 13 November 2026

An entry for make.fun's "Sum up 13 November's world news in one image" bounty.

The image is a newspaper front page. The masthead reads "THE WORLD" and the
date line is Friday, 13 November 2026. It sums up the day in five stories,
each checked against live news sources on 13 November 2026:

1. **Europe to join Ukraine peace talks.** US envoys Steve Witkoff and Jared
   Kushner meet Vladimir Putin in Moscow, then Volodymyr Zelenskyy in Dublin.
   A prisoner exchange under discussion could be the largest of the war.
2. **Nvidia chief Jensen Huang resigns.** CFO Colette Kress takes over as
   interim CEO, and Nvidia shares fell sharply on the news.
3. **Microsoft 365 down around the world.** Outlook, Teams and Copilot fail
   for a second day, with more than 130,000 outage reports across 74 countries.
4. **Strike hits Nasser Hospital, six killed.** A surgeon and a 13-year-old
   boy are among the dead in Khan Younis.
5. **Also today.** Iran reports tankers hit in the Strait of Hormuz, as
   Donald Trump says the US needs no Iran deal; the FBI says North Korean
   hackers stole $400 million in crypto using deepfake video calls.

Every story was verified against live news sources on 13 November 2026. All
text is set in real fonts, so nothing is garbled, and the pictures are
AI-generated editorial illustrations made for this front page.

## How it works

`main.ts` copies the bundled image `entry.png` byte for byte into the
output directory and then reads the copy back to check it matches. If the
bytes differ, the program fails. Every run therefore produces identical
output.

## Files

- `main.ts` — the program (the entrypoint). It copies and verifies the image.
- `entry.png` — the picture: the front page itself.
