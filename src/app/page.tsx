
import Cards from '@/components/Cards'

export default function Home() {
  return (
    <>


      {/* grid  */}
      <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
        <Cards />
      </div>
    </div>

    </>
  );
}
