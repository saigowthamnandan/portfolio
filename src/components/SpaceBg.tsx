import Image from 'next/image';
import '@/styles/home.css'; // Ensure you have the styles for the clouds
import cloud from '../../public/cloud.webp';

export default function SpaceBg() {
  return (
    <>
      <Image alt="cloud" width={'0'} height={'0'} src={cloud} className="absolute w-1/3 z-50 top-0 left-0" />
      <Image alt="cloud" width={'0'} height={'0'} src={cloud} className="absolute w-1/3 z-50 top-0 right-0 transform scale-x-[-1]" />
      <Image
        alt="cloud"
        width={'0'}
        height={'0'}
        src={cloud}
        className="absolute w-2/5 z-50 opacity-20 top-0 right-0 transform scale-x-[-1]"
      />
      <Image alt="cloud" width={'0'} height={'0'} src={cloud} className="absolute w-2/5 z-50 opacity-20 top-0 left-0" />
    </>
  );
}
