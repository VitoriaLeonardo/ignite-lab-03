import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'

//Configurações globais por componente
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Create account',
    size: 'md'
  },
  argTypes:{}
} as Meta<TextProps>

//Configurações por variação
export const Default: StoryObj<TextProps> = {}
