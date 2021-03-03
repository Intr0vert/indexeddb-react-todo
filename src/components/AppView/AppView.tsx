import { Header } from 'containers';

type Props = {
  View: () => JSX.Element;
};

export const AppView = ({ View }: Props) => (
  <>
    <Header />
    <View />
  </>
);
