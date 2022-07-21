$(document).ready(function () {

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return 'wmr';
    }

    var enterOrFocusout = 0;
    var parse = getCookie('curr') === 'wmr' ? 'parseInt' : 'parseFloat';

    $('.lang-dropdown-item').click(function () {
        document.cookie = "curr=" + $(this).data('curr') + "; " + 3306 + ";path=/";
        location.reload();
    });

    if ($('.js-tab-container-resp').length) {
        $('.js-tab-container-resp').load($('.js-tab-container-resp').data('path'));
    }

    $('.js-search-page').click(function () {
        if ($('.js-search-input').val().length > 0) {
            location.href = $('.js-search-input').data('path') + '?search=' + encodeURIComponent($('.js-search-input').val());
        }
    });

    $('.js-search-input').on('keypress', function (e) {
        if (e.which == 13) {
            location.href = $('.js-search-input').data('path') + '?search=' + encodeURIComponent($('.js-search-input').val());
        }
    });

    $(".js-catalog-search").keyup(function () {
        updateCatalogFilter()
    });

    $(".js-inpit-min").focusout(function () {
        if (enterOrFocusout === 1) {
            enterOrFocusout = 0;
            return false;
        }
        minInput(this);
    });

    $(".js-inpit-min").keyup(function () {
        if (event.keyCode == 13) {
            minInput(this);
            enterOrFocusout = 1;
            return false;
        }
    });

    $(".js-inpit-max").focusout(function () {
        if (enterOrFocusout === 1) {
            enterOrFocusout = 0;
            return false;
        }
        maxInput(this);
    });

    $(".js-inpit-max").keyup(function () {
        if (event.keyCode == 13) {
            maxInput(this);
            enterOrFocusout = 1;
            return false;
        }
    });

    $('.js-section').change(function () {
        updateCatalogFilter()
    });

    function minInput(a) {
        var val = window[parse]($(a).val());
        var min = window[parse]($(".js-inpit-min").data('default'));
        var max = window[parse]($(".js-inpit-max").data('default'));
        var maxVal = window[parse]($(".js-inpit-max").val());
        if (val < min) {
            $(".js-inpit-min").val(min);
            val = window[parse]($(a).val());
        }
        if (val > maxVal) {
            $(".js-inpit-max").val(val);
        }
        if (min <= val && max >= val) {
            updateCatalogFilter();
        }
    }

    function maxInput(a) {
        var val = window[parse]($(a).val());
        var min = window[parse]($(".js-inpit-min").data('default'));
        var max = window[parse]($(".js-inpit-max").data('default'));
        var minVal = window[parse]($(".js-inpit-min").val());
        if (val > max) {
            $(".js-inpit-max").val(max);
            val = window[parse]($(a).val());
        }
        if (val < minVal) {
            $(".js-inpit-max").val(minVal);
        }
        if (min <= val && max >= val) {
            updateCatalogFilter();
        }
    }

    $(".js-inpit-min").keyup(function () {
        if (event.keyCode == 13) {
            minInput(this);
            enterOrFocusout = 1;
            return false;
        }
    });

    $('.js-select-order').click(function () {
        updateCatalogFilter();
    });

    $('.js-show-more').click(function () {
        $('.product-items').data('page', $('.product-items').data('page') + 1);
        updateCatalogFilter(true);
    });

    $('.js-section').change(function () {
        updateCatalogFilter()
    });

    $(document).on('click', '.js-pagintatin-page', function () {
        $('.js-game-container').data('page', $(this).data('page'));
        updateCatalogFilter();
    });

    $('.js-more-comment').click(function () {
        var path = $('.js-tab-container-resp').data('path');
        $('.js-tab-container-resp').data('page', $('.js-tab-container-resp').data('page') + 1);
        var page = $('.js-tab-container-resp').data('page');
        $('.js-tab-container-resp').append($('<div>').load(path + '?page=' + page));
    });

    function updateCatalogFilter(append = false) {
        var separator = $('.js-game-container').data('path').indexOf('?') == -1 ? '?' : '&';
        var criterias = getCriterias();
        if ($('.js-section').val() != undefined) {
            var sections = $('.js-section-input').map(function () {
                return $(this).is(':checked') ? $(this).val() : false;
            }).get();
            sections.forEach(section => criterias.push("sections[]=" + section));
        }
        criterias = criterias.join('&');
        var path = $('.js-game-container').data('path') + separator + criterias;
        $('.js-game-container').data('filter', path);
        if (append)
            $.get(path, function (dados) {
                $(".product-items").append(dados);
            });
        else
            $('.js-game-container').load(path);
        if ($('.js-section').length) {
            $('.js-section-input').prop('checked', 'checked')
        }

        if ($('.js-pagination').length) {
            criterias += '&ispage=true';
            var path = $('.js-game-container').data('path') + separator + criterias;
            $('.js-pagination').load(path);
        }
    }

    function getCriterias() {
        var criterias = [];
        if (($(".js-catalog-search").val() != undefined && $(".js-catalog-search").val() != '') || ($(".js-catalog-search-mob").val() != undefined && $(".js-catalog-search-mob").val() != '')) {
            var name = $(".js-catalog-search").val() == '' ? $(".js-catalog-search-mob").val() : $(".js-catalog-search").val();
            criterias.push("name=" + encodeURI(name));
        }
        if ($(".js-inpit-min").val() != undefined) {
            var min = $(".js-inpit-min").val();
            var minDefault = $(".js-inpit-min").data('default');
            var max = $(".js-inpit-max").val();
            var maxDefault = $(".js-inpit-max").data('default');
            if (min != minDefault || max != maxDefault) {
                criterias.push("curr=" + $(".js-inpit-min").data('curr'));
                criterias.push("minprice=" + $(".js-inpit-min").val());
                criterias.push("maxprice=" + $(".js-inpit-max").val());
            }
        }
        criterias.push("page=" + $('.js-game-container').data('page'))
        if ($('.js-select-order.active').val() != undefined) {
            criterias.push($('.js-select-order').val());
        }
        return criterias
    }

    $('.js-clean-filter').click(function () {
        $(".js-inpit-min").val($(".js-inpit-min").data('default'));
        $(".js-inpit-max").val($(".js-inpit-max").data('default'));
        keypressSlider.noUiSlider.set([$(".js-inpit-min").data('default'), $(".js-inpit-max").data('default')]);
        updateCatalogFilter();
    });

});