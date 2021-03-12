import Link from "next/link";

export default function nav() {
  return (
    <>
      <nav className="flex flex-row flex-wrap content-center text-left justify-between py-4 px-6 bg-white shadow items-baseline w-full h-full">
        <div className="mb-2 sm:mb-0">
          <Link href="/">
            <a className="text-2xl no-underline text-grey-darkest">
              Curriculum-Vitae
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className="text-lg no-underline text-grey-darkest ml-2"></a>
          </Link>
        </div>
      </nav>
    </>
  );
}
