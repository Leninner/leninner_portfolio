import { MdCode, MdAod, MdAddShoppingCart } from 'react-icons/md';

const size = '45';

export const servicesData = [
  {
    title: 'Web Development',
    description:
      'User interfaces are the most important part of any website. We can create a website that is easy to use',
    image: <MdCode size={size} />,
    features: ['Latest web technology', 'Easy to scaling', 'Very user friendly'],
  },
  {
    title: 'Responsive Design',
    description: 'We can create a website that is easy to use and easy to navigate in all devices.',
    image: <MdAod size={size} />,
    features: ['Latest web technology', 'Easy to scaling', 'Very user friendly'],
  },
  {
    title: 'E-commerces',
    description: 'We can do e-commerce, which is a type of business where you can sell products online.',
    image: <MdAddShoppingCart size={size} />,
    features: ['Latest web technology', 'Easy to scaling', 'Very user friendly'],
  },
];
