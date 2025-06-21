import React from 'react';
import '../../styles/features/menu/tags.scss';
import { Link } from 'react-router-dom';
const Tags = () => {
  const taglist = [
    { name: 'JavaScript', link: '#' },
    { name: 'React', link: '#' },
    { name: 'CSS', link: '#' },
    { name: 'HTML', link: '#' },
    { name: 'Node.js', link: '#' },
    { name: 'Python', link: '#' },
    { name: 'Java', link: '#' },
    { name: 'C++', link: '#' },
    { name: 'Ruby', link: '#' },
    { name: 'PHP', link: '#' }
  ]
  return (
    <div className="tags">
      <div className="tags-header">
        <h2 className="tags-title">Tags</h2>
        <button className="new-tag">+ New tag</button>
      </div>
      <ul className="tag-list">
        {taglist.map((tag, index) => (
          <Link key={index} to={tag.link} className="tag-item">
            <span className="tag-name">#{tag.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Tags;