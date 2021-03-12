import Profile from "../components/curriculum/profile";
import Resume from "../components/curriculum/resume";
import Nav from "../components/imports/navbar";
import Head from "next/head";
import { getProfileData } from "../lib/profile-api";
import { getResumeData } from "../lib/resume-api";

export async function getStaticProps() {
  const profileData = await getProfileData();
  const resumeData = await getResumeData();
  return {
    props: {
      profileData,
      resumeData,
    },
  };
}

export default function CurriculumVitae({ profileData, resumeData }) {
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
            <Resume resume={resumeData}></Resume>
          </div>
        </div>
    </>
  );
}
