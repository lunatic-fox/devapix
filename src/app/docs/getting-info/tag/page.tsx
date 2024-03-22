import Code from '@/components/Code'
import Docs from '@/components/Docs'
import ReqResExample from '@/components/ReqResExample'

export default function Page() {
  return (
    <Docs
      refs={{
        previousDoc: {
          link: '/docs/getting-info/icon',
          label: 'Getting info: Icon'
        },
        currentDoc: '/docs/getting-info/tag',
        nextDoc: {
          link: '/docs/ways-of-use/img',
          label: 'Ways of use: <img>'
        }
      }}>
      <h2>
        Getting Info: Tag
      </h2>
      <p>
        <Code ic='tag' /> property allows access to a list of icon names that have the same searched tag value in their <Code ic='tags' /> array of <Code ic='devicon.json' /> file.
      </p>
      <Code c='@[connector]/info?tag=[TAG]' />
      <ReqResExample reqs={[
        {
          request: 'info?tag=language',
          code: `
            {
              "tag": "language",
              "icons": [
                "aarch64",
                "antdesign",
                "apl",
                "awk",
                "bun",
                "c",
                "carbon",
                "ceylon",
                "clarity",
                "clojure",
                "clojurescript",
                "coffeescript",
                "cplusplus",
                "crystal",
                "csharp",
                "css3",
                "dart",
                "elixir",
                "embeddedc",
                "fortran",
                "fsharp",
                "go",
                "graphql",
                "groovy",
                "haskell",
                "haxe",
                "html5",
                "java",
                "javascript",
                "jetpackcompose",
                "jule",
                "julia",
                "jupyter",
                "kotlin",
                "labview",
                "lua",
                "markdown",
                "matlab",
                "mysql",
                "nodejs",
                "objectivec",
                "ocaml",
                "ohmyzsh",
                "opencl",
                "perl",
                "php",
                "prolog",
                "python",
                "r",
                "rect",
                "ruby",
                "rust",
                "scala",
                "sequelize",
                "solidity",
                "swift",
                "typescript",
                "unifiedmodelinglanguage",
                "vala",
                "visualbasic",
                "vyper",
                "wasm",
                "xml",
                "yaml",
                "zig"
              ]
            }
          `
        }
      ]} />
    </Docs>
  )
}
