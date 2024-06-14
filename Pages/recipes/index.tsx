import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Recipe } from '../../types';
import receitas from '../../recipes.json';

interface RecipesProps {
  recipes: Recipe[];
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`} legacyBehavior>
              <a>
                <img src={recipe.image} alt={recipe.name} style={{ width: '200px' }} />
                <h2>{recipe.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      recipes: receitas,
    },
  };
};

export default Recipes;
