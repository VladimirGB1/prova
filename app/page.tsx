import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao Livro de Receitas</h1>
      <p>Descubra diversas receitas deliciosas!</p>
      <Link href="/recipes" legacyBehavior>
        <a>Ver Receitas</a>
      </Link>
    </div>
  );
};

export default Home;
