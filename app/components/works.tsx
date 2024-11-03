interface WorkBoxProps {
  url: string;
  imgSrc: string;
  altText: string;
  title: string;
  date: string;
}

const WorkBox: React.FC<WorkBoxProps> = ({ url, imgSrc, altText, title, date }) => (
  <a href={url} className="max-w-96 border-2 rounded-md shadow">
    <img src={imgSrc} alt={altText}  className="w-full" />
    <div className="px-6 py-4 bg-white">
      <h3 dangerouslySetInnerHTML={{ __html: title }} className="pb-5 font-bold"></h3>
      <span className="text-zinc-400 text-sm">{date}</span>
    </div>
  </a>
);

export const Works = () => {
  return (
    <section id="works" className="bg-orange-50 flex justify-center py-12">
      <div>
      <h2 className="text-5xl font-bold mb-10 text-orange-300 text-center">Works</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ"
            date="202x.xx.xx"
          />
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ"
            date="202x.xx.xx"
          />
          <WorkBox
            url="#"
            imgSrc="/images/portfolio.jpg"
            altText="#"
            title="ポートフォリオ"
            date="202x.xx.xx"
          />
        </div>
      </div>
    </section>
  );
};
