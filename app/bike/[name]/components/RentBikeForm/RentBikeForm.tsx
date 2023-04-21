'use client';

import type { CSSProperties, FC as ReactFC } from 'react';

import type { DefaultValues } from 'react-hook-form';

import type { Bike } from '@Bike/domain/entities';

import { useState } from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/es';

import { Modal } from '../Modal/Modal';

import Link from 'next/link';

import PedalBikeIcon from '@mui/icons-material/PedalBike';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Grid, Badge } from '@mui/material';

import { useRentBikeForm } from './hooks/useRentBikeForm';

import { TextInput } from '../TextInput/TextInput';
import { EmailInput } from '../EmailInput/EmailInput';
import { DatePickerInput } from '../DatePickerInput/DatePickerInput';
import { NumberInput } from '../NumberInput/NumberInput';

import { Button } from '../Button/Button';

import { useForm } from 'react-hook-form';

import { calculateRentCost } from '@Bike/application/calculateRentCost/calculateRentCost';

import styles from './styles/RentBikeForm.module.scss';

interface Props {
    className?: string | undefined;
    style?: CSSProperties;
    bike: Bike;
}

type FormValues = {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    startdate: any;
    days: string | undefined;
};

const defaultValues: DefaultValues<FormValues> = {
    name: undefined,
    email: undefined,
    phone: undefined,
    days: '1',
    startdate: dayjs()
};

export const RentBikeForm: ReactFC<Props> = ({ className, style, bike, ...rest }) => {
    const [bikeToRent, setBikeToRent] = useState<any>({});
    const [showModal, setShowModal] = useState<boolean>(false);
    const [dateSetted, setDateSetted] = useState<any>(dayjs());
    const [rentDays, setRentDays] = useState<number>(1);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues
    });
    const { convertDateFromDayjsToDate } = useRentBikeForm();
    const onSubmit = (data: any) => {
        if (
            !Number.isNaN(dateSetted.$y) &&
            !Number.isNaN(dateSetted.$M) &&
            !Number.isNaN(dateSetted.$D)
        ) {
            const formattedData = {
                ...data,
                bike: bike,
                days: parseInt(data.days),
                startdate: convertDateFromDayjsToDate(dateSetted)
            };
            const response = calculateRentCost(formattedData);
            setBikeToRent(response);
            setShowModal(true);
        }
    };
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="es"
        >
            <form
                className={
                    className ? `${styles.form} className` : `${styles.form}`
                }
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    ...style
                }}
                {...rest}
            >
                <Grid
                    container
                    className={styles.title}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <h4>Solicitud de Alquiler</h4>
                    </Grid>
                </Grid>
                <Grid
                    container
                    className={styles.row}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextInput
                            errors={errors}
                            label="Nombre"
                            name="name"
                            register={register}
                            required
                            variant="outlined"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <EmailInput
                            errors={errors}
                            label="Email"
                            name="email"
                            register={register}
                            required
                            variant="outlined"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <TextInput
                            errors={errors}
                            label="Teléfono"
                            name="phone"
                            register={register}
                            required
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    className={styles.row}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <DatePickerInput
                            control={control}
                            errors={errors}
                            name="startdate"
                            label="Fecha inicial del alquiler"
                            required
                            setDateSetted={setDateSetted}
                            disablePast
                            validate={() => {
                                if (dateSetted === null) {
                                    return false;
                                }
                                if (
                                    !Number.isNaN(dateSetted.$y) ||
                                    !Number.isNaN(dateSetted.$M) ||
                                    !Number.isNaN(dateSetted.$D)
                                ) {
                                    return true;
                                }
                                return false;
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <NumberInput
                            errors={errors}
                            label="Dias en renta"
                            name="days"
                            register={register}
                            required
                            variant="outlined"
                            setRentDays={setRentDays}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    className={styles.dayscontainer}
                >
                    <span className={styles.days}>Dias de alquiler</span>
                    <Badge
                        badgeContent={rentDays}
                        color="primary"
                    >
                        <PedalBikeIcon className={styles.icon} />
                    </Badge>
                </Grid>
                <Grid
                    container
                    className={styles.btngroup}
                >
                    <Link href="/">
                        <Button
                            background="#ff5766"
                            borderColor="#ff5766"
                            hoverBackground="#ff4757"
                            textColor="#ffffff"
                            type="button"
                        >
                            Regresar
                        </Button>
                    </Link>
                    <Button
                        background="#7a33cc"
                        borderColor="#6229a3"
                        hoverBackground="#682bad"
                        textColor="#ffffff"
                        type="submit"
                    >
                        Solicitar
                    </Button>
                </Grid>
            </form>
            <Modal 
                title='Solicitud de Alquiler de Bicicleta'
                description='¿Estas seguro que quieres proceder al alquiler?'
                open={showModal}
                handleChange={setShowModal}
                bikeToRent={bikeToRent}
            />
        </LocalizationProvider>
    );
};
