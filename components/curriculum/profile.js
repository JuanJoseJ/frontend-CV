import Image from "next/image";
import Link from "next/link";
import { getProfileData } from "../../lib/profile-api";

const apiURL = "http://localhost:8001";

export default function profile({ profile }) {
  const imageURL = `${apiURL + profile.foto_perfil.url}`;
  return (
    <div className="sm:w-1/3 min-h-screen w-full p-2 lg:p-4 shadow-lg lg:flex flex-col flex-wrap justify-center bg-black">
      <div className="grid grid-cols-1 justify-items-center bg-white rounded-2xl py-8 h-full">
        <div className="h-48 lg:h-52 w-full relative z-0">
          <Image
            src={imageURL}
            layout="fill"
            objectFit="scale-down"
            alt="ProfilePicture"
            quality="100"
          />
        </div>
        <div className="w-4/5 my-3">
          <p className=" font-medium text-2xl lg:text-4xl text-center">
            {profile.Nombre}
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold lg:text-lg">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>Currently in</span>
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="lg:text-lg">{profile.ubicacion}</p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold lg:text-lg">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>E-Mail</span>
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="lg:text-lg">{profile.correo}</p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold lg:text-lg">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>GitHub</span>
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="">
            <Link href={"http://" + profile.github_link}>
              <a className="lg:text-lg">{profile.github_link}</a>
            </Link>
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold lg:text-lg">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500'>About me</span>
          </p>
        </div>
        <div className="w-4/5">
          <p className="lg:text-lg text-justify overflow-ellipsis">
            {profile.perfil}
          </p>
        </div>
      </div>
    </div>
  );
}
