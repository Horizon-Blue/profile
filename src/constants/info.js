// Collect all the text information here so that it is easier
// to organize them
import React from 'react'; // to use jsx
import link from 'link';

import profile_image from '../imgs/profile_image.jpg';

export default {
    name: ['Xiaoyan Wang', '王笑颜'],
    email: 'xiaoyan5 [at] illinois.edu',
    github: 'Horizon-Blue',
    avatar: profile_image,
    bio: (
        <div>
            <p>
                I am a third year undergraduate student in Computer Science at
                University of Illinois at Urbana-Champaign (UIUC).
            </p>
            <p>
                In 2015, I started my college as a CS student at University
                of California, Santa Barbara (UCSB), and transferred to UIUC a
                year later. In October, 2016, with a team of 4 UIUC students /
                alumni, we co-founded UmiUni LLC, where we built an online
                platform for college students to sell used items (<a
                    href="https://umiuni.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    website
                </a>
                {' | '}
                <a
                    href="https://itunes.apple.com/us/app/umiuni/id1265697567?mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    iOS app
                </a>).
            </p>
            <p>
                Since Janurary, 2017, I have been working on machine learning
                theory research under the supervision of{' '}
                <a
                    href="http://sanmi.cs.illinois.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Professor Sanmi Koyejo
                </a>. Starting with fall 2017, I decide to work on applying
                machine learning methods on natural language processing (NLP)
                problems, and begin to work on my senior thesis on natural
                language inference (NLI) under the supervision of{' '}
                <a
                    href="http://juliahmr.cs.illinois.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Professor Julia Hockenmaier
                </a>.
            </p>
            <p>
                In fall 2017, I am also working as a Course Assistant for{' '}
                <a
                    href="https://relate.cs.illinois.edu/course/cs446-fa17/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CS 446: Machine Learning
                </a>.
            </p>
            <p>
                I am going to graduate in May, 2018, finishing my undergraduate
                courseworks in three years. I am planning to go to
                graduate school afterwards to keep researching on natural
                language
                inference and understanding problems.
            </p>
        </div>
    ),
    menu: [
        {
            key: 'bio',
            title: 'Bio',
            icon: 'user',
            link: '#bio',
            selected: true,
        },
        {
            key: 'cv',
            title: 'CV',
            icon: 'file-text',
            link: link.webroot + '/cv.pdf',
        },
        {
            key: 'course-projects',
            title: 'Course Projects',
            icon: 'rocket',
            opened: true,
            submenu: [
                {
                    key: 'cs445',
                    title: 'CS 445',
                    link: link.webroot + '/cs445',
                },
            ],
        },
    ],
};
