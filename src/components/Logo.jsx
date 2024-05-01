import logoImage from '../assets/Blog_logo.jpg';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width: width }} />
    </div>
  );
}

export default Logo;