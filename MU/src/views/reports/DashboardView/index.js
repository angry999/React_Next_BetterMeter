import React, { useState, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';

import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import Page from 'src/components/Page';
import Header from './Header';
import PerformanceOverTime from './PerformanceOverTime';
import RoiPerCustomer from './RoiPerCustomer';
import FavoriteSearchView from './FavoriteSearchView';
import TeamTasks from './TeamTasks';

import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f7f5f5',
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  },
  tabContainer: {
    background: '#fcfafa',
    borderRadius: 0,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    width: '77.2%'
  },
  listContainer: {
    width: '26%'
  },
  chartContainer: {
    width: '74%'
  },
  fvItem: {
    width: '445px'
  },
  newCard: {
    width: 295,
    height: 560,
    background: "#FCFAFA url('/static/images/test/icon-plus.svg') no-repeat center",
    borderRadius: '20px'
  },
  footer: {
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'IBM Plex Sans',
    lineHeight: '100%',
    textAlign: 'right',
    color: '#5D6677',
    padding: '140px 0 31px',
    paddingRight: 30
  }
}));

const CHART_UNIT = {
  NUMBER: 'number',
  TIME: 'time',
  PERCENTAGE: 'percentage'
}

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

function DashboardView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [data, setData] = useState(null);
  const [tab, setTab] = useState(TABS.PAGE_VIEW)
  const [referrals, setReferrals] = useState(null);
  const [filterData, setFilterData] = useState(null);

  const getReferrals = useCallback(() => {
    axios
      .get('/api/reports/top-referrals')
      .then((response) => {
        if (isMountedRef.current) {
          setReferrals(response.data);
        }
      });
  }, [isMountedRef]);

  const getData = useCallback(() => {
    axios
      .get('/api/reports/charts')
      .then((response) => {
        if (isMountedRef.current) {
          setData(response.data.data[2]);
        }
      });
  }, [isMountedRef]);

  const getFilterData = useCallback(() => {
    axios
      .get('/api/reports/filter-data')
      .then((response) => {
        if (isMountedRef.current) {
          setFilterData(response.data.data);
        }
      });
  }, [isMountedRef]);


  useEffect(() => {
    getData();
    getReferrals();
    getFilterData();
  }, [getData]);

  if (!data || !referrals || !filterData) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={0}
        >
          <Grid
            container
            className={classes.tabContainer}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <RoiPerCustomer
                name="Pageviews"
                value="223.5k"
                description="an instance of a user visiting a particular page on a website."
                delta={15}
                bkImg={'/static/images/test/icon-trend-up.svg'}
                bkColor={'#fff'}
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <RoiPerCustomer
                name="Unique Users"
                value="74.858k"
                description="an instance of a user visiting a particular page on a website."
                delta={-15}
                bkImg={'/static/images/test/icon-trend-up.svg'}
                bkColor={'#fcfafa'}
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <RoiPerCustomer
                name="Average visit time"
                value="01:45"
                description="an instance of a user visiting a particular page on a website."
                delta={15}
                bkImg={'/static/images/test/icon-clock.svg'}
                bkColor={'#fcfafa'}
              />
            </Grid>
            <Grid
              item
              lg={3}
              sm={6}
              xs={12}
            >
              <RoiPerCustomer
                name="Bounce Rate"
                value="25.7%"
                description="an instance of a user visiting a particular page on a website."
                delta={-15}
                bkImg={'/static/images/test/icon-branches.svg'}
                bkColor={'#fcfafa'}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
        >
          <Grid
            item
            lg={'auto'}
            sm={6}
            xs={12}
            className={classes.listContainer}
          >
            <TeamTasks />
          </Grid>
          <Grid
            item
            lg={'auto'}
            sm={6}
            xs={12}
            className={classes.chartContainer}
          >
            <PerformanceOverTime
              color={data.color}
              data={data[tab]}
              filterData={filterData}
              unit={TAB_CHART_UNITS[tab]} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={6}
          style={{ marginTop: 20 }}
        >
          {referrals.referrals.map((referral, id) =>
            <Grid
              item
              key={id}
            >
              <FavoriteSearchView referrals={referral} filter={referrals.filters[id]} />
            </Grid>
          )}

          <Grid
            item
          >
            <Card
              className={classes.newCard}
            >
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={6}
          style={{ display: 'block', textAlign: 'right' }}
        >
          <Typography
            color="inherit"
            variant="subtitle1"
            className={classes.footer}
          >
            © All right reserved. BetterMeter
                </Typography>
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardView;
