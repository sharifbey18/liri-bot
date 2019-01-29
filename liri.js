import Axios from "axios";

const url = 'https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp';
const log = console.log

Axios.get(url)
.then((res) => {
    log(res);
});
.catch((err) => {
    log(err);
})



