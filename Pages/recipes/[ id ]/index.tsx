// pages/recipes/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Recipe } from '../../../types';
import receitas from '../../../recipes.json';

interface RecipeProps {
  recipe: Recipe | null;
}

const RecipeDetail: React.FC<RecipeProps> = ({ recipe }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{ width: '400px' }} />
      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = receitas.map((recipe) => ({
    params: { id: recipe.id.toString() }, // Convertendo para string, se necessário
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  console.log('Params received:', id);

  const recipe = receitas.find((r) => r.id === id);
  console.log('Recipe found:', recipe);

  return {
    props: {
      recipe: recipe || null,
    },
  };
};

export default RecipeDetail;
