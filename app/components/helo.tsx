import { SocialLinks } from '@/components/SocialLinks/SocialLinks';

export const Helo = () => {
  return (
    <section id="profile" className="bg-orange-50 flex justify-center md:pt-64 pt-80 md:pb-72 pb-96">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:mb-3 mb-1">KOSUKE YAHARA</h1>
        <p className="md:text-3xl text-1xl tracking-widest">I&apos;m aiming to become a web engineer!</p>
        <div className='flex justify-center'>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

