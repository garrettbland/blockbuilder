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
                <div className="space-y-6">
                    <TextContent />
                    <TextAlignment />
                </div>
            ),
        },
        {
            title: 'Color',
            component: <TextColor />,
        },
        {
            title: 'Font',
            component: (
                <div className="space-y-6">
                    <FontWeight />
                    <FontSize />
                    <LineHeight />
                </div>
            ),
        },
        {
            title: 'Spacing',
            component: (
                <div className="space-y-6">
                    <MarginTop />
                    <MarginBottom />
                </div>
            ),
        },
    ]

    return <Tabs tabComponents={tabComponents} />
}

export default TextEdit
