import { Header } from 'containers';

type Props = {
  setModal: Function;
  children: JSX.Element;
};

export const AppView = ({ setModal, children }: Props) => (
  <>
    <Header setModal={setModal} />
    {children}
  </>
);
