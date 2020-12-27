import Tabs from '@/components/builder/ModalTabs'
import BackgroundColor from '../shared/BackgroundColor'
import BackgroundStyle from './BackgroundStyle'
import DividerColor from './DividerColor'
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
            component: (
                <div className="space-y-6">
                    <DividerColor position="top" />
                </div>
            ),
        },
        {
            title: 'Bottom Divider',
            component: (
                <div className="space-y-6">
                    <DividerColor position="bottom" />
                </div>
            ),
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
