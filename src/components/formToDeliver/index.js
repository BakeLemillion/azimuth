import React from "react"
import { Grid, Paper, Card, CardHeader, CardContent, TextField, Autocomplete } from '@mui/material';

export const FormToDeliver = ({title}) => {

    const citys = [
        {
            label: "Алматы",
        },
        {
            label: "Баканас",
        },
        {
            label: "Бирлик",
        },
        {
            label: "Кеген",
        },
        {
            label: "Жаркент",
        }
    ]

    return (
        <Paper>
            <Grid container justify="center" spacing={1}>
                <Grid item md={12}>
                    <Card md={12}>
                        <CardHeader title={title}/>
                            <CardContent md={12}>
                                <Grid item container spacing={2} justify="center">
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField 
                                            fullWidth
                                            error={false}
                                            id="outlined-error"
                                            label="Наименование*"
                                            placeholder="Наименование отправителя"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                    <Autocomplete
                                            fullWidth
                                            placeholder="Начните вводить название города"
                                            label="Город *"
                                            id="combo-box-demo"
                                            options={citys}
                                            renderInput={(params) => <TextField {...params} 
                                            label="Город*" placeholder="Начните вводить название города"/>}
                                            />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField 
                                            fullWidth
                                            error={false}
                                            id="outlined-error"
                                            label="Адрес *"
                                            placeholder="Адрес отправителя"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <TextField 
                                            fullWidth
                                            error={false}
                                            id="outlined-error"
                                            label="Телефон отправителя *"
                                            placeholder="Адрес отправителя"
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    )
}