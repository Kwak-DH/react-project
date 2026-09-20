import { useLoadingStore } from '../store/useLoadingStore';
import { Spinner } from '@material-tailwind/react';

const LoadingProvider = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) return <></>;

  return (
    <div className="!absolute top-0 right-0 w-full h-full z-999 bg-shadow flex justify-center items-center">
      <Spinner
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        onResize={() => {}}
        onResizeCapture={() => {}}
        className="h-30 w-30"
      />
    </div>
  );
};

export default LoadingProvider;
