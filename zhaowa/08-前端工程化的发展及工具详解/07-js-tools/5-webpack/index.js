import $ from 'jquery'

import('./module')
    .then(content => {
        console.log(content, $('body'))
    })
