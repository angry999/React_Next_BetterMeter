import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/reports/tasks').reply(200, {
    tasks: [{
        id: uuidv4(),
        value: '264783',
        members: [
            'GL',
            '/static/images/test/icon-trend-type-up.svg',
        ],
        colors: [
            '#FF9900',
            '#beedc0'
        ]
    },
    {
        id: uuidv4(),
        value: '64783',
        members: [
            'DS',
            '/static/images/test/icon-trend-type-good.svg'
        ],
        colors: [
            '#127BF5',
            '#faf8f3'
        ]
    },
    {
        id: uuidv4(),
        value: '23783',
        members: [
            'GL',
            '/static/images/test/icon-trend-type-up.svg'
        ],
        colors: [
            '#FF9900',
            '#beedc0'
        ]
    },
    {
        id: uuidv4(),
        value: '8837',
        members: [
            'DK',
            '/static/images/test/icon-trend-type-hot.svg'
        ],
        colors: [
            '#3DDDAA',
            '#faf8f3'
        ]
    },
    {
        id: uuidv4(),
        value: '5375',
        members: [
            'DS',
            '/static/images/test/icon-trend-type-bad.svg'
        ],
        colors: [
            '#127BF5',
            '#faf8f3'
        ]
    },
    {
        id: uuidv4(),
        value: '3923',
        members: [
            'NB',
            '/static/images/test/icon-trend-type-up.svg'
        ],
        colors: [
            '#84868A',
            '#beedc0'
        ]
    }
    ]
});

