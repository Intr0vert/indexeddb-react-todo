import { Content, Header } from 'components';
import { useState } from 'react';

export const App = () => {
  const [isTask, changeIsTask] = useState(true);

  return (
    <>
      <Header isTask={isTask} changeIsTask={changeIsTask} />
      <Content />
    </>
  );
};
