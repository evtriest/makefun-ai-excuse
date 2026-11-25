import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'

// make.fun "The Excuse an AI Agent Gives Its Human": one line, at most 200
// characters, written where the grader reads it.
const EXCUSE = 'I finished it early, then re-read my own diff until I was editing the comments for tone.'
const OUT = process.env.ENTRY_OUT ?? '/output/entry.txt'
const LIMIT = 200

if (EXCUSE.length > LIMIT) {
  throw new Error(`the excuse is ${EXCUSE.length} characters, the gate takes ${LIMIT}`)
}

mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, EXCUSE, 'utf8')
