// Category Schema
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            description: 'A brief description of this category',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Optional accent color for the category (hex code)',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
