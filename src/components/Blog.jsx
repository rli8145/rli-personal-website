import './Blog.css'

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Coming Soon',
      date: '2025',
      excerpt: 'Blog posts will be added here soon. Stay tuned for updates on my projects, learnings, and thoughts on software development.',
      slug: '#'
    }
  ]

  return (
    <section className="blog">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.slug} className="blog-link">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
