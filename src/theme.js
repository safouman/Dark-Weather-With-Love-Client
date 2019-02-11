import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export default createMuiTheme({
    palette: {
        type: 'dark',
        primary: { 500: teal[50] }
    }
});
