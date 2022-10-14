import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'
//Configurações globais por componente
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes:{},
  decorators: [
    (Story) => {
      return(
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size="sm">Lembrar de mim</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

//Configurações por variação
export const Default: StoryObj<CheckboxProps> = {}
