import { defineSchema } from 'tinacms';

export const schema = defineSchema({
  collections: [
    {
      label: 'Articles',
      name: 'post',
      path: 'posts',
      format: 'mdx',
      ui: {
        router: ({ document }) => {
          return `/blog/${document._sys.filename}`;
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
        },
        {
          type: 'string',
          label: 'Date',
          name: 'date',
        },
        {
          type: 'string',
          label: 'Link (Deezer, Spotify, Youtube, Apple Music...)',
          name: 'link',
        },
        {
          type: 'string',
          label: 'Tags',
          name: 'tags',
        },
        {
          type: 'image',
          label: 'Image URL',
          name: 'imageUrl',
          

          // // Generate the src attribute for the preview image.
          // previewSrc: (fullSrc) => fullSrc.replace('/public', ''),
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          templates: [
            {
              name: 'Quote',
              label: 'Quote',
              fields: [
                {
                  type: 'string',
                  name: 'content',
                  label: 'Content',
                },
                {
                  type: 'string',
                  name: 'author',
                  label: 'Author',
                },
                {
                  type: 'string',
                  name: 'cite',
                  label: 'Cite',
                },
              ],
            },
            {
              name: 'ArticleImage',
              label: 'ArticleImage',
              fields: [
                {
                  type: 'image',
                  name: 'src',
                  label: 'Src',
                },
                {
                  type: 'string',
                  name: 'caption',
                  label: 'Caption',
                },
              ],
            },
            {
              name: 'Code',
              label: 'Code',
              fields: [
                {
                  type: 'string',
                  name: 'code',
                  label: 'Code',
                  ui: {
                    component: 'textarea',
                  },
                },
                {
                  type: 'string',
                  name: 'language',
                  label: 'Language',
                  options: [
                    'markup',
                    'bash',
                    'clike',
                    'c',
                    'cpp',
                    'css',
                    'javascript',
                    'jsx',
                    'coffeescript',
                    'actionscript',
                    'css-extr',
                    'diff',
                    'git',
                    'go',
                    'graphql',
                    'handlebars',
                    'json',
                    'less',
                    'makefile',
                    'markdown',
                    'objectivec',
                    'ocaml',
                    'python',
                    'reason',
                    'sass',
                    'scss',
                    'sql',
                    'stylus',
                    'tsx',
                    'typescript',
                    'wasm',
                    'yaml',
                  ],
                },
                {
                  type: 'string',
                  name: 'selectedLines',
                  label: 'Selected Lines',
                  description: 'Comma separated list of line numbers',
                },
                {
                  type: 'boolean',
                  name: 'withCopyButton',
                  label: 'With Copy Button',
                },
                {
                  type: 'boolean',
                  name: 'withLineNumbers',
                  label: 'With Line Numbers',
                },
                {
                  type: 'string',
                  name: 'caption',
                  label: 'Caption',
                },
              ],
            },
            {
              name: 'br',
              label: 'BR',
              inline: true,
              fields: [{ type: 'rich-text', name: 'children', label: 'Content' }],
            },
          ],
        },
      ],
    },
  ],
});