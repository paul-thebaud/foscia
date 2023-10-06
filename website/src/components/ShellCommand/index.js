import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';

export default function ShellCommand({ command }) {
  const commands = Array.isArray(command) ? command : [command];
  const code = (prefix) => commands.map(
    (c) => (c.startsWith('#') ? c : `${prefix} ${c}`),
  ).join('\n');

  return (
    <Tabs groupId="packageManager">
      <TabItem
        value="npm"
        label="NPM"
        default
      >
        <CodeBlock language="shell">{code('npx')}</CodeBlock>
      </TabItem>
      <TabItem
        value="yarn"
        label="YARN"
      >
        <CodeBlock language="shell">{code('yarn')}</CodeBlock>
      </TabItem>
      <TabItem
        value="pnpm"
        label="PNPM"
      >
        <CodeBlock language="shell">{code('pnpm')}</CodeBlock>
      </TabItem>
      <TabItem
        value="bun"
        label="Bun"
      >
        <CodeBlock language="shell">{code('bun')}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}
