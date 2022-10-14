import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

//Configurações globais por componente
export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
        <TextInput.Icon>
          <Envelope/>
        </TextInput.Icon>,
        <TextInput.Input placeholder='Type you e-mail'/>
    ],
  },
  argTypes:{
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TextInputRootProps>

//Configurações por variação
export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type you e-mail'/>
  }
}
