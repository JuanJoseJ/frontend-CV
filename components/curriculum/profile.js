import Image from "next/image";
import Link from "next/link";
import { getProfileData } from "../../lib/profile-api";

const apiURL = "http://localhost:8001";

export default function profile({ profile }) {
  const imageURL = `${apiURL + profile.foto_perfil.url}`;
  return (
    <div className="sm:w-1/3 min-h-screen w-full p-2 lg:p-4 shadow-lg lg:flex flex-col flex-wrap justify-center bg-blue-600">
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
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-yellow-500'>About me</span>
          </p>
        </div>
        <div className="w-4/5">
          <p className="lg:text-lg text-justify overflow-ellipsis font-medium">
            {profile.perfil}
          </p>
        </div>
        <div className="w-4/5 my-6 flex justify-around">
              <div className='cursor-pointer p-1'>
                <Link href={"http://" + profile.github_link}>
                  <a target='_blank'>
                    <Image
                     target='_blank'  src="/images/GitHubLogo.png"
                      width={64}
                      height={64}
                      className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50'
                    />
                  </a>
                </Link>
              </div>
              <div className='cursor-pointer p-1'>
                <Link href="http://wa.link/nxlevs">
                  <a target='_blank'>
                    <Image
                      src="/images/WP.png"
                      width={64}
                      height={64}
                      className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50'
                    />
                  </a>
                </Link>
              </div>
              <div className='cursor-pointer p-1'>
                <Link href={"https://"+profile.twitter}>
                  <a target='_blank'>
                    <Image
                      src="/images/Twitter.png"
                      width={64}
                      height={64}
                      className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-50'
                    />
                    </a>
                </Link>
              </div>
        </div>
        <div className="w-4/5 mt-1 font-semibold lg:text-lg ">
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-700 to-yellow-500 '>Mail: </span>
        <p className='break-words'>
          {profile.correo}
        </p>
        </div>
      </div>
    </div>
  );
}
