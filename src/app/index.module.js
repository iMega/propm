import { config } from './index.config';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('propm', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMaterial', 'toastr'])
    .config(config)
    .directive('acmeNavbar', NavbarDirective);

