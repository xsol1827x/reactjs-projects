import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import typeColors from './TypeColors';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    Card__type: {
        padding: '5px 10px',
        margin: '10px 10px 10px 0',
        borderRadius: '5px',
        background: 'cyan',
        color: '#fff',
        display: 'inline-block',
        justifyContent: 'center'
    },
    image: {
        justifyContent: 'center',
        display: 'inline-block'
    }
});

const Cards = ({ pokemon }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {pokemon.name}
                    </Typography>
                    {pokemon.types && pokemon.types.map(type => {
                        return (
                            <Typography className={classes.Card__type} style={{ backgroundColor: typeColors[type.type.name] }} key={Math.random() + 1}>
                                {type.type.name}
                            </Typography>
                        )
                    })}

                    <div>
                        <img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}></img>
                    </div>

                    <Typography variant="body2" component="p">
                        Height: {pokemon.height}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Weight: {pokemon.weight}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Ability: {pokemon.abilities && pokemon.abilities[0].ability.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards
