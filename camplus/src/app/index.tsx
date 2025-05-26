import { SafeAreaView, View } from 'react-native'
import React from 'react'
import Main from '@/components/custom_tags/Main'
import Section from '@/components/custom_tags/Section'
import Text from '@/components/custom_tags/Text'
import Line from '@/components/Line'

const index = () => {
  return (
    <SafeAreaView>
      <Main className=''>
        <Section>
          <View>
            <Text className='' type='heading'>hello</Text>
            <Text type='para' className=' paragraph'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, est.</Text>
            <Line/>
          </View>
        </Section>
      </Main>
    </SafeAreaView>
  )
}

export default index