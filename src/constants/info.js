// Collect all the text information here so that it is easier
// to organize them
import React from 'react'; // to use jsx

export default {
    name: ['Xiaoyan Wang', '王笑颜'],
    email: 'xiaoyan5 [at] illinois.edu',
    github: 'Horizon-Blue',
    bio: (
        <div>
            <p>
                I am a third year undergraduate student in Computer Science at
                University of Illinois at Urbana-Champaign (UIUC).
            </p>
            <p>
                In 2015, I started my college as a CS student at University
                of California, Santa Barbara (UCSB), and transferred to UIUC a
                year later.
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
            link: '/cv.pdf',
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
                    link: '/cs445',
                },
            ],
        },
    ],
};
