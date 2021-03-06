import { GetStaticProps } from 'next';

type Episode = {
  episodes: Array<{
    id: string;
    title: string;
    menbers: string;
  }>;
}

type HomeProps = {
  episodes: Episode[];
}

export default function Home( props: HomeProps ) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3333/episodes?_limit=12&_sort=published_at&_order=desc');
  const data = await res.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 24,
  }
}
