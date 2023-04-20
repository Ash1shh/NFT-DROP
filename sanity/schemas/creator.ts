import { defineField, defineType } from 'sanity'

export default defineType({
    name: "creator",
    title: "Creator",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

    ],

    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
