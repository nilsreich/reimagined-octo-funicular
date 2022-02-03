import React from 'react';
import { Stack, Text, Pivot, PivotItem, Label, IconButton, PrimaryButton } from '@fluentui/react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';
import { ThemeProvider, SharedColors, NeutralColors } from '@fluentui/react/lib/Theme';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';

initializeIcons();
const MyIcon = () => <Icon iconName="Video" />;

const navStyles: Partial<INavStyles> = {
  root: {
    width: 'clamp(150px, 20vw, 300px)',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Dashboard',
        url: 'http://example.com',
        key: 'key1',
        isExpanded: true,
        target: '_blank',
      },
      {
        name: 'Students',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Nils Reich',
            url: 'http://msn.com',
            key: 'key2',
            target: '_blank',
          },
          {
            name: 'Jasmin Boecher',
            url: 'http://msn.com',
            key: 'key3',
            target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Courses',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank',
      },
      {
        name: 'Worksheets',
        url: 'http://msn.com',
        key: 'key5',
        disabled: true,
      },
      {
        name: 'Archive',
        url: 'http://msn.com',
        key: 'key6',
        target: '_blank',
      },
    ],
  },
];

export const App: React.FunctionComponent = () => {

  return (
    <>
      <Stack horizontal style={{ height: 'calc(100% - 24px)' }}>
        <Stack.Item verticalFill>
          <Nav
            onLinkClick={_onLinkClick}
            selectedKey="key2"
            ariaLabel="Nav basic example"
            styles={navStyles}
            groups={navLinkGroups}
          />      </Stack.Item>
        <Stack.Item grow style={{ backgroundColor: NeutralColors.gray10, padding: 36 }}>
          <div >
            <Text variant='mega' >Nils Reich</Text>
            <div style={{ paddingBottom: 24 }}>
              <PrimaryButton text="Start Session" />
            </div>
            <Pivot aria-label="Basic Pivot Example">
              <PivotItem
                headerText="Recent"
                headerButtonProps={{
                  'data-order': 1,
                  'data-title': 'Recent',
                }}
              >
                <Label>Pivot #1</Label>
              </PivotItem>
              <PivotItem headerText="Exercises">
                <Label>Pivot #2</Label>
              </PivotItem>
              <PivotItem headerText="Settings">
                <Label>Pivot #3</Label>
              </PivotItem>
            </Pivot>
          </div>
        </Stack.Item>

      </Stack>
      <Stack horizontal horizontalAlign="space-between" verticalAlign="center" style={{ padding: 0, backgroundColor: SharedColors.cyanBlue10, height: 24 }}>
        <Text variant="small" style={{ color: 'white' }}>Settings</Text>
        <div>
          <Stack horizontal style={{ padding: 0, backgroundColor: SharedColors.red10}}>
          <Text variant="small" style={{ color: 'white' }}>10:04</Text>
            
          <Stack.Item verticalFill>

<Text variant="small" style={{ color: 'white' }}>Live</Text>
</Stack.Item>
          </Stack>

        </div>
      </Stack>
    </>
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}