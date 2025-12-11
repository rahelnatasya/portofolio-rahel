import { useParams, Link } from 'react-router-dom';
import { projects } from './projectsData';
import { ArrowLeft, Globe, Github } from 'lucide-react';
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to portfolio
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div>
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {project.title}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-5"
            >
              {project.full.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 mb-6"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-s rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-medium"
                >
                  <Globe size={18} /> Live Demo
                </a>
              )}
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-400 dark:border-gray-600 text-sm"
                >
                  <Github size={18} /> View Code
                </a>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>


        </div>
      </div>
    </div>
  );
}
