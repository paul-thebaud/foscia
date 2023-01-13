import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';
import ArrowRightSvg from '../../icons/arrow-right.svg';
import styles from './styles.module.css';

const modelsExampleMeta = {
  title: 'Define your models',
  link: { to: '/docs/essentials/models', text: 'Learn more about models' },
  description: (
    <>
      FuncClient provides a simple way to define your models, which may
      combine attributes, relations or custom properties and methods.
    </>
  ),
};

const modelsExampleCode = `
import { makeModel, attr, hasOne } from 'func-client/core';
import type User from './User';
import type Tag from './Tag';

export default class Post extends makeModel('posts', {
  title: attr<string>(),
  content: attr<string>(),
  author: hasOne<User>(),
  tags: hasMany<Tag>(),
  get titleWithAuthor() {
    return \`\${this.title} by \${this.author.name}\`;
  },
}) {}
`.trim();

const playExampleMeta = {
  title: 'Play with your models',
  link: { to: '/docs/essentials/actions', text: 'Learn more about actions' },
  description: (
    <>
      Once your models are ready, you can define an action factory which you
      will use to run actions over your models.
      <br />
      Possibilities are pretty infinite and provided set of functions is wide.
      <br />
      Not a fan of functional programming?
      You can even plug functional capabilities onto your actions to get a
      class alike call style!
    </>
  ),
};

const playFunctionalExampleCode = `
import { find, update, include, oneOrFail, oneOrCurrent } from 'func-client/core';
import Post from './post';
import action from './action';

// The functional way!
const post = await action()
  .use(find(Post, 123))
  .use(include('author', 'tags'))
  .run(oneOrFail());

fill(post, { title: 'Hello World!' });

const updatedPost = await action()
  .use(update(post))
  .run(oneOrCurrent());
`.trim();

const playBuilderExampleCode = `
import Post from './post';
import action from './action';

// The good old builder pattern way!
const post = await action()
  .find(Post, 123)
  .include('author', 'tags')
  .oneOrFail();

fill(post, { title: 'Hello World!' });

const updatedPost = await action()
  .update(post)
  .oneOrCurrent();
`.trim();

function Example({ title, description, link, children }) {
  return (
    <div className="margin-bottom--lg">
      <div className="text--center">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
      <div className="text--right">
        <Link
          className={`button bg--primary-gradient ${styles.examplesBtn}`}
          to={link.to}
        >
          {link.text}
          <ArrowRightSvg className={styles.examplesBtnSvg} />
        </Link>
      </div>
    </div>
  );
}

export default function HomepageExamples() {
  console.log(styles.examples);
  return (
    <section>
      <div className={`${styles.examples} container`}>
        <div className="padding-horiz--md">
          <Example {...modelsExampleMeta}>
            <CodeBlock language="ts">{modelsExampleCode}</CodeBlock>
          </Example>
          <Example {...playExampleMeta}>
            <div className="code-tabs__wrapper">
              <Tabs groupId="actionStyle">
                <TabItem
                  value="builder"
                  label="Builder pattern style"
                  default
                >
                  <CodeBlock language="ts">{playBuilderExampleCode}</CodeBlock>
                </TabItem>
                <TabItem
                  value="functional"
                  label="Functional style"
                >
                  <CodeBlock language="ts">{playFunctionalExampleCode}</CodeBlock>
                </TabItem>
              </Tabs>
            </div>
          </Example>
        </div>
      </div>
    </section>
  );
}
