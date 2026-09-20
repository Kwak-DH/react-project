import Typography from '@/components/Typography';
import { useLoadingStore } from '@/store/useLoadingStore';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';

const Home = () => {
  const { showLoading } = useLoadingStore();
  const { userName } = useUserStore();
  const [text, setText] = useState<string>('Hello World');

  useEffect(() => {
    console.log('hh');
    showLoading(3);
    if (userName) setText(`Hello ${userName}!`);
  }, []);

  return (
    <div className="w-full h-full p-[20px] flex items-center justify-center bg-yellow-300">
      <Typography variant="title">{text}</Typography>
    </div>
  );
};

export default Home;
