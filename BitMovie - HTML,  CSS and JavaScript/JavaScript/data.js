const dataModule = (function () {

    class Show {
        constructor(id, name, image, rating, summary, cast, seasons) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.rating = rating;
            this.summary = summary;
            this.cast = cast;
            this.seasons = seasons;
        }
    }

    function getShows(end) {
        const url = `http://api.tvmaze.com/shows`
        $.get(url, function (data) {
            let showList = [];
            for (let i = 0; i < 50; i++) {
                let show = new Show(data[i].id, data[i].name, data[i].image.medium, data[i].rating, data[i].summary);
                showList.push(show);
            }
            end(showList);
        })
    }

    function getSingleShow(id, onSingleShowSuccess) {
        $.get(`http://api.tvmaze.com/shows/${id}`, function (showData) {
            $.get(`http://api.tvmaze.com/shows/${id}/cast`, function (castData) {
                $.get(`http://api.tvmaze.com/shows/${id}/seasons`, function (seasonData) {
                    let name = showData.name;
                    let image = showData.image;
                    let summary = showData.summary;

                    const castList = [];
                    for (let i = 0; i < castData.length; i++) {
                        castList.push(castData[i].person.name);
                    }

                    const seasons = [];
                    for (let i = 0; i < seasonData.length; i++) {
                        seasons.push(seasonData[i].premiereDate + '-' + seasonData[i].endDate);
                    }

                    const show = new Show(id, name, image.medium, 0, summary, castList, seasons);

                    onSingleShowSuccess(show);
                })
            })
        })
    }

    function getSearch(name, onSearch) {
        $.get("http://api.tvmaze.com/search/shows?q=" + name, function (data) {
            const show = data
            const showList = []
            for(let i = 0; i < 10; i++) {
                const showSearch = new Show(show[i].id, show[i].name, show[i].image.medium, show[i].rating, show[i].summary);
                showList.push(showSearch)
            }
            onSearch(showList)
        })
    }

    return {
        getShows,
        getSingleShow,
        getSearch
    }
})();