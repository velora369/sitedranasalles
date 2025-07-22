import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog posts routes
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      // Return only necessary fields for preview to reduce payload size
      const previewPosts = posts.map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        author: post.author,
        readingTime: post.readingTime,
        publishedAt: post.publishedAt,
        imageUrl: post.imageUrl,
        isPublished: post.isPublished
      }));
      res.json(previewPosts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
