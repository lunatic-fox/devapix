type PartialProps = {
  /** Icon version. */
  version?:
    'o'  | 'original'
  | 'p'  | 'plain'
  | 'l'  | 'line'
  | 'ow' | 'original-wordmark'
  | 'pw' | 'plain-wordmark'
  | 'lw' | 'line-wordmark',
  
  /** Hexadecimal or CSS color string. */
  color?: string

  /** Background theme of where the icon going to be placed. */
  theme?: 'd' | 'dark' | 'l' | 'light'

  /** Icon size in pixels. */
  size?: number
}

export default PartialProps
