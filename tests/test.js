import { Selector } from 'testcafe';
const numOfTitles = 7

fixture `UI_TEST`
.page `http://localhost:3030/`

test
.page `http://localhost:3030/movies`
(
    'Movies', async t => {

        console.log('Testing movies path.');

        var movieTitles = Selector('.panel-title');
        var movieCount = movieTitles.count;

        await t.expect(movieCount).eql(numOfTitles);
    }
)