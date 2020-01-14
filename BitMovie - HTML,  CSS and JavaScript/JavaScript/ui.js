const uiModule = (function () {

    function displayShow(showList) {
        $parent = $('#show-list');

        let $title = $('<h1>');
        $title.text('Popular Shows');
        $title.addClass('col-12');
        $parent.append($title);

        for (let i = 0; i < showList.length; i++) {
            let $show = $('<div>');
            $show.addClass('col-3 show');
            $show.attr("data-id", showList[i].id)


            let $image = $('<img>');
            $image.attr('src', showList[i].image);
            $show.append($image);

            let $title = $('<h3>');
            $title.text(showList[i].name);
            $show.append($title);

            $parent.append($show);
        }
    }

    function del() {
        $('#show-list').empty()
    }

    function displaySingleShow(show) {
        $('#show-list').empty()

        let $show = $('<div>');
        $show.addClass('col-12 show');
        $show.attr("data-id", show.id);

        let $title = $('<h3>');
        $title.text(show.name);
        $show.append($title);


        let $image = $('<img>');
        $image.attr('src', show.image);
        $show.append($image);

        //summary

        let $details = $('<h4>');
        $details.text('More Details');
        $show.append($details);

        let $summary = $('<p>');
        $summary.html(show.summary);
        $show.append($summary);

        //cast

        let $castTitle = $('<h4>');
        $castTitle.text('Cast:');
        $show.append($castTitle);

        let $castList = $('<ul>');
        for (let i = 0; i < show.cast.length; i++) {
            $li = $('<li>');
            $li.text(show.cast[i]);
            $castList.append($li);
        }
        $show.append($castList);

        // seasons

        let $seasonTitle = $('<h4>');
        $seasonTitle.text('Seasons:');
        $show.append($seasonTitle);

        let $seasons = $('<ul>');
        for (let i = 0; i < show.seasons.length; i++) {
            $li = $('<li>');
            $li.text(show.seasons[i]);
            $seasons.append($li);
        }
        $show.append($seasons);

        $parent.append($show);
    }
    

    return {
        displayShow,
        displaySingleShow,
        del
    }
})();