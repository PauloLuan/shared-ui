const { capitalize, camelCase } = require('lodash')

module.exports = (plop) => {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })

  plop.setGenerator('package', {
    description: 'Create a package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter package name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this package:'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'package/**',
        destination: `../packages/{{dashCase componentName}}`,
        base: 'package/',
        abortOnFail: true
      }
    ]
  }),
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/component/index.ts.hbs'
        },
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{kebabCase name}}.spec.tsx',
          templateFile: 'templates/component/example.spec.tsx.hbs'
        },
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{kebabCase name}}.e2e.tsx',
          templateFile: 'templates/component/example.e2e.tsx.hbs'
        },
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{kebabCase name}}.stories.tsx',
          templateFile: 'templates/component/example.stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{kebabCase name}}.styles.ts',
          templateFile: 'templates/component/example.styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../packages/shared-ui/src/lib/components/{{pascalCase name}}/{{kebabCase name}}.component.tsx',
          templateFile: 'templates/component/example.component.tsx.hbs'
        },
        {
          type: 'append',
          path: '../packages/shared-ui/src/index.ts',
          pattern: `/* PLOP_INJECT_EXPORT_COMPONENT */`,
          template: `export * from './lib/components/{{pascalCase name}}'`
        }
      ]
    })
}
