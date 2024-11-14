import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';



export const ArticleComponent = ({ title, summary, image }) => {


    return <Card>
        <CardHeader>
            <img src={image} alt="article-image" />

        </CardHeader>
        <CardContent>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="p">{summary}</Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
        </CardActions>

    </Card>

}