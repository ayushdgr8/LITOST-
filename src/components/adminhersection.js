import React, { useState } from 'react';
import axios from 'axios';

const AdminHeroSection = () => {
    const [heroContent, setHeroContent] = useState({ title: '', subtitle: '' });

    const updateHeroContent = () => {
        axios
            .post('http://localhost:5000/api/hero-section', heroContent)
            .then(() => alert('Updated Successfully!'))
            .catch((err) => console.error("Error updating hero content:", err));
    };
    

    return (
        <div className="admin-hero-section">
            <input
                type="text"
                placeholder="Title"
                value={heroContent.title}
                onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
            />
            <input
                type="text"
                placeholder="Subtitle"
                value={heroContent.subtitle}
                onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
            />
            <button onClick={updateHeroContent}>Update</button>
        </div>
    );
};

export default AdminHeroSection;
