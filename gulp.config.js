module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            scripts: 'src/app/**/*.js',
            stylesheets: [
                'src/assets/stylesheets/main.scss'
            ],
            images: 'src/assets/images/**/*',
            map: 'src/assets/map/*',
            fonts: [
                'src/assets/fonts/**/*',
                'node_modules/font-awesome/fonts/**/*'
            ],
            templates: 'src/app/**/*.tpl.html',
            vendors:  {
                scripts : [
                        'node_modules/angular/angular.min.js',
                        'node_modules/moment/min/moment.min.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                        'node_modules/angular-messages/angular-messages.min.js',
                        'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
                        'node_modules/angular-input-masks/releases/angular-input-masks-standalone.min.js',
                        'node_modules/angular-ui-mask/dist/mask.min.js',
                        'node_modules/ng-file-upload/dist/ng-file-upload.min.js',
                        'node_modules/angularjs-datetime-picker/angularjs-datetime-picker.min.js',
                        'node_modules/angular-websocket/dist/angular-websocket.min.js',
                        'node_modules/d3/d3.js',
                        'node_modules/topojson/build/topojson.js',
                        'node_modules/moment-range/dist/moment-range.js',
                        'node_modules/ng-inline-edit/dist/ng-inline-edit.js'
                ],
                    styles : [
                        'node_modules/angularjs-datetime-picker/angularjs-datetime-picker.css',
                        'node_modules/font-awesome/css/font-awesome.css',
                        'node_modules/ng-inline-edit/dist/ng-inline-edit.css'
                ]
            }
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            constants: 'dev/app',
            stylesheets: 'dev/stylesheets',
            images: 'dev/images',
            fonts: 'dev/fonts',
            map: 'dev/map',
            templates: 'dev/app',
            vendors: 'dev/vendors'
        },
        release: {
            index: 'public',
            scripts: 'public/app',
            constants: 'public/app',
            stylesheets: 'public/stylesheets',
            images: 'public/images',
            fonts: 'public/fonts',
            map: 'dev/map',
            templates: 'public/app',
            vendors: 'public/vendors'
        }
    };
};