mock.onGet('/api/reports/charts').reply(200, {
    data: [{
        name: 'DrawKit',
        color: '#3DDDAA',
        pageView: [
            { value: 0, date: 'Jan' },
            { value: 5000, date: 'Feb' },
            { value: 4000, date: 'Mar' },
            { value: 5000, date: 'Apr' },
            { value: 4500, date: 'May' },
            { value: 4700, date: 'Jun' },
            { value: 5200, date: 'Jul' },
            { value: 12943, date: 'Aug' },
            { value: 5000, date: 'Sep' },
            { value: 6000, date: 'Oct' },
            { value: 5000, date: 'Nov' },
            { value: 13500, date: 'Dec' },
        ],
        uniqueUsers: [
            { value: 0, date: 'Jan' },
            { value: 2500, date: 'Feb' },
            { value: 2000, date: 'Mar' },
            { value: 3000, date: 'Apr' },
            { value: 2500, date: 'May' },
            { value: 2700, date: 'Jun' },
            { value: 3200, date: 'Jul' },
            { value: 7943, date: 'Aug' },
            { value: 3000, date: 'Sep' },
            { value: 2000, date: 'Oct' },
            { value: 3000, date: 'Nov' },
            { value: 9500, date: 'Dec' },
        ],
        averageTime: [
            { value: 105, date: 'Jan' },
            { value: 70, date: 'Feb' },
            { value: 220, date: 'Mar' },
            { value: 179, date: 'Apr' },
            { value: 150, date: 'May' },
            { value: 110, date: 'Jun' },
            { value: 90, date: 'Jul' },
            { value: 220, date: 'Aug' },
            { value: 280, date: 'Sep' },
            { value: 350, date: 'Oct' },
            { value: 150, date: 'Nov' },
            { value: 200, date: 'Dec' },
        ],
        bounceRate: [
            { value: 25.7, date: 'Jan' },
            { value: 10, date: 'Feb' },
            { value: 13, date: 'Mar' },
            { value: 34, date: 'Apr' },
            { value: 19, date: 'May' },
            { value: 25, date: 'Jun' },
            { value: 37, date: 'Jul' },
            { value: 15, date: 'Aug' },
            { value: 19, date: 'Sep' },
            { value: 0, date: 'Oct' },
            { value: 15, date: 'Nov' },
            { value: 20, date: 'Dec' },
        ],
    },
    {
        name: 'DesignStripe',
        color: '#1B7FF3',
        pageView: [
            { value: 12313, date: 'Jan' },
            { value: 2323, date: 'Feb' },
            { value: 23423, date: 'Mar' },
            { value: 4000, date: 'Apr' },
            { value: 1000, date: 'May' },
            { value: 3000, date: 'Jun' },
            { value: 4000, date: 'Jul' },
            { value: 10000, date: 'Aug' },
            { value: 9000, date: 'Sep' },
            { value: 12000, date: 'Oct' },
            { value: 10000, date: 'Nov' },
            { value: 13500, date: 'Dec' },
        ],
        uniqueUsers: [
            { value: 2000, date: 'Jan' },
            { value: 1500, date: 'Feb' },
            { value: 3000, date: 'Mar' },
            { value: 5000, date: 'Apr' },
            { value: 3500, date: 'May' },
            { value: 7700, date: 'Jun' },
            { value: 3200, date: 'Jul' },
            { value: 2943, date: 'Aug' },
            { value: 4000, date: 'Sep' },
            { value: 5000, date: 'Oct' },
            { value: 6000, date: 'Nov' },
            { value: 12500, date: 'Dec' },
        ],
        averageTime: [
            { value: 55, date: 'Jan' },
            { value: 170, date: 'Feb' },
            { value: 420, date: 'Mar' },
            { value: 279, date: 'Apr' },
            { value: 50, date: 'May' },
            { value: 10, date: 'Jun' },
            { value: 190, date: 'Jul' },
            { value: 200, date: 'Aug' },
            { value: 180, date: 'Sep' },
            { value: 250, date: 'Oct' },
            { value: 250, date: 'Nov' },
            { value: 40, date: 'Dec' },
        ],
        bounceRate: [
            { value: 15.7, date: 'Jan' },
            { value: 20, date: 'Feb' },
            { value: 23, date: 'Mar' },
            { value: 14, date: 'Apr' },
            { value: 29, date: 'May' },
            { value: 15, date: 'Jun' },
            { value: 27, date: 'Jul' },
            { value: 5, date: 'Aug' },
            { value: 29, date: 'Sep' },
            { value: 30, date: 'Oct' },
            { value: 25, date: 'Nov' },
            { value: 10, date: 'Dec' },
        ],
    },
    {
        name: 'Glyphy.io',
        color: '#FF9900',
        pageView: [
            { value: 4000, date: 'Jan' },
            { value: 5000, date: 'Feb' },
            { value: 4000, date: 'Mar' },
            { value: 5000, date: 'Apr' },
            { value: 4500, date: 'May' },
            { value: 4700, date: 'Jun' },
            { value: 6000, date: 'Jul' },
            { value: 7000, date: 'Aug' },
            { value: 5000, date: 'Sep' },
            { value: 6000, date: 'Oct' },
            { value: 5000, date: 'Nov' },
            { value: 7500, date: 'Dec' },
        ],
        uniqueUsers: [
            { value: 6000, date: 'Jan' },
            { value: 4500, date: 'Feb' },
            { value: 3000, date: 'Mar' },
            { value: 7000, date: 'Apr' },
            { value: 9500, date: 'May' },
            { value: 17700, date: 'Jun' },
            { value: 7200, date: 'Jul' },
            { value: 2943, date: 'Aug' },
            { value: 8000, date: 'Sep' },
            { value: 5000, date: 'Oct' },
            { value: 9000, date: 'Nov' },
            { value: 2500, date: 'Dec' },
        ],
        averageTime: [
            { value: 355, date: 'Jan' },
            { value: 70, date: 'Feb' },
            { value: 220, date: 'Mar' },
            { value: 179, date: 'Apr' },
            { value: 150, date: 'May' },
            { value: 310, date: 'Jun' },
            { value: 90, date: 'Jul' },
            { value: 100, date: 'Aug' },
            { value: 280, date: 'Sep' },
            { value: 150, date: 'Oct' },
            { value: 450, date: 'Nov' },
            { value: 140, date: 'Dec' },
        ],
        bounceRate: [
            { value: 35.7, date: 'Jan' },
            { value: 40, date: 'Feb' },
            { value: 13, date: 'Mar' },
            { value: 34, date: 'Apr' },
            { value: 59, date: 'May' },
            { value: 35, date: 'Jun' },
            { value: 37, date: 'Jul' },
            { value: 15, date: 'Aug' },
            { value: 39, date: 'Sep' },
            { value: 30, date: 'Oct' },
            { value: 45, date: 'Nov' },
            { value: 30, date: 'Dec' },
        ],
    },
    {
        name: 'Designvalley.club',
        color: '#571DFE',
        pageView: [
            { value: 770, date: 'Jan' },
            { value: 300, date: 'Feb' },
            { value: 1000, date: 'Mar' },
            { value: 2000, date: 'Apr' },
            { value: 4500, date: 'May' },
            { value: 7000, date: 'Jun' },
            { value: 5200, date: 'Jul' },
            { value: 1943, date: 'Aug' },
            { value: 11000, date: 'Sep' },
            { value: 5000, date: 'Oct' },
            { value: 7000, date: 'Nov' },
            { value: 13500, date: 'Dec' },
        ],
        uniqueUsers: [
            { value: 2000, date: 'Jan' },
            { value: 3500, date: 'Feb' },
            { value: 4000, date: 'Mar' },
            { value: 8000, date: 'Apr' },
            { value: 5500, date: 'May' },
            { value: 7700, date: 'Jun' },
            { value: 4200, date: 'Jul' },
            { value: 4943, date: 'Aug' },
            { value: 6000, date: 'Sep' },
            { value: 7000, date: 'Oct' },
            { value: 4000, date: 'Nov' },
            { value: 5500, date: 'Dec' },
        ],
        averageTime: [
            { value: 155, date: 'Jan' },
            { value: 170, date: 'Feb' },
            { value: 120, date: 'Mar' },
            { value: 279, date: 'Apr' },
            { value: 350, date: 'May' },
            { value: 210, date: 'Jun' },
            { value: 190, date: 'Jul' },
            { value: 200, date: 'Aug' },
            { value: 180, date: 'Sep' },
            { value: 350, date: 'Oct' },
            { value: 150, date: 'Nov' },
            { value: 340, date: 'Dec' },
        ],
        bounceRate: [
            { value: 25.7, date: 'Jan' },
            { value: 30, date: 'Feb' },
            { value: 23, date: 'Mar' },
            { value: 24, date: 'Apr' },
            { value: 49, date: 'May' },
            { value: 35, date: 'Jun' },
            { value: 17, date: 'Jul' },
            { value: 25, date: 'Aug' },
            { value: 59, date: 'Sep' },
            { value: 30, date: 'Oct' },
            { value: 25, date: 'Nov' },
            { value: 10, date: 'Dec' },
        ],
    },
    {
        name: 'Neubel',
        color: '#0C172E',
        pageView: [
            { value: 1000, date: 'Jan' },
            { value: 2000, date: 'Feb' },
            { value: 3000, date: 'Mar' },
            { value: 4000, date: 'Apr' },
            { value: 5500, date: 'May' },
            { value: 6700, date: 'Jun' },
            { value: 7200, date: 'Jul' },
            { value: 8294, date: 'Aug' },
            { value: 9000, date: 'Sep' },
            { value: 6000, date: 'Oct' },
            { value: 5000, date: 'Nov' },
            { value: 13500, date: 'Dec' },
        ],
        uniqueUsers: [
            { value: 1000, date: 'Jan' },
            { value: 4500, date: 'Feb' },
            { value: 3000, date: 'Mar' },
            { value: 3000, date: 'Apr' },
            { value: 4500, date: 'May' },
            { value: 5700, date: 'Jun' },
            { value: 4200, date: 'Jul' },
            { value: 7943, date: 'Aug' },
            { value: 3000, date: 'Sep' },
            { value: 8000, date: 'Oct' },
            { value: 6000, date: 'Nov' },
            { value: 12500, date: 'Dec' },
        ],
        averageTime: [
            { value: 55, date: 'Jan' },
            { value: 270, date: 'Feb' },
            { value: 320, date: 'Mar' },
            { value: 179, date: 'Apr' },
            { value: 450, date: 'May' },
            { value: 110, date: 'Jun' },
            { value: 90, date: 'Jul' },
            { value: 100, date: 'Aug' },
            { value: 280, date: 'Sep' },
            { value: 250, date: 'Oct' },
            { value: 350, date: 'Nov' },
            { value: 140, date: 'Dec' },
        ],
        bounceRate: [
            { value: 5.7, date: 'Jan' },
            { value: 10, date: 'Feb' },
            { value: 23, date: 'Mar' },
            { value: 14, date: 'Apr' },
            { value: 39, date: 'May' },
            { value: 25, date: 'Jun' },
            { value: 37, date: 'Jul' },
            { value: 15, date: 'Aug' },
            { value: 29, date: 'Sep' },
            { value: 20, date: 'Oct' },
            { value: 45, date: 'Nov' },
            { value: 30, date: 'Dec' },
        ],
    }
    ]
});

