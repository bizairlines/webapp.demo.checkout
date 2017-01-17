angular
    .module('photo-slider')
    .component('bizPhotoSlider', {
        controller: 'PhotoSliderController',
        templateUrl: 'components/aircraft-item/photo-slider/photo-slider.tpl.html',
        bindings: {
            photos: '<'
        }
    });
