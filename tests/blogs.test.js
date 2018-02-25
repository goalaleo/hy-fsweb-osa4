const listHelper = require('../utils/list_helper')
const blogs = require('./fixtures/blogs')

test('dummy is called', () => {
  const result = listHelper.dummy([blogs[0]])
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(blogs)).toBe(36)
  })
})

describe('favorite blog', () => {
  test('is the blog with most likes', () => {
    const blogWithMostLikes = blogs.find(blog => blog.title === 'Canonical string reduction')
    expect(listHelper.favoriteBlog(blogs)).toEqual(blogWithMostLikes)
  })
})

describe('most blogs', () => {
  test('returns the author with the most blogs', () => {
    const authorWithMostBlogs = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    expect(listHelper.mostBlogs(blogs)).toEqual(authorWithMostBlogs)
  })
})

describe('most blogs', () => {
  test('returns the author with the most blogs', () => {
    const authorWithMostBlogs = {
      author: 'Robert C. Martin',
      blogs: 3
    }
    expect(listHelper.mostBlogs(blogs)).toEqual(authorWithMostBlogs)
  })
})

describe('most likes', () => {
  test('returns the author with the most likes', () => {
    const authorWithMostLikes = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    }

    expect(listHelper.mostLikes(blogs)).toEqual(authorWithMostLikes)
  })
})
