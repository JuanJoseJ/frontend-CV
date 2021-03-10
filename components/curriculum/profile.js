import Image from "next/image";
import Link from "next/link";
import { getProfileData } from "../../lib/profile-api";

const apiURL = "http://localhost:8001";

export default function profile({ profile }) {
  const imageURL = `${apiURL + profile.foto_perfil.url}`;
  return (
    <div className="sm:w-1/3 min-h-screen w-full pt-3 p-2 sm:pt-8">
      <div className="grid grid-cols-1 justify-items-center content-center">
        <div className="h-48 w-full relative max-w-xs">
          <Image
            src={imageURL}
            layout="fill"
            objectFit="scale-down"
            alt="ProfilePicture"
            quality="100"
          />
        </div>

        <div className="w-4/5 my-3">
          <p className="font-bold text-2xl lg:text-4xl text-center">
            {profile.Nombre}
          </p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold text-yellow-700 lg:text-lg">E-Mail</p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="lg:text-lg">{profile.correo}</p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="font-bold text-yellow-700 lg:text-lg">GitHub</p>
        </div>
        <div className="w-4/5 mt-1">
          <p className="">
            <Link
              href={"http://" + profile.github_link}
            >
              <a className='lg:text-lg'>{profile.github_link}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
