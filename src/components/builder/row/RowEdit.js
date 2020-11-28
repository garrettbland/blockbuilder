import Tabs from '@/components/builder/ModalTabs'
import BorderRadius from '../shared/BorderRadius'
import BoxShadow from '../shared/BoxShadow'
import BackgroundColor from '../shared/BackgroundColor'
import MaxWidth from './MaxWidth'
import BackgroundOpacity from './BackgroundOpacity'
import MarginTop from '../shared/MarginTop'
import MarginBottom from '../shared/MarginBottom'

const RowEdit = () => {
    const tabComponents = [
        {
            title: 'Color',
            component: (
                <>
                    <BackgroundColor />
                    <BackgroundOpacity />
                </>
            ),
        },
        {
            title: 'Width',
            component: <MaxWidth />,
        },
        {
            title: 'Border',
            component: <BorderRadius />,
        },
        {
            title: 'Shadow',
            component: <BoxShadow />,
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

export default RowEdit
