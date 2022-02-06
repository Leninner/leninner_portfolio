import { StyledAboutMe, ImgContainer } from './styles';

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <ImgContainer>
        <img
          src='https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=838&q=80'
          alt=''
        />
      </ImgContainer>

      <div>
        <h1>
          <span>About</span> Me
        </h1>
        <p>I am Lenin, Frontend Developer based in Ecuador. I enjoy creating beautiful websites for the internet.</p>
        <p>My goal is to always build scalable products and performant code.</p>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>John Doe</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <a href='/'>
                  <span>123 Main St</span>
                  <span>Anytown, CA 12345</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <a href='/'>
                  <span>123-456-7890</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <a href='/'>
                  <span>mazabandalenin180@gmail.com</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledAboutMe>
  );
};
