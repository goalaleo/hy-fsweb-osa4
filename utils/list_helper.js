const dummy = (_blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (currentFavorite, contender) => {
    return contender.likes > currentFavorite.likes ? contender : currentFavorite
  }

  return blogs.reduce(reducer, blogs[0])
}

const blogCountsReducer = (counts, blog) => {
  const existingEntryIndex = counts.findIndex(count => count.author === blog.author)

  if (existingEntryIndex !== -1) {
    const authorWithBlogs = counts[existingEntryIndex]
    authorWithBlogs['blogs'] += 1
    counts[existingEntryIndex] = authorWithBlogs
  } else {
    counts.push({ author: blog.author, blogs: 1 })
  }

  console.log(counts)
  return counts
}


const mostBlogs = (blogs) => {
  const authorsWithBlogCounts = blogs.reduce(blogCountsReducer, [])
  const authorWithMostBlogsReducer = (authorWithMostBlogs, contender) => {
    return contender.blogs > authorWithMostBlogs.blogs ? contender : authorWithMostBlogs
  }
  return authorsWithBlogCounts.reduce(authorWithMostBlogsReducer, authorsWithBlogCounts[0])
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
