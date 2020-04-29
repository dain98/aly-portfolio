import React from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    return (
        <div className={'featproj'}>
            <div className={'vector-3'}></div>
            <div className={'vector-4'}></div>
            <a className={'featured'}>FEATURED</a>
            <a className={'projtext'}>projects</a>
            <div className={'proj'} >
                <div className={'proj img'} />
                <div className={'proj desc'} >
                    <a className={'proj desc title'}>Title</a>
                    <a className={'proj desc text'}>Description about my awesome and very cool project.</a>
                    <a className={'proj desc learnmore'}>LEARN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;