mock.onGet('/api/reports/top-referrals').reply(200, {
    referrals: [
        [
            {
                search: 'Sites',
                title: 'Most Active Sites',
                color: '#FF9900',
                name: 'GLyphy',
                initials: 'GL',
                value: 6648
            },
            {
                color: '#127BF5',
                name: 'DesignStripe',
                initials: 'DS',
                value: 1374
            },
            {
                color: '#F73859',
                name: 'DesignValley',
                initials: 'DV',
                value: 20748
            },
            {
                color: '#3DDDAA',
                name: 'Neueubel',
                initials: 'DK',
                value: 32884
            },
            {
                color: '#127BF5',
                name: 'Last Year',
                initials: 'DS',
                value: 182874
            }
        ],
        [
            {
                search: 'Sort',
                title: 'Most Visited Sites',
                color: '#3DDDAA',
                name: 'GitHub',
                initials: 'GT',
                value: 53032
            },
            {
                color: '#E6F5FA',
                name: 'Twitter',
                initials: 'TW',
                value: 56156,
                fcolor: '#2E3D5B'
            },
            {
                color: '#FAF8F3',
                name: 'Hacker News',
                initials: 'HN',
                value: 23150,
                fcolor: '#2E3D5B'
            },
            {
                color: '#F0F4FF',
                name: 'Stack Overflow',
                initials: 'SO',
                value: 14093,
                fcolor: '#2E3D5B'
            },
            {
                color: colors.orange['900'],
                name: 'Reddit.com',
                initials: 'RD',
                value: 7251
            }
        ],
        [
            {
                search: 'Events',
                title: 'Top Events',
                color: '#FF9900',
                name: 'GLyphy',
                initials: 'GL',
                value: 6648
            },
            {
                color: '#127BF5',
                name: 'DesignStripe',
                initials: 'DS',
                value: 1374
            },
            {
                color: '#FAF8F3',
                name: 'Hacker News',
                initials: 'HN',
                value: 23150,
                fcolor: '#2E3D5B'
            },
            {
                color: '#3DDDAA',
                name: 'Neueubel',
                initials: 'DK',
                value: 32884
            },
            {
                color: '#F0F4FF',
                name: 'Stack Overflow',
                initials: 'SO',
                value: 14093,
                fcolor: '#2E3D5B'
            },
        ]
    ],
    filters: [
        {
            key: 'MOST_ACTIVE_SITES_FILTER_OPTIONS',
            label: 'Sites',
            data:
                [
                    {
                        label: 'All',
                        value: 'All',
                    },
                    {
                        label: 'Glyphy',
                        value: 'Glyphy',
                    },
                    {
                        label: 'DesignStripe',
                        value: 'DesignStripe',
                    },
                    {
                        label: 'DesignValley',
                        value: 'DesignValley',
                    },
                    {
                        label: 'Neueubel',
                        value: 'Neueubel',
                    },
                    {
                        label: 'Last Year',
                        value: 'Last Year',
                    },
                ]
        },
        {
            key: 'MOST_VISITED_SITES_FILTER_OPTIONS',
            label: 'Sort',
            data:
                [
                    {
                        label: 'Today',
                        value: 'Today',
                      },
                      {
                        label: 'Yesterday',
                        value: 'Yesterday',
                      },
                      {
                        label: 'Last Week',
                        value: 'Last Week',
                      },
                      {
                        label: 'Last Month',
                        value: 'Last Month',
                      },
                      {
                        label: 'Last Year',
                        value: 'Last Year',
                      }
                ]
        },
        {
            key: 'TOP_EVENTS_FILTER_OPTIONS',
            label: 'Events',
            data:
                [
                    {
                        label: 'Recents',
                        value: 'Recents',
                      },
                      {
                        label: 'Yesterday',
                        value: 'Yesterday',
                      },
                      {
                        label: 'Last Week',
                        value: 'Last Week',
                      },
                      {
                        label: 'Last Month',
                        value: 'Last Month',
                      },
                      {
                        label: 'Last Year',
                        value: 'Last Year',
                      },
                      {
                        label: 'All',
                        value: 'All',
                      }
                ]
        }
    ]
});

