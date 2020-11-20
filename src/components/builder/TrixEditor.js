import Trix from 'trix'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'

const ReactTrixRTEInput = (props) => {
    const {
        defaultValue = '',
        toolbarId,
        onBlur,
        onFocus,
        onChange,
        onInitialize,
        onSelectionChange,
        onBeforeInitialize,
        trixInputRef,
        placeholder,
        autofocus,
    } = props
    const trixRTEInputRef = trixInputRef ? trixInputRef : useRef()
    const [value, setValue] = useState(defaultValue)
    const uniqueDateTimestamp = new Date().getTime()
    const trixRTEInputId = `react-trix-rte-input-${uniqueDateTimestamp}`
    let trixEditorOptions = {}
    if (autofocus) trixEditorOptions['autofocus'] = true

    useEffect(() => {
        trixRTEInputRef.current.addEventListener('trix-change', handleChange)
        if (onFocus) trixRTEInputRef.current.addEventListener('trix-focus', onFocus)
        if (onBlur) trixRTEInputRef.current.addEventListener('trix-blur', onBlur)
        if (onInitialize) trixRTEInputRef.current.addEventListener('trix-initialize', onInitialize)
        if (onSelectionChange)
            trixRTEInputRef.current.addEventListener('trix-selection-change', onSelectionChange)
        if (onBeforeInitialize)
            trixRTEInputRef.current.addEventListener('trix-before-initialize', onBeforeInitialize)

        return () => {
            if (trixRTEInputRef.current) {
                trixRTEInputRef.current.removeEventListener('trix-change', handleChange)
            }
            if (onFocus) trixRTEInputRef.current.removeEventListener('trix-focus', onFocus)
            if (onBlur) trixRTEInputRef.current.removeEventListener('trix-blur', onBlur)
            if (onInitialize)
                trixRTEInputRef.current.removeEventListener('trix-initialize', onInitialize)
            if (onSelectionChange)
                trixRTEInputRef.current.removeEventListener(
                    'trix-selection-change',
                    onSelectionChange
                )
            if (onBeforeInitialize)
                trixRTEInputRef.current.removeEventListener(
                    'trix-before-initialize',
                    onBeforeInitialize
                )
        }
    }, [])

    const handleChange = (event) => {
        const newValue = event.target.value
        setValue(newValue)
        if (onChange) {
            onChange(event, newValue)
        }
    }

    return (
        <>
            <input id={trixRTEInputId} value={value} type="hidden" name="content" />
            <trix-editor
                toolbar={toolbarId}
                placeholder={placeholder}
                ref={trixRTEInputRef}
                input={trixRTEInputId}
                {...trixEditorOptions}
            />
        </>
    )
}

ReactTrixRTEInput.propTypes = {
    toolbarId: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onInitialize: PropTypes.func,
    onBeforeInitialize: PropTypes.func,
    trixInputRef: PropTypes.func,
    placeholder: PropTypes.string,
    autofocus: PropTypes.bool,
}

export default ReactTrixRTEInput
