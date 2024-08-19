import React from "react";
import css from "../../page.module.css";
import addCss from "./bookadd.module.css";
import cover from "./../../../assets/image/preview.jpg";
import Image from "next/image";
import drYounus from "../../../../public/856577_159.jpg";
import localFont from "next/font/local";

const mainakFont = localFont({
  src: "../../../assets/front/Mainak_Buniyadi_Unicode.ttf",
});

const page = () => {
  return (
    <div className={css.description}>
      <h2 className={addCss.header}>Add Book</h2>
      <div className="m-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 p-2">
              <card className={mainakFont.className}>
                <div className="card-body">
                  <Image src={drYounus} alt="Dr Younus" placeholder="blur" />
                  <h2>সবকিছু সংস্কারের পরই দ্রুত নির্বাচন : ড. ইউনূস</h2>
                  <p>
                    অন্তর্বর্তী সরকারের প্রধান উপদেষ্টা ড. মুহাম্মদ ইউনূস বিদেশী
                    কূটনীতিকদের জানিয়েছেন, সবকিছু সংস্কারের পর যত দ্রুত সম্ভব
                    অবাধ, সুষ্ঠু ও অংশগ্রহণমূলক নির্বাচনের আয়োজন করা হবে। তিনি
                    বলেন, ‘বর্তমান সরকারের প্রধান কাজ হলো যত দ্রুত সম্ভব একটা
                    সুষ্ঠু নির্বাচনের ব্যবস্থা করা। তবে এর আগে নির্বাচন কমিশন,
                    বিচার বিভাগ, বেসামরিক প্রশাসন, আইনশৃঙ্খলা বাহিনী ও
                    গণমাধ্যমের আমূল সংস্কারের মাধ্যমে একটা উপযোগী পরিবেশ তৈরি
                    করা হবে।’ রোববার (১৮ আগস্ট) ঢাকায় হোটেল ইন্টারকন্টিনেন্টালে
                    চলমান পরিস্থিতি নিয়ে বাংলাদেশে কর্মরত বিভিন্ন দেশের
                    রাষ্ট্রদূত ও জাতিসংঘের সংস্থাসমূহের আবাসিক প্রধানদের ব্রিফ
                    করেন ড. মুহাম্মদ ইউনূস। পরে এ বিষয়ে প্রধান উপদেষ্টার প্রেস
                    সচিব শফিকুল আলম সাংবাদিকদের ব্রিফ করেন।
                  </p>
                </div>
              </card>
            </div>
            <div className="col-6 p-2">
              <card>
                <div className="card-body">
                  <Image src={drYounus} alt="Dr Younus" placeholder="blur" />
                  <h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta quos dolorem beatae iste! Ad tempora nisi recusandae
                    asperiores vel placeat impedit, odit fuga ipsam. Ipsam!
                  </p>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
