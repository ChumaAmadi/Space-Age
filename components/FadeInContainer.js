import { useState, useEffect } from 'react';

const FadeInContainer = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const maxScrollPos = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (currentScrollPos > maxScrollPos * 0.25) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerStyle = {
    opacity: isVisible ? 0 : 1,
    transition: 'opacity 2s ease-in-out',
  };

  return <div style={containerStyle}>{children}</div>;
};

export default FadeInContainer;