import Profile from "../components/curriculum/profile";
import Resume from "../components/curriculum/resume";
import Nav from "../components/imports/navbar";
import Head from "next/head";
import { getProfileData } from "../lib/profile-api";
import { getStudiesData } from "../lib/studies-api";
import { getWorkData } from "../lib/work-api";
import { getProjectsData } from "../lib/projects-api";

export async function getStaticProps() {
  const profileData = await getProfileData();
  const studeisData = await getStudiesData();
  const workData = await getWorkData();
  const projectsData = await getProjectsData();
  return {
    props: {
      profileData,
      studeisData,
      workData,
      projectsData,
    },
  };
}

export default function CurriculumVitae({ profileData, studeisData, workData, projectsData }) {
  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/" />
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
              projects={projectsData}
            ></Resume>
          </div>
        </div>
    </>
  );
}
