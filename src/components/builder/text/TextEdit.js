import Tabs from '@/components/builder/ModalTabs'
import TextContent from './TextContent'
import TextColor from '../shared/TextColor'
import TextAlignment from './TextAlignment'
import FontWeight from '../shared/FontWeight'
import FontSize from '../shared/FontSize'
import LineHeight from './LineHeight'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'

const TextEdit = () => {
    const tabComponents = [
        {
            title: 'Content',
            component: (
                <>
                    <TextContent />
                    <TextAlignment />
                </>
            ),
        },
        {
            title: 'Color',
            component: <TextColor />,
        },
        {
            title: 'Font',
            component: (
                <>
                    <FontWeight />
                    <FontSize />
                    <LineHeight />
                </>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <>
                    <MarginTop />
                    <MarginBottom />
                </>
            ),
        },
    ]

    return <Tabs tabComponents={tabComponents} />
}

export default TextEdit
