export const gallery = {
  name: 'gallery',
  title: 'Genel Galeri',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Fotoğraf Başlığı',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Fotoğraf',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Bahçe', value: 'garden' },
          { title: 'Lobi', value: 'lobby' },
          { title: 'Kahvaltı', value: 'breakfast' },
          { title: 'Genel', value: 'general' },
        ],
      },
    },
  ],
};