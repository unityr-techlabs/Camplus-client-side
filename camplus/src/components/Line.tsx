import { View, Text } from 'react-native'
import React from 'react'

interface LineProps {
    className?: string;
}
const Line = ({className}:LineProps) => {
  return (
    <View className={`${className} bg-slate-100 dark:bg-para-default/25 w-full p-[.5px]`}/>
  )
}

export default Line