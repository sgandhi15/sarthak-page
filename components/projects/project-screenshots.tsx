import Image from "next/image";

interface Screenshot {
  url: string;
  caption: string;
}

interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
}

export default function ProjectScreenshots({
  screenshots,
}: ProjectScreenshotsProps) {
  return (
    <div className="mt-8">
      <div className="text-xs text-gray-500 font-space mb-2">
        <span className="code-comment">// project.screenshots</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 font-jetbrains">
        Project Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, index) => (
          <div key={index} className="bg-[#1A1A1A] p-2 relative">
            <Image
              src={screenshot.url || "/placeholder.svg"}
              alt={screenshot.caption}
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0OD4wMDw4QEBAPj4+QEBAPj4+QEBAPj4+QED/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <p className="text-center text-sm text-gray-400 mt-2">
              {screenshot.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
