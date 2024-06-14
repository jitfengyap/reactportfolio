import { defineType, defineField } from 'sanity'

export const testimonials = defineType ({
    type: 'document',
    name: 'testimonials',
    title: 'Testimonials',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),
        defineField({
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }),
    ]
})