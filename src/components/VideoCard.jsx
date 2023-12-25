import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from "../utils/constants";

function VideoCard({ video: { id: { videoId }, snippet } }) {

    const CARD_WIDTH = '320px';

    const CARD_STYLES = {
        width: { xs: '100%', sm: '358px', md: CARD_WIDTH },
        boxShadow: 'none',
        borderRadius: 0,
    }

    const CARDMEDIA_STYLES = {
        width: { xs: '100%', sm: '358px', md: CARD_WIDTH },
        height: 180
    }

    const CARDCONTENT_STYLES = {
        backgroundColor: '#1e1e1e',
        height: '106px'
    }

    const CHECKCIRCLE_STYLES = {
        fontSize: 14,
        color: 'gray',
        ml: '5px'
    }

    return (
        <Card sx={CARD_STYLES} >
            <Link to={videoId ? `/video/${videoId}` : demoThumbnailUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={CARDMEDIA_STYLES}
                />
            </Link>

            <CardContent sx={CARDCONTENT_STYLES}>

                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color='#FFF'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color='gray'>
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={CHECKCIRCLE_STYLES} />
                    </Typography>
                </Link>

            </CardContent>

        </Card>
    )
}

export default VideoCard