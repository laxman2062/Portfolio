import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'FastApi CRUD Manager',
    category: 'Full Stack',
    description: 'A full-stack CRUD web application built with FastAPI, React, and SQL database integration. Users can add, update, delete, and manage records through a responsive dashboard with real-time API communication..',
    tech: ['FastAPI', 'React', 'Python', 'MySQL', 'SQLAlchemy'],
    color: '#5e9fff',
    emoji: '💳',
    links: { live: '#', github: '#' },
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow AI',
    category: 'AI/ML',
    description: 'Intelligent project management tool using NLP to auto-categorize, prioritize, and assign tasks. Integrates with Slack, GitHub, and Jira.',
    tech: ['Next.js', 'Python', 'OpenAI', 'MongoDB', 'Docker'],
    color: '#a78bfa',
    emoji: '🤖',
    links: { live: '#', github: '#' },
    featured: true,
  },
  {
    id: 3,
    title: 'DesignStudio',
    category: 'Frontend',
    description: 'Browser-based design tool with collaborative real-time editing, component library, and export to CSS/Tailwind. Built for design teams.',
    tech: ['React', 'Canvas API', 'WebSockets', 'TypeScript'],
    color: '#f472b6',
    emoji: '🎨',
    links: { live: '#', github: '#' },
    featured: true,
  },
  {
    id: 4,
    title: 'Cryptex Dashboard',
    category: 'Full Stack',
    description: 'Cryptocurrency portfolio tracker with live price feeds, alerts, and P&L analysis. Connects to 8 major exchanges via API.',
    tech: ['React', 'WebSocket', 'Express', 'Chart.js'],
    color: '#34d399',
    emoji: '📈',
    links: { live: '#', github: '#' },
  },
  {
    id: 5,
    title: 'EcoTrack',
    category: 'Mobile',
    description: 'Carbon footprint tracker that analyzes spending habits and provides personalized sustainability recommendations.',
    tech: ['React Native', 'Firebase', 'TensorFlow Lite'],
    color: '#facc15',
    emoji: '🌱',
    links: { live: '#', github: '#' },
  },
  {
    id: 6,
    title: 'CodeReview Pro',
    category: 'AI/ML',
    description: 'AI-powered code review tool that detects bugs, suggests refactors, and enforces style guides via GitHub PR integration.',
    tech: ['Python', 'GPT-4', 'GitHub API', 'FastAPI'],
    color: '#fb923c',
    emoji: '🔍',
    links: { live: '#', github: '#' },
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend', 'Mobile'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="page-wrapper">
      <div className="projects-page">
        <div className="projects-header">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Things I've <span className="highlight">Built</span></h1>
          <p className="section-subtitle">
            A selection of projects I'm proud of — from production apps to experimental side projects.
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="featured-projects">
            {featured.map(project => (
              <div
                key={project.id}
                className="project-card featured"
                style={{ '--card-color': project.color }}
              >
                <div className="card-glow" />
                <div className="project-emoji">{project.emoji}</div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.live} className="project-link primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.links.github} className="project-link ghost">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map(project => (
              <div
                key={project.id}
                className="project-card"
                style={{ '--card-color': project.color }}
              >
                <div className="project-emoji small">{project.emoji}</div>
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.links.live} className="project-link primary">Live Demo</a>
                  <a href={project.links.github} className="project-link ghost">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
