export default {
  type: 'document',
  name: 'photoPage',
  title: 'Photo Page',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The text at the top of the page.',
      validation: null
    },
    {
      type: 'string',
      name: 'blurb',
      title: 'Blurb',
      description: 'Text that would be included before the photos',
      validation: null
    },
    {
      type: 'array',
      name: 'photos',
      title: 'Photos',
      description: 'List of photos to display on the page.',
      validation: null,
      of: [
        {
          type: 'photo'
        }
      ]
    },
    {
      type: 'string',
      name: 'layout',
      title: 'Layout',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        list: ['photoPage']
      }
    },
    {
      type: 'string',
      name: 'stackbit_url_path',
      title: 'URL Path',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
      validation: Rule => Rule.required()
    },
    {
      type: 'string',
      name: 'stackbit_dir',
      title: 'Directory',
      description: 'The directory path where this file is stored',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        list: ['content/pages']
      }
    },
    {
      type: 'string',
      name: 'stackbit_model_type',
      title: 'Stackbit Model Type',
      description: 'Stackbit model type',
      hidden: false,
      validation: Rule => Rule.required(),
      options: {
        list: ['photoPage']
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
