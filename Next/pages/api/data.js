// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mostVisitedSites = [
  { abbr: 'DK', color: '#3DDDAA', name: 'Drawkit', value: 56156 },
  {
    abbr: '4/10',
    color: '#FAF8F3',
    dark: true,
    name: 'Yesterday',
    value: 1374,
  },
  {
    abbr: '1-7',
    color: '#E6F5FA',
    dark: true,
    name: 'Last Week',
    value: 20748,
  },
  {
    abbr: 'SEP',
    color: '#F0F4FF',
    dark: true,
    name: 'Last Month',
    value: 32884,
  },
  {
    abbr: '2019',
    color: '#EFFCF0',
    dark: true,
    name: 'Last Year',
    value: 182874,
  },
]

const mostActiveSites = [
  { abbr: 'GL', color: '#FF9900', name: 'Glyphy', value: 6648 },
  {
    abbr: 'DS',
    color: '#127BF5',
    name: 'DesignStripe',
    value: 1374,
  },
  {
    abbr: 'DV',
    color: '#F73859',
    name: 'DesignValley',
    value: 20748,
  },
  { abbr: 'DK', color: '#3DDDAA', name: 'Neueubel', value: 32884 },
  {
    abbr: 'DS',
    color: '#127BF5',
    name: 'Last Year',
    value: 182874,
  },
]

const topEvents = [
  { abbr: '5/10', color: '#FF9900', name: 'Today', value: 56156 },
  {
    abbr: '4/10',
    color: '#FAF8F3',
    dark: true,
    name: 'Yesterday',
    value: 1374,
  },
  {
    abbr: '1-7',
    color: '#E6F5FA',
    dark: true,
    name: 'Last Week',
    value: 20748,
  },
  {
    abbr: 'SEP',
    color: '#F0F4FF',
    dark: true,
    name: 'Last Month',
    value: 32884,
  },
  {
    abbr: '2019',
    color: '#EFFCF0',
    dark: true,
    name: 'Last Year',
    value: 182874,
  },
]

const trends = [
  { abbr: 'GL', color: '#FF9900', type: 'up', value: 264738 },
  { abbr: 'DS', color: '#127BF5', type: 'good', value: 64738 },
  { abbr: 'GL', color: '#FF9900', type: 'up', value: 23738 },
  { abbr: 'DK', color: '#3DDDAA', type: 'hot', value: 8837 },
  { abbr: 'DS', color: '#127BF5', type: 'bad', value: 5375 },
  { abbr: 'NB', color: '#84868A', type: 'up', value: 3923 },
]

export default (req, res) => {
  res.statusCode = 200
  res.json({ mostVisitedSites, mostActiveSites, topEvents, trends })
}
