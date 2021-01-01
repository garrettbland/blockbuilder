import { v4 as uuidv4 } from 'uuid'

export const defaultBlocks = (type, columns) => {
    const defaultTypes = {
        section: {
            id: uuidv4(),
            type: 'section',
            tag: 'section',
            classList: ['relative', 'pt-12', 'pb-12'],
            data: [],
        },
        sectionBackground: {
            id: uuidv4(),
            type: 'section-background',
            tag: 'div',
            classList: ['absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-cover', 'bg-center'],
            data: {
                degree: 180,
                gradient_type: `linear`,
                color_start: `rgba(255, 255, 255, 0.5)`,
                color_end: `rgba(255, 255, 255, 0.5)`,
                blur: 0,
                src:
                    'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            },
        },
        sectionDividerTop: {
            id: uuidv4(),
            type: 'section-divider-top',
            tag: 'div',
            classList: ['absolute', 'top-0', 'left-0', 'w-full', 'h-64', 'text-red-500'],
            data: {
                shape: 'default',
            },
        },
        sectionDividerBottom: {
            id: uuidv4(),
            type: 'section-divider-bottom',
            tag: 'div',
            classList: ['absolute', 'bottom-0', 'left-0', 'w-full', 'h-64', 'text-red-500'],
            data: {
                shape: 'default',
            },
        },
        row: {
            id: uuidv4(),
            type: 'row',
            tag: 'div',
            classList: [
                'max-w-4xl',
                'mx-auto',
                'grid',
                `grid-cols-1`,
                `md:grid-cols-${columns}`,
                'gap-8',
                'relative',
                'z-40',
                'px-8',
                'pt-8',
                'pb-8',
            ],
            data: [...Array(columns)].map(() => {
                return {
                    id: uuidv4(),
                    type: `column`,
                    tag: `div`,
                    classList: [`col-span-1`],
                    data: [],
                }
            }),
        },
        text: {
            id: uuidv4(),
            type: 'text',
            tag: 'p',
            classList: ['text-black', 'text-md'],
            data: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            text:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        },
                    ],
                },
            ],
        },
        img: {
            id: uuidv4(),
            type: 'image',
            tag: 'img',
            classList: ['w-full'],
            data: {
                src:
                    'https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                alt: 'Highway Photo',
            },
        },
        link: {
            id: uuidv4(),
            type: 'link',
            tag: 'a',
            classList: ['px-4', 'py-2', 'bg-green-500', 'text-white', 'rounded', 'inline-block'],
            data: {
                target: '_self',
                href: '#',
                title: 'Try Today',
            },
        },
    }

    return defaultTypes[type]
}
