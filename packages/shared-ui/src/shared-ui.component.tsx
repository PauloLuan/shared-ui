import * as S from './shared-ui.styles'
import React from 'react'

export interface SharedUiProps {
  testId?: string
}

export const SharedUi = ({
  testId = 'pauloluan-example-id',
  ...props
}: SharedUiProps) => {
  return (
    <S.Example data-testid={testId} {...props}>
      This is a sample
    </S.Example>
  )
}
