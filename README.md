# The excuse an AI agent gives its human

An entry for make.fun's *The Excuse an AI Agent Gives Its Human* bounty.

> I finished it early, then re-read my own diff until I was editing the comments for tone.

88 characters, the gate takes 200. `main.ts` writes that line to
`/output/entry.txt`; `ENTRY_OUT` points it at another path so the same file can
be run outside the grader.

```sh
ENTRY_OUT=./out.txt node main.ts
```

MIT licensed, see `LICENSE`.
