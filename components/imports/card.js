import Link from "next/link";

export default function card({ data }) {
    if(data){
        return (
            
            <div className='w-48 sm:w-60 h-48 sm:h-full bg-yellow-500 rounded border mr-2 flex-none shadow-lg text-black hover:border-black hover:shadow-2xl'>
                <div className='h-7 pl-1 bg-white rounded-t border-b'>
                    <p className='text-lg font-semibold'>
                        <Link href={""+data.url}>
                            <a className='cursor-pointer' >{data.nombre}</a>
                        </Link>
                    </p>
                </div>
                <div className='h-1/10 pl-1 bg-white border-b '>
                    <p className=' font-medium'>Start date: {data.fecha_inicio}</p>
                </div>
                <div className='h-1/10 pl-1 bg-white '>
                    <p className=' font-medium'>Finish date: {data.fecha_finalizacion}</p>
                </div>
                <div className='px-1 text-white'>
                    <p className=' font-medium'>{data.anotaciones}</p>
                </div>
            </div>
        )
    }else{
        return null
    }
}