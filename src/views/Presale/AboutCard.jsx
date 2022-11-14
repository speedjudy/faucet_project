import { Paper, CardHeader, Tabs, Box, Typography, FormControl, OutlinedInput, InputAdornment } from "@material-ui/core";
export function AboutCard() {
  return (
    <Paper className="ohm-card">
      <Box display="flex">
        <CardHeader title="About Liquidity Bootstrap Event (LBE)" />
      </Box>
      <Typography variant="h6">
        ● Only whitelisted users can join the pre-sale
      </Typography>
      <Typography variant="h6">
        ● Pre-sale Date: from 15th April 2022 08:00:00 UTC to 17th April 2022 23:59:00 UTC
      </Typography>
      <Typography variant="h6">
        ● Token: CST
      </Typography>
      <Typography variant="h6">
        ● Price per token: 10 BUSD per CST
      </Typography>
      <Typography variant="h6">
        ● Each whitelisted address can buy a maximum of 1000 BUSD
      </Typography>
      <Typography variant="h6">
        ● Vesting Period: Linearly release over 14 days from launching date
      </Typography>
    </Paper>
  );
}