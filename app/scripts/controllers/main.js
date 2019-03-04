'use strict';
/**
 * @ngdoc function
 * @name ApsilonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ApsilonApp
 */
angular.module('ApsilonApp')
        .controller('MainCtrl', function ($scope, $position) {
            
            $('.carousel').carousel();
            
            $scope.mySlides = [
                'https://staticr1.blastingcdn.com/media/photogallery/2016/11/25/660x290/b_620x273/pastor-genival-bento-foto-divulgacao_999903.jpg',
                'https://staticr1.blastingcdn.com/media/photogallery/2016/11/25/660x290/b_620x273/pastor-genival-bento-foto-divulgacao_999903.jpg',
                'https://staticr1.blastingcdn.com/media/photogallery/2016/11/25/660x290/b_620x273/pastor-genival-bento-foto-divulgacao_999903.jpg'
            ]
            console.log("meu pau azul");
            
            $scope.bar = {
                labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                series: ['Series A', 'Series B'],
                data: [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
                ]

            };

            $scope.pie = {
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                data: [300, 500, 100]
            };

            $scope.donut = {
                labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                data: [300, 500, 100]
            };

        });
