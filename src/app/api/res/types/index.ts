export type RequestObject = {
  /** Release */ r?: string
  /** Icon    */ i?: string
  /** Version */ v?: string
  /** Color   */ c?: string
  /** Theme   */ t?: string
  /** Size    */ s?: number
  /** Tag     */ tag?: string
}

export type DJson = {
  name: string
  altnames: string[]
  tags: string[]
  versions: { svg: string[], font: string[] }
  vFlat: string[]
  color: string
  aliases: { base: string, alias: string }[]
}

export type DeviconFiles = { json?: DJson[] }
