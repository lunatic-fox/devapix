import Code from '@/app/components/Code'
import Table from '@/app/components/Table'
import Docs from '@/app/docs/components/Docs'
import ReqResExample from '@/app/docs/components/ReqResExample'

export default function Page() {
  return (
    <Docs title='Ways of use: devicon.js'>
      <p>
        To use <Code ic='<devicon>' /> tag with pure JavaScript you just need to add Devapix <Code ic='script' /> into your <Code ic='.html' /> file.
      </p>
      <Code
        h='html'
        c='<script src="https://devapix.vercel.app/js/devicon.js"></script>' />
      <p>
        Let's take a look at an example.
      </p>
      <h5>index.html</h5>
      <Code
        h='html'
        c={`
        <html>
          <head>
            <meta charset="UTF-8">
            <title>Document</title>
          </head>
          <script src="https://devapix.vercel.app/js/devicon.js"></script>
          <body>
            <devicon icon="csharp"/>
          </body>
        </html>
      `} />
      <p>
        Note that <Code ic='<script>' /> is inserted before <Code ic='<body>' /> and <Code ic='<devicon>' /> is inside <Code ic='<body>' />.
      </p>
      <p>
        <Code ic='devicon.js' /> script allows <Code ic='<devicon>' /> tag to work properly and convert it, when the page is loaded, to an <Code ic='<img>' /> with the proper API request in its <Code ic='src' /> attribute.
      </p>
      <h4>Example</h4>
      <h5>index.html &lt;body&gt; - Code</h5>
      <Code
        h='html'
        c={`
        <body>
          <devicon icon="csharp"/>
        </body>
      `} />
      <h5>index.html &lt;body&gt; - After page loads</h5>
      <Code
        h='html'
        c={`
        <body>
          <img src="https://devapix.vercel.app/api?csharp"/>
        </body>
      `} />
      <ReqResExample title={false} reqs={['csharp']} />
      <p>
        The properties expected by <Code ic='<devicon>' /> are the same of API request.
      </p>

      <Table header={['Property', 'Value']} rows={[
        ['icon | i (required)', 'string'],
        ['release | r', 'string'],
        ['version | v', 'original | o'],
        ['', '^plain | p'],
        ['', '^line | l'],
        ['', '^original-wordmark | ow'],
        ['', '^plain-wordmark | pw'],
        ['', '^line-wordmark | lw'],
        ['color | c', 'string'],
        ['theme | t', 'dark | d'],
        ['', '^light | l'],
        ['size | s', 'string'],
      ]}/>
      <hr />
      <p>
        Here we have two more examples of <Code ic='<devicon>' /> using the rest of properties.
      </p>
      <h4>Facebook icon</h4>
      <h5>Code</h5>
      <Code
        h='html'
        c={`
        <devicon 
          icon="facebook" 
          release="2.7" 
          version="plain" 
          color="#c7bd2b" 
          size="64"/>
      `} />
      <ReqResExample
        title={false}
        reqs={['facebook&release=2.7&version=plain&color=c7bd2b&size=64']} />
      <hr />
      <h4>ChakraUI icon</h4>
      <h5>Code</h5>
      <Code
        h='html'
        c={`
        <devicon 
          i="chakraui" 
          r="dev" 
          v="o" 
          t="d" 
          s="64"/>
      `} />
      <ReqResExample
        title={false}
        reqs={['chakraui&r=dev&v=o&t=d&s=64']} />
    </Docs>
  )
}
