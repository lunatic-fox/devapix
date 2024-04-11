import Code from '@/app/components/Code'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Getting Info: Tag'>
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
