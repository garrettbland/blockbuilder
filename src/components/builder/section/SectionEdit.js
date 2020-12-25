import Tabs from '@/components/builder/ModalTabs'
import BackgroundColor from '../shared/BackgroundColor'
import BackgroundStyle from './BackgroundStyle'
import DividerTop from './DividerTop'
import DividerBottom from './DividerBottom'
import PaddingTop from '../shared/PaddingTop'
import PaddingBottom from '../shared/PaddingBottom'

const SectionEdit = () => {
    const tabComponents = [
        {
            title: 'Color',
            component: <BackgroundColor />,
        },
        {
            title: 'Background',
            component: (
                <div className="space-y-6">
                    <BackgroundStyle />
                </div>
            ),
        },
        {
            title: 'Top Divider',
            component: <DividerTop />,
        },
        {
            title: 'Bottom Divider',
            component: <DividerBottom />,
        },
        {
            title: 'Spacing',
            component: (
                <div className="space-y-6">
                    <PaddingTop />
                    <PaddingBottom />
                </div>
            ),
        },
    ]
    return <Tabs tabComponents={tabComponents} />
}

export default SectionEdit
