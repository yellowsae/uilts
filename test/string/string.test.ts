import { describe, expect, it } from 'vitest'
import { randomStr } from '../../src/string/base'

describe('string test', () => {
  it('randomStr', () => {
    const id = randomStr(16)

    expect(id.length).toBe(16)
    // expect(id).toMatchInlineSnapshot('"rkb9xsUlAeVUaeG3"')
  })
})
