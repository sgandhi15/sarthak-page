export default function LoadingSection({ title }: { title: string }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
        <div className="flex justify-center items-center h-40">
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-12 bg-green-400/20 rounded-full"></div>
            <div className="h-12 w-12 bg-green-400/30 rounded-full"></div>
            <div className="h-12 w-12 bg-green-400/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
