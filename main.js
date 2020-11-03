
var chart = c3.generate({
    data: {
        x : 'x',
        columns: [
            ['x', 'Black Gay Men', 'Latino Gay Men', 'White Gay Men', 'Black Heterosexual Women', 'Drug Abusers', 'Black Heterosexual Men', 'Latino Heterosexual Women', 'White Heterosexual Women'],
            ['Year: 2018 (in thousands)', 9.4, 8, 5.7, 3.5, 2.4, 1.5, 1, .91],
        ],
        type: 'bar'
    },
    axis: {
        x: {
            type: 'category',
            tick: {
                rotate: 75,
                multiline: false
            },
            height: 130
        }
    }
});


var chart = c3.generate({
    data: {
        columns: [
            ['Blacks', 42],
            ['Whites', 25],
            ['Hispanics/Latinos', 27],
            ['Asians', 6],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
       bindto: '#chart1'
});
