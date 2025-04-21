'use client';

import { AiOutlineSolution, AiOutlineLaptop, AiOutlineStar } from 'react-icons/ai';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // アニメーションの持続時間（ミリ秒）
      easing: 'ease-in',
    });
  }, []);

  return (
    <section id="about" className="bg-white flex justify-center md:py-12 py-8 md:px-0 px-6">
      <div>
        <h2 className="md:text-5xl text-3xl font-bold md:mb-10 mb-7 text-orange-300 text-center" data-aos="fade">About</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-2" data-aos="fade">
            <img src="/images/img_profile.jpg" alt="prof" className="w-full border-b-2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><AiOutlineSolution size={30} color="#333" className='inline'/> 経歴</div>
              <p className="text-gray-700 text-base">
                30歳 大阪生まれ<br/>
                2019年3月 近畿大学卒業後、SES企業に就職<br/>
                2022年8月 退職後、2社目のSES企業に就職<br/>
                2024年6月 テックアカデミー卒業<br/>
                2025年3月 RUNTEQ卒業
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-2" data-aos="fade">
            <img src="/images/pcneko.jpg" alt="prof" className="w-full border-b-2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><AiOutlineLaptop size={30} color="#333" className='inline'/> スキル</div>
              <p className="text-gray-700 text-base">
                [技術] <br />
                Visual C++、C、Java、COBOL、Linux、PostgreSQL、MySql、Ruby <br />
                [資格] <br />
                ITパスポート、Oracle bronze/silver DBA、Oracle Java bronze/silver、Lpic-1
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-2" data-aos="fade">
            <img src="/images/hobbyneko.jpg" alt="prof" className="w-full border-b-2" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><AiOutlineStar size={30} color="#333" className='inline'/> 趣味・好きなこと/もの</div>
              <p className="text-gray-700 text-base">
                かなりインドアです。 <br />
                アニメ、ゲーム、漫画、K-POP、ちいかわ、カラオケ、ねこ、東海オンエア、ラーメン、 吹奏楽（サックス吹いてます）
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

