import { Footer } from '../../components/Footer';
import { SendFeedback } from '../../components/SendFeedback';

export const Layout = ({ children }) => {
  return (
    <>
      {children}
      <SendFeedback />
      <Footer />
    </>
  );
};
