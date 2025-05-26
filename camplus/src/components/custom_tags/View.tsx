import { View as ExtendedView, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'

interface CustomViewProps extends ViewProps{
    children?:ReactNode,
    className:string,
}

const View = ({children,className,...otherProps}:CustomViewProps) => {
  return (
    <ExtendedView className={`${className}`}>
        {children}
    </ExtendedView>
  )
}

export default View