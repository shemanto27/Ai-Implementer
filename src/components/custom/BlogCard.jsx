import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function BlogCard({ title, date, publisher, imageUrl, publisherImageUrl }) {
  return (
    <Card className="w-full max-w-sm bg-gray-800 text-gray-100">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={title}
          width={384}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={publisherImageUrl} alt={publisher} />
              <AvatarFallback>{publisher.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-400">{publisher}</span>
          </div>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
