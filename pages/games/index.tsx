import React from 'react';
import prisma from '@/lib/prisma';

interface Game {
  id: number;
  name: string;
  location: string;
  timestamp: number;
}

interface Props {
  games: Game[];
}

function timestampToDateTimeString(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}

const Games = (props: Props) => {
  const { games } = props;

  return (
    <>
      <h1 className='text-5xl font-extrabold dark:text-white'>Games List</h1>
      <ul className='list-disc'>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} @ {game.location} on{' '}
            {timestampToDateTimeString(game.timestamp)}
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getServerSideProps() {
  const games = await prisma.game.findMany();
  return {
    props: {
      games
    }
  };
}

export default Games;
