import { Paper, Button, Tabs, Box, Grid, FormControl, OutlinedInput, InputAdornment, Typography } from "@material-ui/core";
import InfoTooltipMulti from "../../components/InfoTooltip/InfoTooltipMulti";

import TabPanel from "../../components/TabPanel";
import CardHeader from "../../components/CardHeader/CardHeader";
export function PresaleCard({address, cstpPrice, cstPurchaseBalance, cstpTotalSupply, cstInCirculation, cstpBalance, inputBUSDAmount, 
    hasAllowance, setCSTPBalanceCallback, setBUSDBalanceCallback, setMax, modalButton}) {
    return (
        <Paper className="ohm-card">
        <Box display="flex">
          <CardHeader title="Liquidity Bootstrap Event (LBE)" />
        </Box>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={6} sm={6} md={6} lg={6} />
              <Grid item xs={6} sm={6} md={6} lg={6}>
                <Typography align="right">CST Price: <b>${cstpPrice}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Purchased CST: <b>{cstPurchaseBalance.toFixed(2) | 0}</b></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <p>Total Sale Amount</p>
                  </div>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    placeholder=""
                    readOnly={true}
                    value={cstpTotalSupply ? cstpTotalSupply : '-'}
                  // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <p>In Circulation</p>
                  </div>
                  <OutlinedInput
                    value={cstInCirculation ? cstpTotalSupply- cstInCirculation / cstpPrice : '-'}
                    readOnly={true}
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={0}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <p>CST Amount</p>
                  </div>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    placeholder="0"
                    value={cstpBalance ? cstpBalance : ''}
                    onChange={e => setCSTPBalanceCallback(e.target.value)}
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={0}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="text" onClick={setMax}>
                          Max
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  <div>
                    <p>BUSD</p>
                  </div>
                  <OutlinedInput
                    type="number"
                    placeholder="0"
                    value={inputBUSDAmount ? inputBUSDAmount : ''}
                    onChange={e => setBUSDBalanceCallback(e.target.value)}
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={0}
                    endAdornment={
                      <InputAdornment position="end">
                        <Button variant="text" onClick={setMax}>
                          Max
                        </Button>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="flex-end" style={{ marginTop: '20px' }}>
              <Grid item xs={12} sm={4} md={4} lg={4} />
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                  {address ? (hasAllowance() ? modalButton[1] : modalButton[2]) : modalButton[0]}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
}