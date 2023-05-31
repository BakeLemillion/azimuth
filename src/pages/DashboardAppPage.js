import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { FormToDeliver } from "../components/formToDeliver"

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item container direction="row" spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <FormToDeliver title={"Отправитель"} />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FormToDeliver title={"Получатель"} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper style={{ height: "50vh", background: "lightgrey" }} />
        </Grid>
    </Grid>
    </>
  );
}
