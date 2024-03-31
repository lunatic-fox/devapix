/**
@param {{
  icon: string
  projectVersion?: string
  version?:
    'o'  | 'original'
  | 'p'  | 'plain'
  | 'l'  | 'line'
  | 'ow' | 'original-wordmark'
  | 'pw' | 'plain-wordmark'
  | 'lw' | 'line-wordmark'
  color?: string
  theme?: 'd' | 'dark' | 'l' | 'light'
  size?: number
}} */
export default function Devicon({ icon, projectVersion, version, color, theme, size }) {
  return <img src={`http://devapix.vercel.app/api?${
    [
      icon,
      projectVersion && `pv=${projectVersion}`,
      version && `v=${version}`,
      color && `c=${color.replace(/#/, '')}`,
      theme && `t=${theme}`,
      size && `s=${size}`
    ].filter(e => e).join('&')
  }`}/>
}
