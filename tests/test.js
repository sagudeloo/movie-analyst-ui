import { Selector } from 'testcafe';

fixture `UI_TEST`
.page `http://localhost:3030/`

test
.page `http://localhost:3030/`
(
    'Categories', async t => {

        console.log('Testing root path.');

        var titles = Selector(".panel-title", t);
        var titleCount = titles.count;

        await t.expect(titleCount).eql(3);
    }
)