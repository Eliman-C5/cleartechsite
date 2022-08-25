import { useLayoutEffect } from 'react';
import { useGeneralProvider } from '../context/GeneralProvider';
export default function useLockBodyScroll() {
  const { mobileMenu } = useGeneralProvider();
  //  console.log(mobileMenu);
  //aqui lo quw quita el scroll es el document-bodyoverflow que se condiciona por un estado global
  useLayoutEffect(() => {
    // Get original value of body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    if (mobileMenu === true) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [mobileMenu]); // Empty array ensures effect is only run on mount and unmount
  //Aqui hice un cambio para que eso corra cada que se abre y se cierre el menu mobile
}
