import React from 'react'
import { ButtonProps as BootstrapButtonProps } from 'react-bootstrap/Button'

import * as S from './button.styles'

export interface ButtonProps extends BootstrapButtonProps {
  testId?: string
}

export const Button = ({
  testId = 'eparts-button-id',
  ...props
}: ButtonProps) => {
  return <S.Button data-testid={testId} {...props} />
}
