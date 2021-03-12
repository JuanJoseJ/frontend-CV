import Link from "next/link";

export default function resume({ resume }) {
  return (
    <div className="sm:w-2/3 w-full min-h-screen bg-black text-white py-3 flex flex-col">
      <div className=" flex-1">
        <div className="h-10 font-medium text-2xl lg:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            <Link href="/curriculum-vitae">
              <a>Work Experience</a>
            </Link>
          </span>
        </div>
      </div>
      <div className=" w-full flex-1">
        <div className="h-10 font-medium text-2xl lg:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600">
            <Link href="/curriculum-vitae">
              <a>Studies</a>
            </Link>
          </span>
        </div>
      </div>
      <div className=" w-full flex-1">
        <div className="h-10 font-medium text-2xl lg:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            <Link href="/curriculum-vitae">
              <a>Projects</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
