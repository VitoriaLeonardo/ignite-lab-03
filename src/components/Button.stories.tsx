import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button'

//Configurações globais por componente
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes:{}
} as Meta<ButtonProps>

//Configurações por variação
export const Default: StoryObj<ButtonProps> = {}
