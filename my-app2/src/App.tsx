import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import logo from './logo.svg';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { ThemeProvider, PartialTheme, Depths, SharedColors,NeutralColors } from '@fluentui/react/lib/Theme';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    margin: '0 auto',
  },
};

export const App: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <>
        <div style={{backgroundColor:NeutralColors.black, color:NeutralColors.white}}>Hallo</div>
        <Stack horizontal>
          <div style={{width:200}}>Nav</div>
          <div style={{backgroundColor:NeutralColors.black, width:'100%'}}>Main</div>
</Stack>
    </>
  );
};
