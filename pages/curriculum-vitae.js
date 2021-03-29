import Profile from "../components/curriculum/profile";
import Resume from "../components/curriculum/resume";
import Nav from "../components/imports/navbar";
import Head from "next/head";
import { getProfileData } from "../lib/profile-api";
import { getStudiesData } from "../lib/studies-api";
import { getWorkData } from "../lib/work-api";

export async function getStaticProps() {
  const profileData = await getProfileData();
  const studeisData = await getStudiesData();
  const workData = await getWorkData();
  return {
    props: {
      profileData,
      studeisData,
      workData,
    },
  };
}

export default function CurriculumVitae({ profileData, studeisData, workData }) {
  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
        <div className="root h-screen">
          <div className="w-full h-10 fixed z-10">
            <Nav></Nav>
          </div>
          <div className="w-full h-10"></div>
          <div className="w-full sm:flex">
            <Profile profile={profileData}></Profile>
            <Resume 
              studies={studeisData}
              works={workData}
            ></Resume>
          </div>
        </div>
    </>
  );
}
