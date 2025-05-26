import { View as ExtendedView, Text, ViewProps } from 'react-native'
import React from 'react'

interface MainProps extends ViewProps{
    children?: React.ReactNode;
    className?: string;
}

const Main = ({children,className}:MainProps) => {
  return (
    <ExtendedView className={`${className} main`}>
        {children}
    </ExtendedView>
  )
}

export default Main