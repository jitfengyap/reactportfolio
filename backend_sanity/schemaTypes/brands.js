import { defineType, defineField } from 'sanity'

export const brands = defineType ({
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        defineField({
            name: 'imgURL',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            },
        },
    ),        
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
    ]
})