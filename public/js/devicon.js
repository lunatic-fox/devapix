window.addEventListener('load', () => {
  document.body.innerHTML.match(/<devicon.+?>/g)
  .forEach(e => {
    document.body.innerHTML = document.body.innerHTML.replace(e, `<img src="http://devapix.vercel.app/api?${
      e.replace(/<devicon(.+?)>/, '$1')
      .replace(/"|#/g, '')
      .trim()
      .replace(/i(con)?=/, '')
      .split(' ')
      .join('&')
    }"/>`)
  })
})