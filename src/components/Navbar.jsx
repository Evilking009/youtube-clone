import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from '../utils/constants';
import SearchBar from "./SearchBar";

const Navbar = () => {

    const stackStyles = {
        position: 'sticky',
        background: '#000',
        top: 5,
        justifyContent: 'space-between'
    };

    const linkStyles = {
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <Stack direction="row" alignItems="center" p={2} sx={stackStyles}>
            <Link to='/' style={linkStyles}>
                <img src={logo} alt="logo" height="45" />
            </Link>
            <SearchBar />
        </Stack>
    );
}

export default Navbar;