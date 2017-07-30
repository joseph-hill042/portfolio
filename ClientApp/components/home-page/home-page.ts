import * as ko from 'knockout';

class HomePageViewModel {

    public skillIcons = [
        {
            title: 'HTML',
            devicon: 'devicon-html5-plain'
        },
        {
            title: 'CSS',
            devicon: 'devicon-css3-plain'
        },
        {
            title: 'JavaScript',
            devicon: 'devicon-javascript-plain'
        },
        {
            title: 'Dev Tools',
            devicon:'devicon-chrome-plain'
        },
        {
            title: 'WebStorm',
            devicon: 'devicon-webstorm-plain'
        },
        {
            title: 'PhpStorm',
            devicon: 'devicon-phpstorm-plain'
        },
        {
            title: 'Visual Studio',
            devicon: 'devicon-visualstudio-plain'
        },
        {
            title: 'Atom',
            devicon: 'devicon-atom-original'
        },
        {
            title: 'Linux',
            devicon: 'devicon-linux-plain'
        },
        {
            title: 'Windows',
            devicon: 'devicon-windows8-original'
        },
        {
            title: 'Mac',
            devicon: 'devicon-apple-original'
        },
        {
            title: 'NodeJS',
            devicon: 'devicon-nodejs-plain'
        },
        {
            title: 'React',
            devicon: 'devicon-react-original'
        },
        {
            title: 'jQuery',
            devicon: 'devicon-jquery-plain'
        },
        {
            title: 'AngularJS',
            devicon: 'devicon-angularjs-plain'
        },
        {
            title: 'TypeScript',
            devicon: 'devicon-typescript-plain'
        },
        {
            title: 'Bootstrap',
            devicon: 'devicon-bootstrap-plain'
        },
        {
            title: 'Sass',
            devicon: 'devicon-sass-original'
        },
        {
            title: 'PHP',
            devicon: 'devicon-php-plain'
        },
        {
            title: 'Laravel',
            devicon: 'devicon-laravel-plain',
        },
        {
            title: 'ASP.Net',
            devicon: 'devicon-dot-net-plain'
        },
        {
            title: 'C#',
            devicon: 'devicon-csharp-plain'
        },
        {
            title: 'WordPress',
            devicon: 'devicon-wordpress-plain'
        },
        {
            title: 'Gulpjs',
            devicon: 'devicon-gulp-plain'
        },
        {
            title: 'Webpack',
            devicon: 'devicon-webpack-plain'
        },
        {
            title: 'Gimp',
            devicon: 'devicon-gimp-plain'
        },
        {
            title: 'Git',
            devicon: 'devicon-git-plain'
        },
        {
            title: 'GitHub',
            devicon: 'devicon-github-plain'
        },
        {
            title: 'AWS',
            devicon: 'devicon-amazonwebservices-original'
        },
        {
            title: 'NGINX',
            devicon: 'devicon-nginx-original'
        },
        {
            title: 'MySQL',
            devicon: 'devicon-mysql-plain'
        },
        {
            title: 'MongoDB',
            devicon: 'devicon-mongodb-plain'
        }
        
        
    ];
}

export default { viewModel: HomePageViewModel, template: require('./home-page.html') };
