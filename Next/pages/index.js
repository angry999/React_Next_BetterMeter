import { useCallback, useMemo, useState } from 'react'
import _ from 'lodash'
import styles from './index.module.scss'
import TopNavigation from '../components/TopNavigation'
import PageHeader from '../components/PageHeader'
import PageContainer from '../components/PageContainer'
import SummaryCard from '../components/SummaryCard'
import TrendsList from '../components/TrendsList'
import NewCard from '../components/NewCard'
import Select from '../components/Select'
import CalendarSelect from '../components/CalendarSelect'
import Tabs from '../components/Tabs'
import {
  MOST_ACTIVE_SITES_FILTER_OPTIONS,
  MOST_VISITED_SITES_FILTER_OPTIONS,
  TOP_EVENTS_FILTER_OPTIONS,
  MEDIA_QUERY,
  CHART_UNIT,
} from '../constants'
import DataItem from '../components/DataItem'
import Footer from '../components/Footer'
import Chart from '../components/Chart'
import ChartLegend from '../components/ChartLegend'
import useResponsive from '../hooks/useResponsive'

const TABS = {
  PAGE_VIEW: 'pageView',
  UNIQUE_USERS: 'uniqueUsers',
  AVERAGE_TIME: 'averageTime',
  BOUNCE_RATE: 'bounceRate',
}

const TAB_CHART_UNITS = {
  [TABS.PAGE_VIEW]: CHART_UNIT.NUMBER,
  [TABS.UNIQUE_USERS]: CHART_UNIT.NUMBER,
  [TABS.AVERAGE_TIME]: CHART_UNIT.TIME,
  [TABS.BOUNCE_RATE]: CHART_UNIT.PERCENTAGE,
}

const SiteOption = ({ option, value }) => (
  <div className={styles.siteOption}>
    <div
      className={styles.siteOptionColor}
      style={option.value === value ? { backgroundColor: option.color } : {}}
    />
    {option.label}
  </div>
)

export default function Home({ data }) {
  const { isMobile } = useResponsive()
  const [siteFilter, setSiteFilter] = useState('Glyphy.io')
  const [eventFilter, setEventFilter] = useState('All')
  const [tab, setTab] = useState(TABS.PAGE_VIEW)
  const changeTab = useCallback(
    (newTab) => {
      setTab(newTab)
    },
    [setTab]
  )

  const selectSiteFilter = useCallback(
    (newSiteFilter) => {
      setSiteFilter(newSiteFilter)
    },
    [setSiteFilter]
  )

  const selectEventFilter = useCallback(
    (newEventFilter) => {
      setEventFilter(newEventFilter)
    },
    [setEventFilter]
  )

  const siteData = useMemo(() => _.find(data.sites, { name: siteFilter }), [
    data.sites,
    siteFilter,
  ])

  const sitesFilterOptions = useMemo(
    () =>
      data.sites.map((site) => ({
        label: site.name,
        color: site.color,
        value: site.name,
      })),
    [data.sites]
  )

  const dataContent = (
    <div className={styles.data} key="data">
      <div className={styles.dataList}>
        <TrendsList items={data.trends} />
        <div className={styles.dataSeeAll}>
          <span>See All</span>
        </div>
      </div>

      <div className={styles.dataChart}>
        <ChartLegend selected={siteFilter} items={sitesFilterOptions} />
        <Chart
          color={siteData.color}
          data={siteData[tab]}
          unit={TAB_CHART_UNITS[tab]}
        />
      </div>
    </div>
  )

  return (
    <>
      <TopNavigation />

      <PageContainer>
        <PageHeader
          title="Analytics"
          aside={
            <div className={styles.filters}>
              <Select
                label="Sites"
                value={siteFilter}
                onChange={selectSiteFilter}
                options={sitesFilterOptions}
                className={styles.filterSelect}
                theme="dark"
                optionComponent={SiteOption}
                full
              />
              <Select
                label="Events"
                value={eventFilter}
                onChange={selectEventFilter}
                options={TOP_EVENTS_FILTER_OPTIONS}
                className={styles.filterSelect}
                full
              />
              <CalendarSelect
                label="Date"
                value="Aug 7 - Aug 15 2020"
                className={styles.filterSelect}
              />
            </div>
          }
        />

        <Tabs selected={tab} onTabClick={changeTab}>
          <DataItem
            name="Pageviews"
            icon="trendUp"
            value="223.5k"
            description="an instance of a user visiting a particular page on a website."
            delta={15}
            tab={TABS.PAGE_VIEW}
            key={TABS.PAGE_VIEW}
          />
          {isMobile && tab === TABS.PAGE_VIEW && dataContent}
          <DataItem
            name="Unique Users"
            icon="trendUp"
            value="74.858"
            description="an instance of a user visiting a particular page on a website."
            delta={-15}
            tab={TABS.UNIQUE_USERS}
            key={TABS.UNIQUE_USERS}
          />
          {isMobile && tab === TABS.UNIQUE_USERS && dataContent}
          <DataItem
            name="Average visit time"
            icon="clock"
            value="01:45"
            description="an instance of a user visiting a particular page on a website."
            delta={15}
            tab={TABS.AVERAGE_TIME}
            key={TABS.AVERAGE_TIME}
          />
          {isMobile && tab === TABS.AVERAGE_TIME && dataContent}
          <DataItem
            name="Bounce Rate"
            icon="branches"
            value="25.7%"
            description="an instance of a user visiting a particular page on a website."
            delta={-15}
            tab={TABS.BOUNCE_RATE}
            key={TABS.BOUNCE_RATE}
          />
          {isMobile && tab === TABS.BOUNCE_RATE && dataContent}
        </Tabs>

        {!isMobile && dataContent}

        <div className={styles.summaryCards}>
          <SummaryCard
            title="Most Active Sites"
            data={data.mostActiveSites}
            filter={{
              label: 'Sites',
              options: MOST_ACTIVE_SITES_FILTER_OPTIONS,
            }}
          />
          <SummaryCard
            title="Most Visited Sites"
            data={data.mostVisitedSites}
            filter={{
              label: 'Sort',
              options: MOST_VISITED_SITES_FILTER_OPTIONS,
            }}
          />
          <SummaryCard
            title="Top Events"
            data={data.topEvents}
            filter={{
              label: 'Events',
              options: TOP_EVENTS_FILTER_OPTIONS,
            }}
          />
          <NewCard />
        </div>

        <Footer />
      </PageContainer>
    </>
  )
}

export async function getStaticProps() {
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

  const sites = [
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

  const data = { mostVisitedSites, mostActiveSites, topEvents, trends, sites }

  return {
    props: {
      data,
    },
  }
}
