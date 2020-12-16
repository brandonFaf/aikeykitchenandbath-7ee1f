export default {
  title: 'Photo',
  name: 'photo',
  type: 'image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true // <-- make this field easily accessible
      }
    }
  ]
};
