interface WorkBoxProps {
  url: string;
  imgSrc: string;
  altText: string;
  title: string;
  date: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ url, imgSrc, altText, title, date }) => (
  <a href={url} className="max-w-96 border-2 rounded-md shadow hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
    <img src={imgSrc} alt={altText} className="w-full rounded-t-md" />
    <div className="px-6 py-4 bg-white rounded-b-md">
      <h3 className="pb-5 font-bold">{title}</h3>
      <span className="text-zinc-400 text-sm">{date}</span>
    </div>
  </a>
);

export const Works = () => {
  return (
    <section id="works" className="bg-orange-50 flex justify-center md:py-12 py-8 md:px-0 px-6">
      <div>
      <h2 className="md:text-5xl text-3xl font-bold md:mb-10 mb-7 text-orange-300 text-center">Works</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ（まだないよ）"
            date="202x.xx.xx"
          />
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ（まだないよ）"
            date="202x.xx.xx"
          />
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ（まだないよ）"
            date="202x.xx.xx"
          />
        </div>
      </div>
    </section>
  );
};
