import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Executa o efeito sempre que o pathname (rota) mudar

  return null; // Este componente não renderiza nada
}

export default ScrollToTop; 