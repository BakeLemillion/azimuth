import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Paper, TextField, Card, Button,
  CardHeader, CardContent, Autocomplete, Alert, AlertTitle,  } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import { FormToDeliver } from '../components/formToDeliver';
import {services, places, payments, senders} from "../constants/mock"

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={4} justify="center">
        <Grid item container direction="row" spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <FormToDeliver title={'Отправитель'} />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <FormToDeliver title={'Получатель'} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <Grid container justify="between" spacing={1}>
              <Grid item md={12} xs={12} sm={12}>
                <Card md={12}>
                  <CardHeader title={'Детали накладной'} />
                  <CardContent md={12}>
                    <Grid item container wrap="wrap" spacing={2} justify="center">
                      <Grid item xs={12} sm={12} md={4}>
                        <Autocomplete
                          fullWidth
                          label="Услуга"
                          id="combo-box-demo"
                          options={services}
                          renderInput={(params) => (
                            <TextField {...params} label="Услуга*" placeholder="Выберите услугу" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Autocomplete
                          fullWidth
                          label="Количество мест"
                          id="combo-box-demo"
                          options={places}
                          renderInput={(params) => (
                            <TextField {...params} label="Количество мест*" placeholder="Укажите кол-во отправлений" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <TextField
                          fullWidth
                          error={false}
                          id="outlined-error"
                          label="Объявленная ценность *"
                          placeholder="1500"
                          type='number'
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Autocomplete
                          fullWidth
                          label="Количество мест"
                          id="combo-box-demo"
                          options={payments}
                          renderInput={(params) => (
                            <TextField {...params} label="Способ оплаты" placeholder="Выберите способ оплаты" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Autocomplete
                          fullWidth
                          id="combo-box-demo"
                          options={senders}
                          renderInput={(params) => (
                            <TextField {...params} label="Плательщик" placeholder="Выберите плательщика" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <TextField
                          fullWidth
                          error={false}
                          id="outlined-error"
                          label="ИИН/БИН плательщика *"
                          placeholder=""
                          type='number'
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <TextField
                          fullWidth
                          error={false}
                          id="outlined-error"
                          label="Наложенный платеж"
                          placeholder="Пример: 1000 тг."
                          type='text'
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <TextField
                          fullWidth
                          error={false}
                          id="outlined-error"
                          label="Примечания"
                          placeholder=""
                          type='text'
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
          <Paper mt="2" >
            <Grid container justify="center" spacing={1} style={{ margin: "24px 0" }}>
            <Alert severity="warning">
              <AlertTitle>ВАЖНО!</AlertTitle>
              Создание накладной в личном кабинете не предусматривает вызов курьера. 
              Чтобы оформить заявку на вызов курьера воспользуйтесь либо онлайн-сервисом вызов курьера, либо по телефону.
            </Alert>
            </Grid>
          </Paper>
          <Paper md={12}>
            <Grid container justify="center" spacing={1}>
              <Grid item xs={12} sm={12} md={4}>
                <Grid xs={12} sm={12} md={4} justify="center">
                    <Button variant="contained" size='large'>Отправить</Button>
                  </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
