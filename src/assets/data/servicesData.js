import { MdCode, MdAod } from 'react-icons/md';
import { FaChalkboardTeacher } from 'react-icons/fa';

const size = '40';

export const servicesData = [
  {
    title: 'Frontend Development',
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
    title: 'Mentorship',
    description: 'The best way to grow is to help and teach other passionate people to grow.',
    image: <FaChalkboardTeacher size={size} />,
    features: ['Teach logical thinking', 'Use a workflow similar to reality', 'Use the best practices in demand'],
  },
];
