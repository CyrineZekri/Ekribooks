import React from "react";
import PartOne from "./PartOne";
import Abir from "../../images/about11.jpg";
import covid from "../../images/covid.jpg";
import "./Landing.css";


function LandingPage() {
  return (
    <div className="">
      <PartOne />

      <section className="flex flex-col items-center justify-center min-h-screen bg-[#040E1A]">
        <div className="mt-20 mx-4">
          <img src={covid} alt="" className="rounded-xl" />
        </div>

        <div className="flex mb-8 flex-col p-2 mx-4 md:p-10 md:gap-16 md:w-2/3 md:flex-row items-start justify-center text-white mt-8 md:-mt-20 bg-blur-xl bg-gradient-to-bl from-[#0C2938]/80 to-[#0C051D] rounded-2xl">
          <div className="md:w-2/3">
            <h1 className="p-2 text-center text-2xl md:text-left font-bold md:text-5xl pt-4">
              What is EkriBook
            </h1>
            <h1 className="p-2 pt-0 mb-2 text-center text-2xl md:text-left font-bold md:text-4xl">

            </h1>
            <p className="p-2 text-center md:text-left ">
              Ekribook is a dynamic book rental service that brings
              affordability and community to the joy of reading. It allows users
              to easily rent books and share their own collection for others to
              enjoy.
            </p>
            <p className="p-2 text-center md:text-left ">
              This innovative approach not only makes reading more
              accessible but also fosters a shared love for literature within
              the community. The adventure of renting books started in March
              2020 during the first wave of the pandemic.
            </p>
          </div>

          <div className="flex flex-col gap-6 justify-start md:w-2/3 mt-6">

            <div className="">
              <h1 className="p-2 pt-0  text-center text-4xl md:text-left font-bold md:text-5xl">
                Since When and Under which Circumstances?
              </h1>
              <h1 className="p-2 pt-0 mb-2 text-center text-2xl md:text-left font-bold md:text-5xl">

              </h1>
              <p className="p-2 text-center md:text-left ">
                The quarantine even
                gave an impetus or proved to be an opportunity for her. There is
                no doubt that the COVID-19 pandemic poses a serious challenge.
                However, in this particularly unstable and anxiety-inducing period
                where outings were significantly reduced, Abir launched Ekribook
                as a remedy aimed at escaping the anxiety-inducing atmosphere.
                Reading, taking care of oneself, and forgetting the anxiety
                resulting from the coronavirus were the main goals of Ekribook.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="text-white pb-24 bg-[#040e1af0]">
        <div className="title">

        </div>
        <div className="row">
          <div className="column description flex ">
            <h2 className="text-4xl font-bold pb-4">
              And behind every innovative project, there is a passionate person.
            </h2>
            <p className="text-xl">
              Abir Aloui, whose love for reading has been a constant source of
              inspiration throughout her life, is a highly accomplished
              individual with a master's degree in finance and insurance. Her
              deep-seated affection for books transcends the ordinary,
              encompassing a profound appreciation for every facet of
              literature. Hailing from the vibrant city of Gabes, Abir is fueled
              by an ardent passion to transform the literary landscape in
              Southern Tunisia. In a region where the tradition of reading may
              not be as firmly entrenched in cultural customs, Abir aspires to
              instigate a literary renaissance. Her commitment to this vision
              reflects a profound belief in the transformative power of
              literature to enrich lives and communities, driving her to pave
              the way for a renewed and vibrant reading culture in the southern
              regions of Tunisia.{" "}
            </p>
          </div>
          <div className="column">
            <img src={Abir} className="Abir" alt="Abir Aloui" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
