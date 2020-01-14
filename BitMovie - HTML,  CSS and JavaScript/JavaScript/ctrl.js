const ctrlModule = (function (data, ui) {
  $(function () { data.getShows(showSeries); })

  $('.bit').on('click', bit)

  function bit() {
    ui.del()
    data.getShows(showSeries)
  }

  function onShowClick(event) {
    const element = event.currentTarget
    const id = $(element).attr('data-id')
    console.log(id); //ovde treba da pozovemo onu function getSingleShow
    data.getSingleShow(id, function (show) {
      ui.displaySingleShow(show)
    })
  }


  function showSeries(showList) {
    ui.displayShow(showList)
    let shows = $('.show')
    shows.each(function (i, show) {
      $(show).on('click', onShowClick)
    })

  }

})(dataModule, uiModule);