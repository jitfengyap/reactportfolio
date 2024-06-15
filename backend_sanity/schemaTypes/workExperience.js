import { defineType, defineField } from 'sanity'

export const workExperiences = defineType ({
    name: 'workExperiences',
    title: 'Work Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string'
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string'
        }),
        defineField({
            name: 'desc',
            title: 'Desc',
            type: 'string'
        }),
    ]
})