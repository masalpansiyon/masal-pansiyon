// schemaTypes/room.ts
export const room = {
  name: 'room',
  title: 'Odalar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Oda Adı',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Gecelik Başlangıç Fiyatı',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Oda Açıklaması',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Oda Görseli',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'features',
      title: 'Özellikler',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
  name: 'gallery',
  title: 'Oda Galerisi',
  type: 'array',
  of: [{ type: 'image', options: { hotspot: true } }],
  description: 'Odaya ait diğer görselleri buraya ekleyebilirsiniz.'
},
{
  name: 'slug',
  title: 'Sayfa Linki (URL)',
  type: 'slug',
  options: { source: 'title', maxLength: 96 },
  validation: (Rule: any) => Rule.required(),
},
  ],
}