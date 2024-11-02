import { SocialLinks } from '/components/SocialLinks/SocialLinks';

export const Helo = () => {
  return (
    <section id="profile" className="bg-orange-50 flex justify-center pt-48 pb-72">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">KOSUKE YAHARA</h1>
        <p className="text-3xl tracking-widest">I'm aiming to become a web engineer!</p>
        <div className='flex justify-center'>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

