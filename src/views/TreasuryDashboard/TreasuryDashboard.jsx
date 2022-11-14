import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Paper, Grid, Typography, Box, Zoom, Container, useMediaQuery } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart/Chart.jsx";
import { trim, formatCurrency } from "../../helpers";
import {
  treasuryDataQuery,
  rebasesDataQuery,
  bulletpoints,
  tooltipItems,
  tooltipInfoMessages,
  itemType,
} from "./treasuryData.js";
import {
  TotalValueDepositedGraph,
  MarketValueGraph,
  RiskFreeValueGraph,
  ProtocolOwnedLiquidityGraph,
  OHMStakedGraph,
  RunwayAvailableGraph,
} from "./components/Graph/Graph";

import { useTheme } from "@material-ui/core/styles";
import "./treasury-dashboard.scss";
import apollo from "../../lib/apolloClient";
import InfoTooltip from "src/components/InfoTooltip/InfoTooltip.jsx";

function TreasuryDashboard() {
  const [data, setData] = useState(null);
  const [apy, setApy] = useState(null);
  const [runway, setRunway] = useState(null);
  // const [staked, setStaked] = useState(null);
  const theme = useTheme();
  const smallerScreen = useMediaQuery("(max-width: 650px)");
  const verySmallScreen = useMediaQuery("(max-width: 379px)");

  const staked = useSelector(state => {
    return state.app.Staked;
  });
  const treasuryMarketValue = useSelector(state => {
    return state.app.treasuryMarketValue;
  });
  const marketPrice = useSelector(state => {
    return state.app.marketPrice;
  });
  const circSupply = useSelector(state => {
    return state.app.circSupply;
  });
  const totalSupply = useSelector(state => {
    return state.app.totalSupply;
  });
  const marketCap = useSelector(state => {
    return state.app.marketCap;
  });

  const currentIndex = useSelector(state => {
    return state.app.currentIndex;
  });

  const backingPerOhm = useSelector(state => {
    return state.app.treasuryMarketValue / state.app.circSupply;
  });
  const stakingAPY = useSelector(state => {
    return state.app.stakingAPY
  })
  const wsOhmPrice = useSelector(state => {
    return state.app.marketPrice * state.app.currentIndex;
  });

  const trimmedStakingAPY = trim(stakingAPY * 100, 1);

  useEffect(() => {
  }, []);

  return (
    <div id="treasury-dashboard-view" className={`${smallerScreen && "smaller"} ${verySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: smallerScreen || verySmallScreen ? "0" : "3.3rem",
          paddingRight: smallerScreen || verySmallScreen ? "0" : "3.3rem",
        }}
      >
        <Zoom in={true}>
          <Paper className="ohm-card">
            <Grid container spacing={2} className="data-grid">
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  CST Price
                </Typography>
                <Typography variant="h5">
                  {/* appleseed-fix */}
                  {marketPrice ? formatCurrency(marketPrice, 2) : <Skeleton type="text" />}
                </Typography>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Current Index
                  <InfoTooltip
                    message={
                      "The current index tracks the amount of scST accumulated since the beginning of staking. Basically, how much scST one would have if they staked and held a single CST from day 1."
                    }
                  />
                </Typography>
                <Typography variant="h5">
                  {currentIndex ? trim(currentIndex, 2) + " sCST" : <Skeleton type="text" />}
                </Typography>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Circulating Supply (total)
                </Typography>
                <Typography variant="h5">
                  {circSupply && totalSupply ? (
                    (trim(circSupply, 2)) + " / " + (trim(totalSupply, 2))
                  ) : (
                    <Skeleton type="text" />
                  )}
                </Typography>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  APY
                </Typography>
                <Typography variant="h5">
                  {stakingAPY ? new Intl.NumberFormat("en-US").format(trimmedStakingAPY) + '%' : <Skeleton type="text" />}
                </Typography>
              </Grid>

              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  CST Staked
                </Typography>
                <Typography variant="h5">
                  {staked ? `${trim(staked, 2)}%` : <Skeleton type="text" />}
                </Typography>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Market Cap
                </Typography>
                <Typography variant="h5">
                  {marketCap && formatCurrency(marketCap, 2)}
                  {!marketCap && <Skeleton type="text" />}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Zoom>

      </Container>
    </div>
  );
}

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TreasuryDashboard />
  </QueryClientProvider>
);