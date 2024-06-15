import { defineType, defineField, defineArrayMember } from 'sanity'

export const works = defineType ({
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string'
        }),
        defineField({
            name: 'projectLink',
            title: 'Project Link',
            type: 'string'
        }),
        defineField({
            name: 'codeLink',
            title: 'Code Link',
            type: 'string'
        }),
        defineField({
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            type: "array",
            name: "tags",
            title: "Tags",
            options: { layout: "tags" },
            of: [
              defineArrayMember({
                type: "string",
              }),
            ],
          }),
    ]
})