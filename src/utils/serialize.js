import { Warning } from 'postcss'
import { html } from 'common-tags'

export const SerializeToHtml = (blocks) => {
    /**
     * Takes in blocks array and returns html
     */

    if (!Array.isArray(blocks)) {
        throw new Warning(`'blocks' parameter must be an Array`)
    }

    return blocks
        .map((block) => {
            switch (block.type) {
                case 'section': {
                    return Section(block)
                }
                case 'section-background': {
                    return SectionBackground(block)
                }
                case 'section-divider-top': {
                    return SectionStyle(block)
                }
                case 'section-divider-bottom': {
                    return SectionStyle(block)
                }
                case 'row': {
                    return Row(block)
                }
                case 'column': {
                    return Column(block)
                }
                case 'text': {
                    return Text(block)
                }
                case 'image': {
                    return Image(block)
                }
                case 'link': {
                    return Link(block)
                }
            }
        })
        .join('')
}

const Section = (block) => {
    return html`
        <section class="${block.classList.join(' ')}">
            ${block.data.length > 0 ? SerializeToHtml(block.data) : ''}
        </section>
    `
}

const SectionBackground = (block) => {
    const generateGradientStyle = () => {
        if (block.data.gradient_type === 'linear') {
            return `background-image: linear-gradient(${block.data.degree}deg, ${block.data.color_start}, ${block.data.color_end}),url('${block.data.src}');`
        } else if (block.data.gradient_type === 'radial') {
            return `background-image: radial-gradient(circle at center, ${block.data.color_start}, ${block.data.color_end}),url('${block.data.src}');`
        }
    }

    const generateBlurStyle = () => {
        if (block.data.blur && block.data.blur > 0) {
            return `filter: blur(${block.data.blur}px);transform: scale(1.${block.data.blur});`
        }
    }

    return html`
        <div
            class="${block.classList.join(' ')}"
            style="${generateGradientStyle()}${block.data.blur ? generateBlurStyle() : ''}"
        ></div>
    `
}

const SectionStyle = (block) => {
    return html`<div class="${block.classList.join(' ')}"></div>`
}

const Row = (block) => {
    if (Array.isArray(block.data) && block.data.length > 0) {
        return html`
            <div class="${block.classList.join(' ')}">${SerializeToHtml(block.data)}</div>
        `
    }
}

const Column = (block) => {
    if (Array.isArray(block.data) && block.data.length > 0) {
        return html`
            <div class="${block.classList.join(' ')}">${SerializeToHtml(block.data)}</div>
        `
    }
}

const Text = (block) => {
    return html`<div class="${block.classList.join(' ')}">${SerializeSlate(block)}</div>`
}

const Image = (block) => {
    return html`
        <img class="${block.classList.join(' ')}" src="${block.data.src}" alt="${block.data.alt}" />
    `
}

const Link = (block) => {
    return html`
        <div class="flex">
            <a
                class="${block.classList.join(' ')}"
                href="${block.data.href}"
                target="${block.data.target}"
            >
                ${block.data.title}
            </a>
        </div>
    `
}

const SerializeSlate = (block) => {
    const htmlstring = block.content.data
        .map((item, index) => {
            if (item.type === 'paragraph') {
                return html`
                    <p>
                        ${item.children.map((child) => {
                            if (child.type === 'link') {
                                return html`
                                    <a href="${child.url}">
                                        ${child.children.map((linkChild) => {
                                            return html`<span
                                                class="${linkChild?.underline
                                                    ? 'underline'
                                                    : ''} ${linkChild?.italic
                                                    ? 'italic'
                                                    : ''} ${linkChild?.bold ? 'font-bold' : ''}"
                                                >${linkChild.text}</span
                                            >`
                                        })}
                                    </a>
                                `
                            } else {
                                if (child.text === '') {
                                    return html`<br />`
                                }

                                return html`<span
                                    class="${child?.underline ? 'underline' : ''} ${child?.italic
                                        ? 'italic'
                                        : ''} ${child?.bold ? 'font-bold' : ''}"
                                    >${child.text}</span
                                >`
                            }
                        })}
                    </p>
                `
            }
        })
        .join('')

    return htmlstring
}
