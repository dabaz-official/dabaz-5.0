import { posts } from "../data/data"

export default function BlogSection() {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts.map((post) => (
        <div key={post.title} className="flex flex-col rounded-2xl shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-600">
                <a href={post.category.href} className="hover:underline transition duration-200">
                  {post.category.name}
                </a>
              </p>
              <a href={post.href} className="block mt-2">
                <p className="text-xl font-semibold text-slate-900">{post.title}</p>
                <p className="mt-3 text-base text-slate-500 truncate">{post.description}</p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-slate-900">
                  <a href={post.author.href} className="hover:underline">
                    {post.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-slate-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> 
  )
}