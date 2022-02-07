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
    features: ['Modern and responsive', 'Great user experience', 'Very easy to use'],
  },
  {
    title: 'SEO',
    description: 'Increase your score in search engines, to reach more visitors who can be converted into customers.',
    image: <MdAddShoppingCart size={size} />,
    features: ['Use best keywords', 'Add the perfect metadata', 'Use the best practices in demand'],
  },
];
