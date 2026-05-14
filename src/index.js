import './styles/tailwind.css'
import store from '@/redux/store'

// Export main components and store for library usage
export { default as Builder } from '@/components/builder/Builder'
export { default as store } from '@/redux/store'
export { Provider } from 'react-redux'

export default {
    Builder: require('@/components/builder/Builder').default,
    store,
}
