import Link from "next/link";
import Card from "../imports/card";

export default function resume({ studies, works, projects }) {
  return (
    <div className="sm:w-2/3 w-full min-h-screen bg-blue-600 text-white p-4 flex flex-col">
      <div className="flex flex-col flex-1 static mt-1 h-1/3">
        <div className=" h-1/6 font-medium text-2xl lg:text-4xl ml-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50">
            <Link href="/curriculum-vitae">
              <a>Studies</a>
            </Link>
          </span>
        </div>
        <div className="h-5/6 flex-1 flex flex-row overflow-x-auto">
          {studies.map((studie) => {
            return <Card key={studie.id} data={studie}></Card>;
          })}
        </div>
      </div>
      <div className="flex flex-col flex-1 static mt-1 h-1/3">
        <div className=" h-1/6 font-medium text-2xl lg:text-4xl ml-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50">
            <Link href="/curriculum-vitae">
              <a>Projects</a>
            </Link>
          </span>
        </div>
        <div className="h-5/6 flex-1 flex flex-row overflow-x-auto">

        </div>
      </div>
      <div className="flex flex-col flex-1 static mt-1 h-1/3">
        <div className=" h-1/6 font-medium text-2xl lg:text-4xl ml-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-50">
            <Link href="/curriculum-vitae">
              <a>Work Experience</a>
            </Link>
          </span>
        </div>
        <div className="h-5/6 flex-1 flex flex-row overflow-x-auto">
        {works.map((work) => {
            return <Card key={work.id} data={work}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}
