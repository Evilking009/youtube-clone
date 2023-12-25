import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from './';
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
    const STACK_STYLES = {
        flexDirection: { sx: 'column', md: 'row' },
    }
    const BOX_STYLES = {
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 }
    }
    const TEXT_STYLES = {
        mt: 1.5,
        color: '#fff'
    }

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items));
    }, [selectedCategory]);

    return (
        <Stack sx={STACK_STYLES}>
            <Box sx={BOX_STYLES}>

                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className="coopyright" variant="body2" sx={TEXT_STYLES}
                >
                    Copyright 2023 MK Youtube Clone
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant="h4" fontWeight={'bold'} mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;