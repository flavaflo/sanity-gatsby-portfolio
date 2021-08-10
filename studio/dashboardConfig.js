export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61128a4e4578ec31998f25b5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nkhurt7f',
                  apiId: '65e91cee-93bd-482e-8256-f7c91420fc54'
                },
                {
                  buildHookId: '61128a4e36ed452fc17321d9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-59uuxk9p',
                  apiId: 'c0065a0b-297e-4bc9-8ab3-3dc93b7725c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flavaflo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-59uuxk9p.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
