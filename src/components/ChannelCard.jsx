import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }) {

    const BOX_STYLES = {
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
    }

    const CARDCONTENT_STYLES = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff'
    }

    const CARDMEDIA_STYLES = {
        borderRadius: '50%',
        height: '180px',
        width: '180px',
        mb: 2,
        border: '1px solid #e3e3e3'
    }

    const CHECKCIRCLE_STYLES = {
        fontSize: 12,
        color: 'gray',
        ml: '5px'
    }

    return (
        <Box sx={BOX_STYLES}>
            <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
                <CardContent sx={CARDCONTENT_STYLES}>
                    <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={CARDMEDIA_STYLES}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={CHECKCIRCLE_STYLES} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount)?.toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard