import Tabs from '@/components/builder/ModalTabs'
import BackgroundColor from '../shared/BackgroundColor'
import BackgroundStyle from './BackgroundStyle'
import Divider from './Divider'

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
            title: 'Divider',
            component: <Divider />,
        },
    ]
    return <Tabs tabComponents={tabComponents} />
}

export default SectionEdit
