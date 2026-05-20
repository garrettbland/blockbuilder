import { OutputBlockData } from '@editorjs/editorjs'

export const textRenderer = (blocks: OutputBlockData[]) => {
    return blocks.map((block) => {
        switch (block.type) {
            case 'paragraph':
                return <p dangerouslySetInnerHTML={{ __html: block.data.text }}></p>
            case 'header':
                return <h1 dangerouslySetInnerHTML={{ __html: block.data.text }}></h1>
            case 'list':
                if (block.data.type === 'unordered') {
                    return (
                        <ul>
                            {block.data.items.map((item: string, index: number) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    )
                } else {
                    return (
                        <ol>
                            {block.data.items.map((item: string, index: number) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ol>
                    )
                }

            default:
                return <div>Unsupported block type: {block.type}</div>
        }
    })
}
