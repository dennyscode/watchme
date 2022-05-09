import Image from 'next/image'
import Link from 'next/link'

function MovieCard({movie}) {

  const myLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/w500${src}`
  }

  return (
    <Link href={`/movie/${movie.id}`}>
        <div className="bg-white shadow-sm rounded-md cursor-pointer">
            <Image 
                // loader={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                width={700} 
                height={800}
                loader={myLoader(movie.poster_path)}
                className="rounded-t-md"
            />
            <div className="px-6 py-2">
                <div className="font-bold text-xl mb-1">${movie.title}</div>
                <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
            </div>

        </div>
    </Link>
  )
}

export default MovieCard