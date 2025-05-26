import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-brand-light py-8 text-center">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} Universo Manhua. Todos os direitos reservados (conteúdo fictício para demonstração).
        </p>
        <p className="text-xs mt-2">
          Criado com <span className="text-brand-primary">&hearts;</span> para explorar o fascinante mundo dos quadrinhos chineses.
        </p>
      </div>
    </footer>
  );
};
export { Footer };
