import Link from "next/link";

export default function card({ data }) {
    if(data){
        return (
            
            <div className='w-48 sm:w-60 h-48 sm:h-full bg-yellow-500 rounded border mr-2 flex-none shadow-lg text-black hover:border-black hover:shadow-2xl'>
                <div className='h-7 pl-1 bg-white rounded-t border-b overflow-visible'>
                    <p className='text-lg font-semibold break-words'>
                        <Link href={""+data.html_url}>
                            <a className='cursor-pointer' target='_blank'>{data.name}</a>
                        </Link>
                    </p>
                </div>
                <div className='h-1/10 pl-1 bg-white border-b'>
                    <p className=' font-medium'>Language: {data.language}</p>
                </div>
                <div className='px-1 text-white'>
                    <p className=' font-medium break-words overflow-hidden'>{data.description}</p>
                </div>

            </div>
        )
    }else{
        return null
    }
}