mock.onGet('/api/reports/filter-data').reply(200, {
    data: [
        {
            name: 'DrawKit',
            color: '#3DDDAA',
            pageView: [
                { value: 0, date: 'Jan' },
                { value: 5000, date: 'Feb' },
                { value: 4000, date: 'Mar' },
                { value: 5000, date: 'Apr' },
                { value: 4500, date: 'May' },
                { value: 4700, date: 'Jun' },
                { value: 5200, date: 'Jul' },
                { value: 12943, date: 'Aug' },
                { value: 5000, date: 'Sep' },
                { value: 6000, date: 'Oct' },
                { value: 5000, date: 'Nov' },
                { value: 13500, date: 'Dec' },
            ],
            uniqueUsers: [
                { value: 0, date: 'Jan' },
                { value: 2500, date: 'Feb' },
                { value: 2000, date: 'Mar' },
                { value: 3000, date: 'Apr' },
                { value: 2500, date: 'May' },
                { value: 2700, date: 'Jun' },
                { value: 3200, date: 'Jul' },
                { value: 7943, date: 'Aug' },
                { value: 3000, date: 'Sep' },
                { value: 2000, date: 'Oct' },
                { value: 3000, date: 'Nov' },
                { value: 9500, date: 'Dec' },
            ],
            averageTime: [
                { value: 105, date: 'Jan' },
                { value: 70, date: 'Feb' },
                { value: 220, date: 'Mar' },
                { value: 179, date: 'Apr' },
                { value: 150, date: 'May' },
                { value: 110, date: 'Jun' },
                { value: 90, date: 'Jul' },
                { value: 220, date: 'Aug' },
                { value: 280, date: 'Sep' },
                { value: 350, date: 'Oct' },
                { value: 150, date: 'Nov' },
                { value: 200, date: 'Dec' },
            ],
            bounceRate: [
                { value: 25.7, date: 'Jan' },
                { value: 10, date: 'Feb' },
                { value: 13, date: 'Mar' },
                { value: 34, date: 'Apr' },
                { value: 19, date: 'May' },
                { value: 25, date: 'Jun' },
                { value: 37, date: 'Jul' },
                { value: 15, date: 'Aug' },
                { value: 19, date: 'Sep' },
                { value: 0, date: 'Oct' },
                { value: 15, date: 'Nov' },
                { value: 20, date: 'Dec' },
            ],
        },
        {
            name: 'DesignStripe',
            color: '#1B7FF3',
            pageView: [
                { value: 12313, date: 'Jan' },
                { value: 2323, date: 'Feb' },
                { value: 23423, date: 'Mar' },
                { value: 4000, date: 'Apr' },
                { value: 1000, date: 'May' },
                { value: 3000, date: 'Jun' },
                { value: 4000, date: 'Jul' },
                { value: 10000, date: 'Aug' },
                { value: 9000, date: 'Sep' },
                { value: 12000, date: 'Oct' },
                { value: 10000, date: 'Nov' },
                { value: 13500, date: 'Dec' },
            ],
            uniqueUsers: [
                { value: 2000, date: 'Jan' },
                { value: 1500, date: 'Feb' },
                { value: 3000, date: 'Mar' },
                { value: 5000, date: 'Apr' },
                { value: 3500, date: 'May' },
                { value: 7700, date: 'Jun' },
                { value: 3200, date: 'Jul' },
                { value: 2943, date: 'Aug' },
                { value: 4000, date: 'Sep' },
                { value: 5000, date: 'Oct' },
                { value: 6000, date: 'Nov' },
                { value: 12500, date: 'Dec' },
            ],
            averageTime: [
                { value: 55, date: 'Jan' },
                { value: 170, date: 'Feb' },
                { value: 420, date: 'Mar' },
                { value: 279, date: 'Apr' },
                { value: 50, date: 'May' },
                { value: 10, date: 'Jun' },
                { value: 190, date: 'Jul' },
                { value: 200, date: 'Aug' },
                { value: 180, date: 'Sep' },
                { value: 250, date: 'Oct' },
                { value: 250, date: 'Nov' },
                { value: 40, date: 'Dec' },
            ],
            bounceRate: [
                { value: 15.7, date: 'Jan' },
                { value: 20, date: 'Feb' },
                { value: 23, date: 'Mar' },
                { value: 14, date: 'Apr' },
                { value: 29, date: 'May' },
                { value: 15, date: 'Jun' },
                { value: 27, date: 'Jul' },
                { value: 5, date: 'Aug' },
                { value: 29, date: 'Sep' },
                { value: 30, date: 'Oct' },
                { value: 25, date: 'Nov' },
                { value: 10, date: 'Dec' },
            ],
        },
        {
            name: 'Glyphy.io',
            color: '#FF9900',
            pageView: [
                { value: 7000, date: 'Jan' },
                { value: 5000, date: 'Feb' },
                { value: 4000, date: 'Mar' },
                { value: 5000, date: 'Apr' },
                { value: 4500, date: 'May' },
                { value: 4700, date: 'Jun' },
                { value: 10000, date: 'Jul' },
                { value: 12000, date: 'Aug' },
                { value: 5000, date: 'Sep' },
                { value: 6000, date: 'Oct' },
                { value: 5000, date: 'Nov' },
                { value: 13500, date: 'Dec' },
            ],
            uniqueUsers: [
                { value: 6000, date: 'Jan' },
                { value: 4500, date: 'Feb' },
                { value: 3000, date: 'Mar' },
                { value: 7000, date: 'Apr' },
                { value: 9500, date: 'May' },
                { value: 17700, date: 'Jun' },
                { value: 7200, date: 'Jul' },
                { value: 2943, date: 'Aug' },
                { value: 8000, date: 'Sep' },
                { value: 5000, date: 'Oct' },
                { value: 9000, date: 'Nov' },
                { value: 2500, date: 'Dec' },
            ],
            averageTime: [
                { value: 355, date: 'Jan' },
                { value: 70, date: 'Feb' },
                { value: 220, date: 'Mar' },
                { value: 179, date: 'Apr' },
                { value: 150, date: 'May' },
                { value: 310, date: 'Jun' },
                { value: 90, date: 'Jul' },
                { value: 100, date: 'Aug' },
                { value: 280, date: 'Sep' },
                { value: 150, date: 'Oct' },
                { value: 450, date: 'Nov' },
                { value: 140, date: 'Dec' },
            ],
            bounceRate: [
                { value: 35.7, date: 'Jan' },
                { value: 40, date: 'Feb' },
                { value: 13, date: 'Mar' },
                { value: 34, date: 'Apr' },
                { value: 59, date: 'May' },
                { value: 35, date: 'Jun' },
                { value: 37, date: 'Jul' },
                { value: 15, date: 'Aug' },
                { value: 39, date: 'Sep' },
                { value: 30, date: 'Oct' },
                { value: 45, date: 'Nov' },
                { value: 30, date: 'Dec' },
            ],
        },
        {
            name: 'Designvalley.club',
            color: '#571DFE',
            pageView: [
                { value: 770, date: 'Jan' },
                { value: 300, date: 'Feb' },
                { value: 1000, date: 'Mar' },
                { value: 2000, date: 'Apr' },
                { value: 4500, date: 'May' },
                { value: 7000, date: 'Jun' },
                { value: 5200, date: 'Jul' },
                { value: 1943, date: 'Aug' },
                { value: 11000, date: 'Sep' },
                { value: 5000, date: 'Oct' },
                { value: 7000, date: 'Nov' },
                { value: 13500, date: 'Dec' },
            ],
            uniqueUsers: [
                { value: 2000, date: 'Jan' },
                { value: 3500, date: 'Feb' },
                { value: 4000, date: 'Mar' },
                { value: 8000, date: 'Apr' },
                { value: 5500, date: 'May' },
                { value: 7700, date: 'Jun' },
                { value: 4200, date: 'Jul' },
                { value: 4943, date: 'Aug' },
                { value: 6000, date: 'Sep' },
                { value: 7000, date: 'Oct' },
                { value: 4000, date: 'Nov' },
                { value: 5500, date: 'Dec' },
            ],
            averageTime: [
                { value: 155, date: 'Jan' },
                { value: 170, date: 'Feb' },
                { value: 120, date: 'Mar' },
                { value: 279, date: 'Apr' },
                { value: 350, date: 'May' },
                { value: 210, date: 'Jun' },
                { value: 190, date: 'Jul' },
                { value: 200, date: 'Aug' },
                { value: 180, date: 'Sep' },
                { value: 350, date: 'Oct' },
                { value: 150, date: 'Nov' },
                { value: 340, date: 'Dec' },
            ],
            bounceRate: [
                { value: 25.7, date: 'Jan' },
                { value: 30, date: 'Feb' },
                { value: 23, date: 'Mar' },
                { value: 24, date: 'Apr' },
                { value: 49, date: 'May' },
                { value: 35, date: 'Jun' },
                { value: 17, date: 'Jul' },
                { value: 25, date: 'Aug' },
                { value: 59, date: 'Sep' },
                { value: 30, date: 'Oct' },
                { value: 25, date: 'Nov' },
                { value: 10, date: 'Dec' },
            ],
        },
        {
            name: 'Neubel',
            color: '#0C172E',
            pageView: [
                { value: 1000, date: 'Jan' },
                { value: 2000, date: 'Feb' },
                { value: 3000, date: 'Mar' },
                { value: 4000, date: 'Apr' },
                { value: 5500, date: 'May' },
                { value: 6700, date: 'Jun' },
                { value: 7200, date: 'Jul' },
                { value: 8294, date: 'Aug' },
                { value: 9000, date: 'Sep' },
                { value: 6000, date: 'Oct' },
                { value: 5000, date: 'Nov' },
                { value: 13500, date: 'Dec' },
            ],
            uniqueUsers: [
                { value: 1000, date: 'Jan' },
                { value: 4500, date: 'Feb' },
                { value: 3000, date: 'Mar' },
                { value: 3000, date: 'Apr' },
                { value: 4500, date: 'May' },
                { value: 5700, date: 'Jun' },
                { value: 4200, date: 'Jul' },
                { value: 7943, date: 'Aug' },
                { value: 3000, date: 'Sep' },
                { value: 8000, date: 'Oct' },
                { value: 6000, date: 'Nov' },
                { value: 12500, date: 'Dec' },
            ],
            averageTime: [
                { value: 55, date: 'Jan' },
                { value: 270, date: 'Feb' },
                { value: 320, date: 'Mar' },
                { value: 179, date: 'Apr' },
                { value: 450, date: 'May' },
                { value: 110, date: 'Jun' },
                { value: 90, date: 'Jul' },
                { value: 100, date: 'Aug' },
                { value: 280, date: 'Sep' },
                { value: 250, date: 'Oct' },
                { value: 350, date: 'Nov' },
                { value: 140, date: 'Dec' },
            ],
            bounceRate: [
                { value: 5.7, date: 'Jan' },
                { value: 10, date: 'Feb' },
                { value: 23, date: 'Mar' },
                { value: 14, date: 'Apr' },
                { value: 39, date: 'May' },
                { value: 25, date: 'Jun' },
                { value: 37, date: 'Jul' },
                { value: 15, date: 'Aug' },
                { value: 29, date: 'Sep' },
                { value: 20, date: 'Oct' },
                { value: 45, date: 'Nov' },
                { value: 30, date: 'Dec' },
            ],
        },
    ]
});