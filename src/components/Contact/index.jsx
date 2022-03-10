import { ContactContainer, AsideContact } from './styles';
import { ContactForm } from '../ContactForm';

export const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <AsideContact>
        <h3>Contact</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus libero ratione mollitia amet id alias
          quasi vero quas fugit expedita itaque, totam nihil nemo quibusdam cum, tempore minima hic.
        </p>
        <span>Email</span>
        <p>mazabandalenin180@gmail.com</p>
        <span>Phone</span>
        <p>+1 (908) 908-9089</p>
      </AsideContact>

      <AsideContact>
        <ContactForm />
      </AsideContact>
    </ContactContainer>
  );
};
