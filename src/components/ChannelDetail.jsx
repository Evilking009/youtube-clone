import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

    const [channelDetail, setchannelDetail] = useState(null);
    const [videos, setvideos] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => setchannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data => setvideos(data?.items));
    }, [id])

    const DIV_STYLE = {
        background: "rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        zIndex: 10,
        height: '300px',
    };

    return (
        <Box minHeight={"95vh"}>
            <Box>
                <div style={DIV_STYLE} />

                <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
            </Box>
            <Box display={'flex'} p={'2'}>
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}

export default ChannelDetail;