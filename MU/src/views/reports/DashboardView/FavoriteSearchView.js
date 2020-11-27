import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Card,
    CardHeader,
    Divider,
    // Select,
    MenuItem,
    FormControl,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    makeStyles
} from '@material-ui/core';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

// import styles from 'src/components/Select/styles.module.scss'
import Select from 'src/components/Select'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 445,
        height: 560,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    avatar: {
        fontSize: 13,
        fontFamily: 'DM Sans',
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.common.white
    },
    cardHeader: {
        '& > div > span': {
            fontFamily: 'DM Sans,Arial,Helvetica,sans-serif',
            fontWeight: 700,
            fontSize: '24px'
        },
        paddingLeft: '7px',
        marginLeft: '10px',
        marginRight: 0,
        paddingRight: 0
    },
    moreButton: {
        marginTop: 13,
        '& > span > svg': {
            fontSize: '30px'
        }
    },
    listContainer: {
        marginLeft:15, 
        marginRight:15
    },
    listItem: {
        padding: '17px 0px 17px 0px',
        borderBottom: 'solid 1px #e3e3e3'
    },
    listItemLast: {
        padding: '17px 0px 17px 0px',
    },
    listItemText: {
        '& > span': {
            fontFamily: 'DM Sans,Arial,Helvetica,sans-serif',
            fontWeight: 500,
            fontSize: '20px'
        }
    },
    listItemSecText: {
        fontFamily: 'DM Mono,Arial,Helvetica,sans-serif',
        fontWeight: 500,
        fontSize: '20px',
        color: '#000'
    },
    formControl: {
        display: 'block',
        margin: theme.spacing(1),
        minWidth: 120,
        marginTop: 20,
        marginBottom: 20
    },
    filter: {
        margin: '5px 0 10px 22px'
    },
    filterSelectHandle: {
        fontSize: '18px'
    },
    midTitle:
    {
        color: '#BDBDBD',
        fontSize: 18,
        fontWeight: 500,
        fontFamily: 'DM Sans',
        float: 'left',
        paddingLeft: 20
    },
    selectItem: {
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'DM Sans',
        marginLeft: 3
    }
}));

function FavoriteSearchView({ className, referrals, filter, ...rest }) {
    const classes = useStyles(); 
    const [filterValue, setFilterValue] = useState(filter.value || filter.data[0].value)

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                action={<GenericMoreButton className={classes.moreButton} />}
                className={classes.cardHeader}
                title={referrals[0].title}
            />

            <div className={classes.filter}>
                <Select
                    options={filter.data}
                    label={filter.label}
                    value={filterValue}
                    onChange={setFilterValue}
                    handleClassName={classes.filterSelectHandle}
                />
            </div>
            {/* <FormControl className={classes.formControl}>
                <Typography
                    color="inherit"
                    variant="subtitle1"
                    className={classes.midTitle}
                >
                    {referrals[0].search}:
                </Typography>
                <Select
                    disableUnderline
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    className={classes.selectItem}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl> */}

            <List className={classes.listContainer}>
                {referrals.map((referral, i) => (
                    i == 4 ?
                        <ListItem
                            divider={i < referral.length - 1}
                            key={referral.name}
                            className={classes.listItemLast}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                    size="small"
                                    style={referral.fcolor ? { backgroundColor: referral.color, color: referral.fcolor } : { backgroundColor: referral.color }}
                                >
                                    {referral.initials}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={referral.name}
                                primaryTypographyProps={{ variant: 'h6' }}
                                className={classes.listItemText}
                            />
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                className={classes.listItemSecText}
                            >
                                {new Intl.NumberFormat("en-US", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(referral.value)}
                            </Typography>
                        </ListItem>
                        :
                        <ListItem
                            divider={i < referral.length - 1}
                            key={referral.name}
                            className={classes.listItem}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                    size="small"
                                    style={referral.fcolor ? { backgroundColor: referral.color, color: referral.fcolor } : { backgroundColor: referral.color }}
                                >
                                    {referral.initials}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={referral.name}
                                primaryTypographyProps={{ variant: 'h6' }}
                                className={classes.listItemText}
                            />
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                className={classes.listItemSecText}
                            >
                                {new Intl.NumberFormat("en-US", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(referral.value)}
                            </Typography>
                        </ListItem>
                ))}
            </List>
        </Card>
    );
}

FavoriteSearchView.propTypes = {
    className: PropTypes.string
};

export default FavoriteSearchView;
